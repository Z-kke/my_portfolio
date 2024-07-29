import React from "react";

interface LogoSvgProps {
  className?: string;
}

const LogoSvg: React.FC<LogoSvgProps> = ({ className = "" }) => {
  return (
    <div className={`group ${className}`}>
      <svg
        width="50"
        height="50"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 ease-in-out group-hover:scale-110"
      >
        <polygon
          points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30"
          fill="none"
          stroke="#FF6B3D"
          strokeWidth="6"
          className="transition-all duration-300 ease-in-out group-hover:stroke-[10]"
        />
        <text
          x="52"
          y="55"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#FF6B3D"
          fontSize="60"
          fontFamily="Arial, sans-serif"
          className="transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:fill-white"
        >
          S
        </text>
      </svg>
    </div>
  );
};

export default LogoSvg;
