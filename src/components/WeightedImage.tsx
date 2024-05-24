"use client";

import React, { useCallback, useState, useRef, useMemo } from "react";
import styled from "styled-components";

type Position = {
  x: number;
  y: number;
};

interface WeightedImageProps {
  imagePath?: string;
}

const Wrapper = styled.article`
  transform: scale(1);

  &:hover {
    transform: scale(1.1);
  }
`;

export default function WeightedImage({
  imagePath = "/about_brisbane-city.webp",
}: WeightedImageProps) {
  const [rotation, setRotation] = useState<Position>({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  const enhancedMouseMove = (event: React.MouseEvent) => {
    if (animationFrameRef.current)
      cancelAnimationFrame(animationFrameRef.current);

    animationFrameRef.current = requestAnimationFrame(() => {
      const x = event.clientX;
      const y = event.clientY;

      const target = event.target as HTMLElement;
      const rect = target.getBoundingClientRect();

      const halfX = rect.width / 2;
      const halfY = rect.height / 2;

      const centerX = rect.left + halfX;
      const centerY = rect.top + halfY;

      const ratioX = (x - centerX) / halfX;
      const ratioY = (y - centerY) / halfY;

      const maxRotationX = 15;
      const maxRotationY = -15;

      setRotation({ x: ratioY * maxRotationY, y: ratioX * maxRotationX });
    });
  };

  const resetRotation = () => {
    if (animationFrameRef.current)
      cancelAnimationFrame(animationFrameRef.current);

    setRotation({ x: 0, y: 0 });
  };

  return (
    <section
      className={`-mb-20 px-4 sm:px-16 flex flex-col justify-center items-center w-full`}
    >
      <h2
        className={`text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-poppins font-black uppercase text-ravenci-gray`}
      >
        our story
      </h2>
      <Wrapper
        onMouseMove={enhancedMouseMove}
        onMouseLeave={resetRotation}
        className={`-mt-0 sm:-mt-6 md:-mt-10 lg:-mt-12 w-full max-w-4xl h-[250px] md:h-[450px] transition-all duration-500 ease`}
      >
        <div
          className={`relative w-full h-full rounded-2xl overflow-hidden transition-all duration-300 ease-out`}
          style={{
            transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
        >
          <img
            src={imagePath}
            className={`w-full h-full object-cover object-top`}
          />
          <div
            className={`absolute top-0 left-0 w-full h-full bg-ravenci-primary/50 z-10`}
          ></div>
        </div>
      </Wrapper>
    </section>
  );
}
