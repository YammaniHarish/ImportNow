import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// City coordinates (Latitude, Longitude)
const CITIES = [
  { id: 'shanghai', name: 'Shanghai', country: 'CN', flag: '🇨🇳', lat: 31.2304, lng: 121.4737, type: 'origin', desc: 'HQ & Sea Port' },
  { id: 'yiwu', name: 'Yiwu', country: 'CN', flag: '🇨🇳', lat: 29.3150, lng: 120.0768, type: 'origin', desc: 'Small Commodities' },
  { id: 'guangzhou', name: 'Guangzhou', country: 'CN', flag: '🇨🇳', lat: 23.1291, lng: 113.2644, type: 'origin', desc: 'Canton Fair & Auto' },
  { id: 'nhava_sheva', name: 'Nhava Sheva', country: 'IN', flag: '🇮🇳', lat: 18.9500, lng: 72.9500, type: 'destination', desc: 'JNPT Port Mumbai' },
  { id: 'hyderabad', name: 'Hyderabad', country: 'IN', flag: '🇮🇳', lat: 17.3850, lng: 78.4867, type: 'destination', desc: 'Tech & Retail Hub' },
  { id: 'chennai', name: 'Chennai', country: 'IN', flag: '🇮🇳', lat: 13.0827, lng: 80.2707, type: 'destination', desc: 'East Coast Port' }
];

// Active trade corridors
const ROUTES = [
  { id: 'r1', from: 'yiwu', to: 'hyderabad', label: 'Yiwu → Hyderabad', time: '14 Days Sea', mode: 'FCL & LCL' },
  { id: 'r2', from: 'shanghai', to: 'nhava_sheva', label: 'Shanghai → Nhava Sheva', time: '12 Days Direct', mode: 'Ocean Express' },
  { id: 'r3', from: 'guangzhou', to: 'chennai', label: 'Guangzhou → Chennai', time: '10 Days Sea', mode: 'Direct Route' }
];

