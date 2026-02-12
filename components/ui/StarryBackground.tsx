"use client";

import { useEffect, useRef } from "react";

export function StarryBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        // Resize handler
        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        handleResize(); // Initial size
        window.addEventListener("resize", handleResize);

        // Mouse position
        const mouse = { x: width / 2, y: height / 2 };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        window.addEventListener("mousemove", handleMouseMove);

        // Stars
        const starCount = 300; // Adjust for density
        const stars: { x: number; y: number; z: number; size: number }[] = [];

        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                z: Math.random() * 2 + 0.5, // Depth factor
                size: Math.random() * 1.5 + 0.5,
            });
        }

        // Animation Loop
        let animationFrameId: number;

        const animate = () => {
            // Clear canvas to transparency (letting cream background show)
            ctx.clearRect(0, 0, width, height);

            stars.forEach((star) => {
                // Parallax effect: standard movement opposite to mouse
                const dx = (mouse.x - width / 2) * 0.05 * star.z;
                const dy = (mouse.y - height / 2) * 0.05 * star.z;

                const x = star.x - dx;
                const y = star.y - dy;

                // Wrap around screen (optional, or just clamp/hide)
                // For simple parallax, we don't need complex wrapping if movement is subtle.
                // Let's just draw.

                ctx.beginPath();
                ctx.fillStyle = "rgba(0, 0, 0, 0.8)"; // Black stars
                ctx.arc(x, y, star.size, 0, Math.PI * 2);
                ctx.fill();

                // Optional: Twinkle
                if (Math.random() > 0.99) {
                    ctx.fillStyle = "rgba(0, 0, 0, 1)";
                    ctx.shadowBlur = 4;
                    ctx.shadowColor = "rgba(0,0,0,0.5)";
                    ctx.arc(x, y, star.size * 1.5, 0, Math.PI * 2);
                    ctx.shadowBlur = 0;
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
        />
    );
}
