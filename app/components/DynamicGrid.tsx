"use client";

import React, { useRef, useEffect, useState } from "react";
import { Box } from "@mui/material";

interface GridItemProps {
  component: string; // Change this to string
  [key: string]: any;
}

interface DynamicGridProps {
  items: GridItemProps[];
}

const DynamicGrid: React.FC<DynamicGridProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(
            entry.target.getAttribute("data-index") || "0",
            10,
          );
          setCurrentIndex(index);
        }
      });
    }, options);

    const container = containerRef.current;
    if (container) {
      Array.from(container.children).forEach((child) => {
        observer.observe(child);
      });
    }

    return () => {
      if (container) {
        Array.from(container.children).forEach((child) => {
          observer.unobserve(child);
        });
      }
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
      }}
    >
      {items.map((item, index) => {
        const { component, ...props } = item;
        const Component = React.lazy(() => import(`./${component}`));
        return (
          <Box
            key={index}
            data-index={index}
            sx={{
              height: "100vh",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              scrollSnapAlign: "start",
            }}
          >
            <React.Suspense fallback={<div>Loading...</div>}>
              <Component {...props} />
            </React.Suspense>
          </Box>
        );
      })}
    </Box>
  );
};

export default DynamicGrid;
