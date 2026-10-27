"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function Hero3DScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Check WebGL availability
    const isWebGLAvailable = () => {
      try {
        const canvas = document.createElement("canvas");
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
        );
      } catch {
        return false;
      }
    };

    if (!isWebGLAvailable()) {
      setWebGLSupported(false);
      return;
    }

    // 2. Reduced motion check
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    // 3. Three.js Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: "high-performance"
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.75));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 4. Create restrained monochrome 3D elements
    const group = new THREE.Group();
    scene.add(group);

    // Inner wireframe icosahedron
    const icoGeometry = new THREE.IcosahedronGeometry(2, isMobile ? 1 : 2);
    const icoMaterial = new THREE.MeshBasicMaterial({
      color: 0x404040,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const icoMesh = new THREE.Mesh(icoGeometry, icoMaterial);
    group.add(icoMesh);

    // Concentric orbital ring 1
    const ring1Geom = new THREE.TorusGeometry(2.8, 0.015, 8, isMobile ? 32 : 64);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x666666,
      transparent: true,
      opacity: 0.25
    });
    const ring1Mesh = new THREE.Mesh(ring1Geom, ring1Mat);
    ring1Mesh.rotation.x = Math.PI / 3;
    group.add(ring1Mesh);

    // Concentric orbital ring 2
    const ring2Geom = new THREE.TorusGeometry(3.2, 0.01, 8, isMobile ? 32 : 64);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x888888,
      transparent: true,
      opacity: 0.18
    });
    const ring2Mesh = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2Mesh.rotation.y = Math.PI / 4;
    group.add(ring2Mesh);

    // Subtle depth nodes (points)
    const count = isMobile ? 30 : 65;
    const pointsGeom = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2.4 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    pointsGeom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pointsMat = new THREE.PointsMaterial({
      color: 0xa0a0a0,
      size: 0.04,
      transparent: true,
      opacity: 0.4
    });
    const pointsMesh = new THREE.Points(pointsGeom, pointsMat);
    group.add(pointsMesh);

    // 5. Pointer movement state
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      const { innerWidth, innerHeight } = window;
      targetX = ((e.clientX / innerWidth) - 0.5) * 0.8;
      targetY = ((e.clientY / innerHeight) - 0.5) * 0.8;
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handlePointerMove);
    }

    // 6. Resize handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // 7. Animation loop
    let animationFrameId: number;
    const animate = () => {
      if (!prefersReducedMotion) {
        // Smooth lerp to mouse position
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        // Gentle constant rotation
        icoMesh.rotation.y += 0.0018;
        icoMesh.rotation.x += 0.0009;
        ring1Mesh.rotation.z += 0.0012;
        ring2Mesh.rotation.x -= 0.0015;
        pointsMesh.rotation.y += 0.0008;

        // Interactive tilt
        group.rotation.y = mouseX;
        group.rotation.x = mouseY;
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // 8. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (!isMobile) {
        window.removeEventListener("mousemove", handlePointerMove);
      }

      icoGeometry.dispose();
      icoMaterial.dispose();
      ring1Geom.dispose();
      ring1Mat.dispose();
      ring2Geom.dispose();
      ring2Mat.dispose();
      pointsGeom.dispose();
      pointsMat.dispose();
      renderer.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (!webGLSupported) {
    // Graceful fallback when WebGL is unavailable
    return (
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-96 h-96 rounded-full border border-neutral-800/60 opacity-20" />
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-60"
      aria-hidden="true"
    />
  );
}
