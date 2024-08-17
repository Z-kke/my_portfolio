"use client";

import React, { useRef, useEffect, useState, useMemo } from "react";
import { Box } from "@mui/material";

interface GridItemProps {
  component: string;
  [key: string]: any;
}

interface DynamicGridProps {
  items: GridItemProps[];
}

const DynamicGrid: React.FC<DynamicGridProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loadedComponents, setLoadedComponents] = useState<Set<string>>(
    new Set(),
  );

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
          setLoadedComponents((prev) =>
            new Set(prev).add(items[index].component),
          );
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
  }, [items]);

  const cachedComponents = useMemo(() => {
    return items.map((item) => {
      const { component, ...props } = item;
      const Component = React.lazy(() => import(`./${component}`));
      return { Component, props };
    });
  }, [items]);

  return (
    <Box
      ref={containerRef}
      sx={{
        height: "calc(100vh - 64px)",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
        marginTop: "64px",
      }}
    >
      {cachedComponents.map(({ Component, props }, index) => (
        <Box
          key={index}
          data-index={index}
          sx={{
            height: "calc(100vh - 64px)",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            scrollSnapAlign: "start",
          }}
        >
          {loadedComponents.has(items[index].component) && (
            <Component {...props} />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default DynamicGrid;