// Coordinate conversion helper (Spherical to 3D Cartesian)
function latLngToVector3(lat, lng, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

// Procedural Equirectangular World Map Texture Generator
function createWorldMapTexture() {
  const width = 2048;
  const height = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  // Deep tech ocean gradient
  const oceanGrad = ctx.createLinearGradient(0, 0, 0, height);
  oceanGrad.addColorStop(0, '#0b1329');
  oceanGrad.addColorStop(0.5, '#0e1738');
  oceanGrad.addColorStop(1, '#080d1f');
  ctx.fillStyle = oceanGrad;
  ctx.fillRect(0, 0, width, height);

  // Subtle coordinate grid (Latitude & Longitude)
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.08)';
  ctx.lineWidth = 1;

  // Parallels (Latitude lines every 15 deg)
  for (let lat = -75; lat <= 75; lat += 15) {
    const y = ((90 - lat) / 180) * height;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  // Meridians (Longitude lines every 15 deg)
  for (let lng = -180; lng <= 180; lng += 15) {
    const x = ((lng + 180) / 360) * width;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }

  // Equator highlight
  ctx.strokeStyle = 'rgba(211, 47, 47, 0.2)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(0, height / 2);
  ctx.lineTo(width, height / 2);
  ctx.stroke();

  // Draw simplified world continents polygons
  function toX(lng) { return ((lng + 180) / 360) * width; }
  function toY(lat) { return ((90 - lat) / 180) * height; }

  function drawLandmass(points, fillColor = '#1e293b', strokeColor = '#334155') {
    ctx.beginPath();
    points.forEach(([lng, lat], i) => {
      const x = toX(lng);
      const y = toY(lat);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  // General Eurasia & Europe
  const eurasia = [
    [-10, 36], [0, 44], [10, 54], [25, 71], [40, 68], [60, 73], [90, 74], [115, 72], [140, 72],
    [170, 66], [180, 65], [160, 55], [142, 50], [130, 43], [122, 38], [121, 31], [118, 25],
    [108, 20], [105, 10], [100, 4], [98, 10], [92, 22], [88, 22], [82, 16], [80, 8], [77, 8],
    [72, 19], [68, 24], [62, 25], [55, 25], [50, 30], [35, 32], [28, 41], [15, 40], [5, 43],
    [-8, 43], [-10, 36]
  ];
  drawLandmass(eurasia, '#1e293b', '#475569');

  // China Focus Region (Highlighted landmass with subtle crimson border glow)
  const chinaPoly = [
    [75, 39], [80, 45], [87, 49], [96, 43], [110, 42], [118, 40], [125, 42], [130, 45],
    [131, 42], [122, 38], [121, 31], [119, 25], [113, 22], [108, 21], [105, 22], [100, 21],
    [97, 27], [92, 28], [88, 28], [80, 32], [75, 36], [75, 39]
  ];
  drawLandmass(chinaPoly, '#25334d', 'rgba(211, 47, 47, 0.7)');

  // India & South Asia Focus Region
  const indiaPoly = [
    [68, 24], [72, 32], [76, 35], [80, 31], [88, 27], [92, 25], [92, 21], [88, 21],
    [85, 18], [80, 13], [80, 8], [77, 8], [75, 13], [73, 19], [68, 24]
  ];
  drawLandmass(indiaPoly, '#223249', 'rgba(56, 189, 248, 0.6)');

  // Africa
  const africa = [
    [-17, 15], [-12, 26], [0, 36], [11, 37], [25, 32], [32, 30], [43, 12], [51, 12],
    [45, 0], [40, -10], [35, -24], [28, -33], [18, -34], [12, -18], [9, 4], [0, 6],
    [-15, 11], [-17, 15]
  ];
  drawLandmass(africa, '#1e293b', '#334155');

  // Australia
  const australia = [
    [114, -22], [116, -34], [130, -32], [138, -35], [148, -38], [153, -28], [146, -18],
    [142, -11], [136, -12], [130, -14], [122, -17], [114, -22]
  ];
  drawLandmass(australia, '#1e293b', '#334155');

  // North America
  const northAmerica = [
    [-168, 66], [-140, 70], [-100, 72], [-80, 60], [-60, 48], [-66, 44], [-75, 35],
    [-80, 25], [-90, 20], [-97, 26], [-105, 23], [-115, 32], [-124, 40], [-125, 49],
    [-140, 60], [-168, 66]
  ];
  drawLandmass(northAmerica, '#1e293b', '#334155');

  // South America
  const southAmerica = [
    [-80, 8], [-75, 11], [-60, 5], [-50, 0], [-35, -5], [-37, -12], [-42, -22],
    [-52, -34], [-65, -45], [-73, -53], [-75, -45], [-72, -30], [-78, -15], [-81, -5], [-80, 8]
  ];
  drawLandmass(southAmerica, '#1e293b', '#334155');

  // Southeast Asia Archipelago dots
  const islands = [
    [106, -6], [114, -8], [115, 4], [121, 14], [120, -2], [140, -4], [135, 35], [140, 40]
  ];
  islands.forEach(([lng, lat]) => {
    ctx.beginPath();
    ctx.arc(toX(lng), toY(lat), 6, 0, Math.PI * 2);
    ctx.fillStyle = '#334155';
    ctx.fill();
  });

  // Glowing tech points over China & India manufacturing clusters
  const clusterPoints = [
    [121.47, 31.23], [120.08, 29.31], [113.26, 23.13], [114.05, 22.54], [121.54, 29.87],
    [72.87, 19.07], [78.48, 17.38], [80.27, 13.08], [77.20, 28.61], [77.59, 12.97]
  ];
  clusterPoints.forEach(([lng, lat]) => {
    const x = toX(lng);
    const y = toY(lat);
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#ef4444';
    ctx.shadowColor = '#f87171';
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.shadowBlur = 0;
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

export default function GlobeVisual() {
  const containerRef = useRef(null);
  const [activeRoute, setActiveRoute] = useState('all');
  const [hoveredCity, setHoveredCity] = useState(null);
  const [screenCoords, setScreenCoords] = useState({});

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 580;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 1.2, 5.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group holding the globe and all attached elements
    const globeGroup = new THREE.Group();
    // Default initial rotation centered towards the India/China corridor (~85°-110° Longitude)
    globeGroup.rotation.y = -Math.PI * 0.58;
    globeGroup.rotation.x = 0.28;
    scene.add(globeGroup);

    // 2. Earth Sphere
    const sphereRadius = 2.0;
    const earthGeometry = new THREE.SphereGeometry(sphereRadius, 64, 64);
    const earthTexture = createWorldMapTexture();
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: earthTexture,
      shininess: 25,
      specular: new THREE.Color('#38bdf8'),
      bumpScale: 0.05
    });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    globeGroup.add(earthMesh);

    // 3. Atmospheric Outer Glow
    const atmosphereGeometry = new THREE.SphereGeometry(sphereRadius * 1.18, 48, 48);
    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.2);
          gl_FragColor = vec4(0.22, 0.53, 0.96, intensity * 0.45);
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphereMesh);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.1);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight1.position.set(5, 4, 3);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 0.8);
    dirLight2.position.set(-5, -2, -2);
    scene.add(dirLight2);

    // 5. City Pins on the Globe
    const pinGroup = new THREE.Group();
    globeGroup.add(pinGroup);

    const city3DPositions = {};

    CITIES.forEach(city => {
      const pos = latLngToVector3(city.lat, city.lng, sphereRadius);
      city3DPositions[city.id] = pos;

      // Small glowing anchor cylinder
      const pinGeom = new THREE.CylinderGeometry(0.015, 0.02, 0.08, 12);
      pinGeom.rotateX(Math.PI / 2);
      const isOrigin = city.type === 'origin';
      const pinMat = new THREE.MeshBasicMaterial({
        color: isOrigin ? 0xD32F2F : 0x2563EB
      });
      const pinMesh = new THREE.Mesh(pinGeom, pinMat);
      pinMesh.position.copy(pos);
      pinMesh.lookAt(pos.clone().multiplyScalar(2));
      pinGroup.add(pinMesh);

      // Outer ripple ring
      const ringGeom = new THREE.RingGeometry(0.035, 0.055, 24);
      const ringMat = new THREE.MeshBasicMaterial({
        color: isOrigin ? 0xff4d4d : 0x60a5fa,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8
      });
      const ringMesh = new THREE.Mesh(ringGeom, ringMat);
      ringMesh.position.copy(pos.clone().multiplyScalar(1.002));
      ringMesh.lookAt(pos.clone().multiplyScalar(2));
      pinGroup.add(ringMesh);
    });

    // 6. 3D Flight / Ocean Trade Arcs (Bezier Curves)
    const arcObjects = [];
    const photonParticles = [];

    ROUTES.forEach(route => {
      const startPos = city3DPositions[route.from];
      const endPos = city3DPositions[route.to];
      if (!startPos || !endPos) return;

      // Calculate midpoint elevated into space for an authentic Bezier trajectory
      const midPoint = new THREE.Vector3().addVectors(startPos, endPos).multiplyScalar(0.5);
      const distance = startPos.distanceTo(endPos);
      const altitude = sphereRadius + distance * 0.45;
      midPoint.normalize().multiplyScalar(altitude);

      // Create quadratic Bezier curve
      const curve = new THREE.QuadraticBezierCurve3(startPos, midPoint, endPos);
      const points = curve.getPoints(60);
      const curveGeometry = new THREE.BufferGeometry().setFromPoints(points);

      // Glowing crimson arc line
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0xD32F2F,
        transparent: true,
        opacity: 0.75,
        linewidth: 2
      });
      const arcLine = new THREE.Line(curveGeometry, lineMaterial);
      globeGroup.add(arcLine);
      arcObjects.push({ routeId: route.id, mesh: arcLine, curve });

      // Pulsing photon / shipment packet moving along the arc
      const particleGeom = new THREE.SphereGeometry(0.04, 12, 12);
      const particleMat = new THREE.MeshBasicMaterial({
        color: 0xffffff
      });
      const particle = new THREE.Mesh(particleGeom, particleMat);
      globeGroup.add(particle);

      photonParticles.push({
        mesh: particle,
        curve,
        progress: Math.random(),
        speed: 0.0035 + Math.random() * 0.002
      });
    });

    // 7. Interactive Mouse / Touch Dragging
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let autoRotate = true;
    let autoRotateSpeed = 0.0012;

    const onMouseDown = (e) => {
      isDragging = true;
      autoRotate = false;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      globeGroup.rotation.y += deltaX * 0.005;
      globeGroup.rotation.x = Math.max(-0.6, Math.min(0.6, globeGroup.rotation.x + deltaY * 0.005));
    };

    const onMouseUp = () => {
      isDragging = false;
      // Resume slow auto-rotate after short inactivity
      setTimeout(() => { autoRotate = true; }, 3000);
    };

    // Touch support for mobile devices
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        autoRotate = false;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMouseX;
      const deltaY = e.touches[0].clientY - prevMouseY;
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;

      globeGroup.rotation.y += deltaX * 0.006;
      globeGroup.rotation.x = Math.max(-0.6, Math.min(0.6, globeGroup.rotation.x + deltaY * 0.006));
    };

    const onTouchEnd = () => {
      isDragging = false;
      setTimeout(() => { autoRotate = true; }, 3000);
    };

    const domElem = renderer.domElement;
    domElem.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    domElem.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // 8. 2D City Labels Projector Loop
    const tempVec = new THREE.Vector3();
    let frameId;

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      // Auto rotation
      if (autoRotate && !isDragging) {
        globeGroup.rotation.y += autoRotateSpeed;
      }

      // Update traveling cargo photons
      photonParticles.forEach(p => {
        p.progress = (p.progress + p.speed) % 1;
        const posOnCurve = p.curve.getPoint(p.progress);
        p.mesh.position.copy(posOnCurve);
      });

      // Project 3D City coordinates to 2D screen positions for HTML labels
      const newCoords = {};
      CITIES.forEach(city => {
        const localPos = city3DPositions[city.id];
        if (!localPos) return;

        tempVec.copy(localPos);
        tempVec.applyMatrix4(globeGroup.matrixWorld);

        // Check if facing the camera (dot product with camera ray)
        const cameraToPoint = tempVec.clone().sub(camera.position).normalize();
        const normal = tempVec.clone().normalize();
        const isVisible = cameraToPoint.dot(normal) < -0.15;

        tempVec.project(camera);

        const x = (tempVec.x * 0.5 + 0.5) * width;
        const y = (-(tempVec.y * 0.5) + 0.5) * height;

        newCoords[city.id] = {
          x,
          y,
          visible: isVisible,
          z: tempVec.z
        };
      });

      setScreenCoords(newCoords);
      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight || 580;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      domElem.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElem.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      if (container.contains(domElem)) {
        container.removeChild(domElem);
      }
      renderer.dispose();
      earthGeometry.dispose();
      earthMaterial.dispose();
      earthTexture.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[520px] sm:h-[580px] lg:h-[620px] flex items-center justify-center select-none overflow-hidden rounded-3xl bg-gradient-to-b from-[#0F172A] via-[#090D1A] to-[#040711] border border-gray-800 shadow-2xl">
      {/* Dynamic 3D WebGL Canvas */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Atmospheric Radial Backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] rounded-full bg-[#38bdf8]/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] rounded-full bg-[#D32F2F]/15 blur-[80px] pointer-events-none" />

      {/* 2D Pinned City Labels over 3D Globe */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {CITIES.map(city => {
          const coord = screenCoords[city.id];
          if (!coord || !coord.visible) return null;

          const isOrigin = city.type === 'origin';
          const isHovered = hoveredCity === city.id;

          return (
            <div
              key={city.id}
              style={{
                transform: `translate(${coord.x}px, ${coord.y}px) translate(-50%, -100%) translateY(-10px)`,
                opacity: coord.visible ? 1 : 0,
                transition: 'opacity 0.25s ease'
              }}
              className="absolute left-0 top-0 pointer-events-auto"
              onMouseEnter={() => setHoveredCity(city.id)}
              onMouseLeave={() => setHoveredCity(null)}
            >
              <div
                className={`group flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold shadow-lg backdrop-blur-md transition-all duration-200 border cursor-pointer ${
                  isOrigin
                    ? 'bg-white/95 text-gray-900 border-red-500/50 hover:border-red-600 hover:scale-105'
                    : 'bg-white/95 text-gray-900 border-blue-500/50 hover:border-blue-600 hover:scale-105'
                }`}
              >
                <span className="text-sm leading-none">{city.flag}</span>
                <span className="font-display font-bold tracking-tight">{city.name}</span>
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isOrigin ? 'bg-[#D32F2F]' : 'bg-blue-600'
                  }`}
                />
              </div>

              {/* Tooltip on hover */}
              {isHovered && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2.5 py-1 rounded-lg bg-gray-900/90 text-[10px] text-white whitespace-nowrap shadow-xl border border-gray-700 pointer-events-none">
                  {city.desc}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Top Floating Badge: Live Status */}
      <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20 flex flex-col sm:flex-row items-start sm:items-center gap-2">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
          </span>
          <span className="font-semibold text-gray-200 tracking-tight">Active Trade Corridors</span>
          <span className="text-[10px] text-gray-400 bg-white/10 px-1.5 py-0.5 rounded">Live 3D</span>
        </div>
      </div>

      {/* Top Right: Rotation Hint */}
      <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] text-gray-300 border border-white/10">
        <span>🔄 Drag to rotate 3D Earth</span>
      </div>

      {/* Bottom Floating Route Chips */}
      <div className="absolute bottom-4 inset-x-3 sm:bottom-5 sm:inset-x-5 z-20 flex flex-wrap items-center justify-center gap-2">
        {ROUTES.map(route => {
          const isActive = activeRoute === route.id;
          return (
            <button
              key={route.id}
              onClick={() => setActiveRoute(isActive ? 'all' : route.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-md transition-all duration-200 border flex items-center gap-1.5 ${
                isActive
                  ? 'bg-[#D32F2F] text-white border-red-500 shadow-lg shadow-red-900/40 scale-105'
                  : 'bg-black/60 text-gray-300 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
              <span>{route.label}</span>
              <span className="text-[10px] opacity-75 hidden md:inline">({route.time})</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
