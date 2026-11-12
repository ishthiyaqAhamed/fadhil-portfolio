"use client";

import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface Vertex {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  z: number;
  phase: number;
  speed: number;
  amp: number;
}

interface Triangle {
  a: number;
  b: number;
  c: number;
  tint: "teal" | "sapphire" | "amber" | "slate";
}

const TINT_RGB: Record<Triangle["tint"], [number, number, number]> = {
  teal: [13, 148, 136],
  sapphire: [37, 99, 235],
  amber: [217, 119, 6],
  slate: [15, 23, 42],
};

export default function GemHeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId = 0;
    let width = 0;
    let height = 0;
    let vertices: Vertex[] = [];
    let triangles: Triangle[] = [];

    const pointer = { x: 0.5, y: 0.45, active: false };

    const buildMesh = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cellSize = width < 640 ? 96 : 128;
      const cols = Math.ceil(width / cellSize) + 2;
      const rows = Math.ceil(height / cellSize) + 2;

      vertices = [];
      triangles = [];

      // Deterministic pseudo-random helper for clean organic crystal facets
      const hash = (i: number, j: number) => {
        const n = Math.sin(i * 127.1 + j * 311.7) * 43758.5453;
        return n - Math.floor(n);
      };

      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const offsetX = r % 2 === 0 ? 0 : cellSize * 0.5;
          const jitterX = (hash(c, r) - 0.5) * cellSize * 0.48;
          const jitterY = (hash(r + 17, c + 31) - 0.5) * cellSize * 0.48;
          const bx = (c - 1) * cellSize + offsetX + jitterX;
          const by = (r - 1) * cellSize + jitterY;

          vertices.push({
            baseX: bx,
            baseY: by,
            x: bx,
            y: by,
            z: hash(c * 3, r * 7) * 28,
            phase: hash(c + 5, r + 9) * Math.PI * 2,
            speed: 0.45 + hash(c + 11, r) * 0.45,
            amp: 10 + hash(r, c + 19) * 14,
          });
        }
      }

      const stride = cols + 1;
      const tints: Triangle["tint"][] = ["teal", "slate", "sapphire", "slate", "amber", "teal"];

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i0 = r * stride + c;
          const i1 = i0 + 1;
          const i2 = (r + 1) * stride + c;
          const i3 = i2 + 1;

          const tintA = tints[(r * 3 + c) % tints.length];
          const tintB = tints[(r + c * 2 + 1) % tints.length];

          if (r % 2 === 0) {
            triangles.push({ a: i0, b: i1, c: i2, tint: tintA });
            triangles.push({ a: i1, b: i3, c: i2, tint: tintB });
          } else {
            triangles.push({ a: i0, b: i1, c: i3, tint: tintA });
            triangles.push({ a: i0, b: i3, c: i2, tint: tintB });
          }
        }
      }
    };

    const renderFrame = (timeMs: number) => {
      const t = timeMs * 0.001;
      ctx.clearRect(0, 0, width, height);

      // Slowly orbiting virtual D65 studio light vector
      const lightX = pointer.active
        ? pointer.x * width
        : width * (0.5 + Math.cos(t * 0.25) * 0.34);
      const lightY = pointer.active
        ? pointer.y * height
        : height * (0.42 + Math.sin(t * 0.2) * 0.24);
      const lightZ = 240;

      // Update crystal vertex micro-motion
      for (let i = 0; i < vertices.length; i++) {
        const v = vertices[i];
        v.x = v.baseX + Math.sin(t * v.speed + v.phase) * (v.amp * 0.55);
        v.y = v.baseY + Math.cos(t * v.speed * 0.85 + v.phase) * (v.amp * 0.55);
        v.z = 14 + Math.sin(t * 0.9 + v.phase) * 16;
      }

      // Draw faceted crystal planes with real-time specular normal shading
      for (let i = 0; i < triangles.length; i++) {
        const tri = triangles[i];
        const va = vertices[tri.a];
        const vb = vertices[tri.b];
        const vc = vertices[tri.c];

        const cx = (va.x + vb.x + vc.x) / 3;
        const cy = (va.y + vb.y + vc.y) / 3;
        const cz = (va.z + vb.z + vc.z) / 3;

        // 3D facet normal
        const ux = vb.x - va.x;
        const uy = vb.y - va.y;
        const uz = vb.z - va.z;
        const vx = vc.x - va.x;
        const vy = vc.y - va.y;
        const vz = vc.z - va.z;

        let nx = uy * vz - uz * vy;
        let ny = uz * vx - ux * vz;
        let nz = ux * vy - uy * vx;
        const nLen = Math.hypot(nx, ny, nz) || 1;
        nx /= nLen;
        ny /= nLen;
        nz /= nLen;
        if (nz < 0) {
          nx = -nx;
          ny = -ny;
          nz = -nz;
        }

        // Light direction from facet center
        let lx = lightX - cx;
        let ly = lightY - cy;
        let lz = lightZ - cz;
        const dist = Math.hypot(lx, ly, lz) || 1;
        lx /= dist;
        ly /= dist;
        lz /= dist;

        const dot = Math.max(0, nx * lx + ny * ly + nz * lz);
        const falloff = Math.max(0, 1 - dist / (Math.max(width, height) * 0.88));
        const specular = Math.pow(dot, 5) * falloff;
        const diffuse = dot * 0.38 * falloff;

        // Fade slightly toward very center so typography stays effortless to read
        const dxCenter = (cx - width * 0.5) / (width * 0.36);
        const dyCenter = (cy - height * 0.46) / (height * 0.28);
        const centerDist = Math.hypot(dxCenter, dyCenter);
        const centerMask = Math.min(1, Math.max(0.28, centerDist * 0.72));

        const [r, g, b] = TINT_RGB[tri.tint];
        const fillAlpha = (diffuse * 0.08 + specular * 0.14) * centerMask;
        const strokeAlpha = (0.032 + specular * 0.09) * centerMask;

        ctx.beginPath();
        ctx.moveTo(va.x, va.y);
        ctx.lineTo(vb.x, vb.y);
        ctx.lineTo(vc.x, vc.y);
        ctx.closePath();

        if (fillAlpha > 0.004) {
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${fillAlpha.toFixed(4)})`;
          ctx.fill();
        }

        ctx.strokeStyle = `rgba(15, 23, 42, ${strokeAlpha.toFixed(4)})`;
        ctx.lineWidth = 0.85;
        ctx.stroke();
      }

      if (!prefersReducedMotion) {
        animId = requestAnimationFrame(renderFrame);
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = (e.clientX - rect.left) / (rect.width || 1);
      pointer.y = (e.clientY - rect.top) / (rect.height || 1);
      pointer.active = true;
    };

    const onPointerLeave = () => {
      pointer.active = false;
    };

    buildMesh();

    if (prefersReducedMotion) {
      renderFrame(0);
    } else {
      animId = requestAnimationFrame(renderFrame);
    }

    const resizeObserver = new ResizeObserver(() => {
      buildMesh();
      if (prefersReducedMotion) renderFrame(0);
    });
    resizeObserver.observe(canvas);

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [prefersReducedMotion]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
    >
      {/* Interactive 60fps Crystalline Facet & Optical Caustic Canvas */}
      <canvas ref={canvasRef} className="block w-full h-full" />

      {/* Soft Studio Vignette Framing Edges & Keeping Typography Crisp */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 52% 42% at 50% 47%, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.18) 65%, rgba(255,255,255,0) 100%)",
        }}
      />
    </div>
  );
}
