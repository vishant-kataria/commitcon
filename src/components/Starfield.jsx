import { useEffect, useRef } from "react";

const STAR_COUNT = 200;
const CLOUD_COUNT = 5;

function createStars(width, height) {
  const stars = [];
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5, // 1–3px diameter
      baseAlpha: Math.random() * 0.5 + 0.3,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleOffset: Math.random() * Math.PI * 2,
    });
  }
  return stars;
}

function createMountainPoints(width, height) {
  const baseY = height * 0.85;
  const points = [];
  const segmentWidth = 12;
  const numSegments = Math.ceil(width / segmentWidth) + 1;

  for (let i = 0; i <= numSegments; i++) {
    const x = i * segmentWidth;
    // Layered sine waves for natural-looking pixel mountains
    const y =
      baseY -
      Math.sin(i * 0.08) * height * 0.06 -
      Math.sin(i * 0.03 + 1.5) * height * 0.04 -
      Math.sin(i * 0.15 + 0.7) * height * 0.02;
    // Snap to pixel grid for pixel-art feel
    points.push({ x: Math.round(x), y: Math.round(y) });
  }
  return points;
}

function createBackMountainPoints(width, height) {
  const baseY = height * 0.82;
  const points = [];
  const segmentWidth = 16;
  const numSegments = Math.ceil(width / segmentWidth) + 1;

  for (let i = 0; i <= numSegments; i++) {
    const x = i * segmentWidth;
    const y =
      baseY -
      Math.sin(i * 0.05 + 2.0) * height * 0.08 -
      Math.sin(i * 0.02 + 0.5) * height * 0.05 -
      Math.sin(i * 0.12 + 3.0) * height * 0.015;
    points.push({ x: Math.round(x), y: Math.round(y) });
  }
  return points;
}

function drawGradientBackground(ctx, width, height) {
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, "#050819");
  gradient.addColorStop(0.5, "#0d1238");
  gradient.addColorStop(1, "#150d30");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}

function drawStars(ctx, stars, time) {
  for (const star of stars) {
    const alpha =
      star.baseAlpha +
      Math.sin(time * star.twinkleSpeed + star.twinkleOffset) *
        0.35;
    const clampedAlpha = Math.max(0.05, Math.min(1, alpha));
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(220, 230, 255, ${clampedAlpha})`;
    ctx.fill();

    // Subtle glow on brighter stars
    if (star.radius > 1.2 && clampedAlpha > 0.6) {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(180, 200, 255, ${clampedAlpha * 0.15})`;
      ctx.fill();
    }
  }
}

function drawMountains(ctx, points, width, height, fillColor) {
  ctx.beginPath();
  ctx.moveTo(0, height);
  for (const point of points) {
    ctx.lineTo(point.x, point.y);
  }
  ctx.lineTo(width, height);
  ctx.closePath();
  ctx.fillStyle = fillColor;
  ctx.fill();
}

export default function Starfield() {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const frontMountainsRef = useRef([]);
  const backMountainsRef = useRef([]);
  const animFrameRef = useRef(null);
  const cloudsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const w = window.innerWidth;
      const h = window.innerHeight;
      starsRef.current = createStars(w, h);
      frontMountainsRef.current = createMountainPoints(w, h);
      backMountainsRef.current = createBackMountainPoints(w, h);

      // Create pixel clouds
      cloudsRef.current = [];
      for (let i = 0; i < CLOUD_COUNT; i++) {
        cloudsRef.current.push({
          x: Math.random() * w,
          y: Math.random() * h * 0.4 + h * 0.05,
          width: Math.random() * 80 + 40,
          speed: Math.random() * 0.15 + 0.05,
          alpha: Math.random() * 0.06 + 0.02,
        });
      }
    }

    resize();
    window.addEventListener("resize", resize);

    function drawPixelCloud(ctx, cloud) {
      const { x, y, width: cw, alpha } = cloud;
      const blockSize = 6;
      const rows = [
        [2, 3],
        [1, 5],
        [0, 7],
        [0, 7],
        [1, 6],
        [2, 4],
      ];

      ctx.fillStyle = `rgba(140, 160, 200, ${alpha})`;
      const scale = cw / (7 * blockSize);

      for (let r = 0; r < rows.length; r++) {
        const [start, end] = rows[r];
        for (let c = start; c < end; c++) {
          ctx.fillRect(
            x + c * blockSize * scale,
            y + r * blockSize * scale,
            Math.ceil(blockSize * scale),
            Math.ceil(blockSize * scale)
          );
        }
      }
    }

    let startTime = performance.now();

    function animate(now) {
      const time = (now - startTime) / 16.667; // normalize to ~frames
      const w = window.innerWidth;
      const h = window.innerHeight;

      drawGradientBackground(ctx, w, h);
      drawStars(ctx, starsRef.current, time);

      // Draw clouds
      for (const cloud of cloudsRef.current) {
        drawPixelCloud(ctx, cloud);
        cloud.x += cloud.speed;
        if (cloud.x > w + 100) {
          cloud.x = -cloud.width - 20;
        }
      }

      // Back mountain range (darker, further)
      drawMountains(
        ctx,
        backMountainsRef.current,
        w,
        h,
        "rgba(18, 10, 40, 0.9)"
      );

      // Front mountain range
      drawMountains(
        ctx,
        frontMountainsRef.current,
        w,
        h,
        "rgba(12, 7, 30, 1)"
      );

      animFrameRef.current = requestAnimationFrame(animate);
    }

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
