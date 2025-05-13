"use client";
import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef, useCallback } from "react";

export const StarsBackground = ({
  starDensity = 0.00015,
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minTwinkleSpeed = 0.5,
  maxTwinkleSpeed = 1,
  hoverDistance = 15, // Distance threshold for hover detection
  glowRadius = 20, // Size of the glow effect
  glowIntensity = 0.1, // Intensity of the glow effect
  glowPulseSpeed = 1.5, // Speed of the glow pulsation
  className,
}) => {
  const [stars, setStars] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const canvasRef = useRef(null);
  
  const generateStars = useCallback((width, height) => {
    const area = width * height;
    const numStars = Math.floor(area * starDensity);
    return Array.from({ length: numStars }, () => {
      const shouldTwinkle =
        allStarsTwinkle || Math.random() < twinkleProbability;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 0.05 + 0.5,
        opacity: Math.random() * 0.5 + 0.5,
        twinkleSpeed: shouldTwinkle
          ? minTwinkleSpeed +
            Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
          : null,
        isHovered: false,
      };
    });
  }, [
    starDensity,
    allStarsTwinkle,
    twinkleProbability,
    minTwinkleSpeed,
    maxTwinkleSpeed,
  ]);

  // Handle mouse movement to track cursor position
  const handleMouseMove = useCallback((e) => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  }, []);

  // Clear hover state when mouse leaves canvas
  const handleMouseLeave = useCallback(() => {
    setMousePosition({ x: null, y: null });
  }, []);

  useEffect(() => {
    const updateStars = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        setStars(generateStars(width, height));
      }
    };
    
    updateStars();
    
    const resizeObserver = new ResizeObserver(updateStars);
    if (canvasRef.current) {
      resizeObserver.observe(canvasRef.current);
    }
    
    return () => {
      if (canvasRef.current) {
        resizeObserver.unobserve(canvasRef.current);
      }
    };
  }, [
    starDensity,
    allStarsTwinkle,
    twinkleProbability,
    minTwinkleSpeed,
    maxTwinkleSpeed,
    generateStars,
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Add mouse event listeners
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let animationFrameId;
    const time = { value: 0 };
    
    const render = () => {
      time.value += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update stars and check if any are hovered
      stars.forEach((star) => {
        // Update twinkling effect
        if (star.twinkleSpeed !== null) {
          star.opacity =
            0.8 +
            Math.abs(Math.sin((Date.now() * 0.001) / star.twinkleSpeed) * 0.5);
        }
        
        // Check if star is hovered
        star.isHovered = false;
        if (mousePosition.x !== null && mousePosition.y !== null) {
          const distance = Math.sqrt(
            Math.pow(star.x - mousePosition.x, 2) + 
            Math.pow(star.y - mousePosition.y, 2)
          );
          
          star.isHovered = distance <= hoverDistance;
          
          // Transition effect for hover state
          if (star.isHovered) {
            star.hoverIntensity = Math.min(1, (star.hoverIntensity || 0) + 0.08);
          } else {
            star.hoverIntensity = Math.max(0, (star.hoverIntensity || 0) - 0.04);
          }
        }
        
        // Draw enhanced glow effects for hovered or recently hovered stars
        if (star.hoverIntensity > 0) {
          // Animate glow size with time and hover intensity
          const pulseEffect = Math.sin(time.value * glowPulseSpeed) * 0.2 + 0.8;
          const currentGlowRadius = glowRadius * pulseEffect * (0.8 + star.hoverIntensity * 0.5);
          
          // Create multiple layers of glow for more depth
          // Outer glow
          ctx.beginPath();
          const outerGradient = ctx.createRadialGradient(
            star.x, star.y, star.radius,
            star.x, star.y, currentGlowRadius * 1.2
          );
          outerGradient.addColorStop(0, `rgba(255, 205, 60, ${0.4 * star.hoverIntensity * glowIntensity})`);
          outerGradient.addColorStop(0.5, `rgba(255, 180, 30, ${0.2 * star.hoverIntensity * glowIntensity})`);
          outerGradient.addColorStop(1, "rgba(255, 150, 0, 0)");
          ctx.fillStyle = outerGradient;
          ctx.arc(star.x, star.y, currentGlowRadius * 1.2, 0, Math.PI * 2);
          ctx.fill();
          
          // Inner glow (brighter)
          ctx.beginPath();
          const innerGradient = ctx.createRadialGradient(
            star.x, star.y, star.radius * 0.5,
            star.x, star.y, currentGlowRadius * 0.7
          );
          innerGradient.addColorStop(0, `rgba(255, 240, 150, ${0.9 * star.hoverIntensity * glowIntensity})`);
          innerGradient.addColorStop(0.5, `rgba(255, 220, 70, ${0.5 * star.hoverIntensity * glowIntensity})`);
          innerGradient.addColorStop(1, "rgba(255, 200, 40, 0)");
          ctx.fillStyle = innerGradient;
          ctx.arc(star.x, star.y, currentGlowRadius * 0.7, 0, Math.PI * 2);
          ctx.fill();

          // Lens flare effect
          const flareSize = star.radius * 5 * star.hoverIntensity;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255, 250, 240, ${0.7 * star.hoverIntensity})`;
          ctx.lineWidth = 1;
          
          // Horizontal line
          ctx.moveTo(star.x - flareSize, star.y);
          ctx.lineTo(star.x + flareSize, star.y);
          
          // Vertical line
          ctx.moveTo(star.x, star.y - flareSize);
          ctx.lineTo(star.x, star.y + flareSize);
          
          // Diagonal lines
          const diagonalSize = flareSize * 0.7;
          ctx.moveTo(star.x - diagonalSize, star.y - diagonalSize);
          ctx.lineTo(star.x + diagonalSize, star.y + diagonalSize);
          ctx.moveTo(star.x - diagonalSize, star.y + diagonalSize);
          ctx.lineTo(star.x + diagonalSize, star.y - diagonalSize);
          
          ctx.stroke();
        }
        
        // Draw the star
        ctx.beginPath();
        
        // Increase star size slightly when hovered
        const currentRadius = star.radius * (1 + (star.hoverIntensity || 0) * 1.5);
        ctx.arc(star.x, star.y, currentRadius, 0, Math.PI * 2);
        
        // Blend between white and gold based on hover intensity
        const hoverValue = star.hoverIntensity || 0;
        const r = 255;
        const g = 255 - (255 - 215) * hoverValue;
        const b = 255 - (255 - 0) * hoverValue;
        
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${star.opacity})`;
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [stars, mousePosition, hoverDistance, glowRadius, glowIntensity, glowPulseSpeed]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("h-full w-full fixed inset-0", className)}
      style={{ cursor: "default" }}
    />
  );
};