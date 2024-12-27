"use client";
import React, { useRef } from "react";

const HoverAnimatedSVG: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  const handleMouseEnter = () => {
    const animates = svgRef.current?.querySelectorAll(
      "animate, animateTransform",
    );
    animates?.forEach((animate) => {
      (animate as SVGAnimateElement).beginElement();
    //   (animate as SVGAnimateElement).endElementAt(0.001);
    });
  };

  const handleMouseLeave = () => {
    const animates = svgRef.current?.querySelectorAll(
      "animate, animateTransform",
    );
    animates?.forEach((animate) => {
    
      const values = (animate as SVGAnimateElement).getAttribute('values')?.split(';').reverse().join(';');
      (animate as SVGAnimateElement).setAttribute('values', values || '');
      (animate as SVGAnimateElement).beginElement();
      (animate as SVGAnimateElement).endElementAt(0.3);
      (animate as SVGAnimateElement).beginElement();
      (animate as SVGAnimateElement).endElementAt(0.001);
      setTimeout(() => {
        (animate as SVGAnimateElement).setAttribute('values', values?.split(';').reverse().join(';') || '');
      }, 300);
    });
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        width="128"
        height="128"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#241f31"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g style={{ transformOrigin: "12px 12px" }}>
          <line
            x1="4"
            x2="20"
            y1="12"
            y2="12"
            style={{ transformOrigin: "12px 12px" }}
          >
            <animate
              attributeName="x2"
              values="20;9"
              begin="indefinite"
              dur="0.3s"
              fill="freeze"
              keyTimes="0; 1"
              calcMode="spline"
              keySplines="0.87 0 0.13 1"
            />
            <animate
              attributeName="x1"
              values="4;9"
              begin="indefinite"
              dur="0.14"
              fill="freeze"
              keyTimes="0; 1"
              calcMode="spline"
              keySplines="0.16 1 0.3 1"
            />
            <animate
              attributeName="opacity"
              values="1;0"
              begin="indefinite"
              dur="0.2s"
              fill="freeze"
              keyTimes="0; 1"
              calcMode="spline"
              keySplines="0.16 1 0.3 1"
            />
          </line>
          <line
            x1="4"
            x2="20"
            y1="6"
            y2="6"
            style={{ transformOrigin: "12px 6px" }}
          >
            <animate
              attributeName="x1"
              values="4;9"
              begin="indefinite"
              dur="0.3s"
              fill="freeze"
              keyTimes="0; 1"
              calcMode="spline"
              keySplines="0.87 0 0.13 1"
            />
            <animate
              attributeName="y1"
              values="6;12"
              begin="indefinite"
              dur="0.3s"
              fill="freeze"
              keyTimes="0; 1"
              calcMode="spline"
              keySplines="0.87 0 0.13 1"
            />
            <animate
              attributeName="x2"
              values="20;15"
              begin="indefinite"
              dur="0.3s"
              fill="freeze"
              keyTimes="0; 1"
              calcMode="spline"
              keySplines="0.87 0 0.13 1"
            />
            <animate
              attributeName="y2"
              values="6;6"
              begin="indefinite"
              dur="0.3s"
              fill="freeze"
              keyTimes="0; 1"
              calcMode="spline"
              keySplines="0.87 0 0.13 1"
            />
          </line>
          <line
            x1="4"
            x2="20"
            y1="18"
            y2="18"
            style={{ transformOrigin: "12px 18px" }}
          >
            <animate
              attributeName="x1"
              values="4;9"
              begin="indefinite"
              dur="0.3s"
              fill="freeze"
              keyTimes="0; 1"
              calcMode="spline"
              keySplines="0.87 0 0.13 1"
            />
            <animate
              attributeName="y1"
              values="18;12"
              begin="indefinite"
              dur="0.3s"
              fill="freeze"
              keyTimes="0; 1"
              calcMode="spline"
              keySplines="0.87 0 0.13 1"
            />
            <animate
              attributeName="x2"
              values="20;15"
              begin="indefinite"
              dur="0.3s"
              fill="freeze"
              keyTimes="0; 1"
              calcMode="spline"
              keySplines="0.87 0 0.13 1"
            />
            <animate
              attributeName="y2"
              values="18;18"
              begin="indefinite"
              dur="0.3s"
              fill="freeze"
              keyTimes="0; 1"
              calcMode="spline"
              keySplines="0.87 0 0.13 1"
            />
          </line>
          <animateTransform
            type="rotate"
            additive="sum"
            attributeName="transform"
            values="0;-90"
            begin="indefinite"
            dur="0.3s"
            fill="freeze"
            keyTimes="0; 1"
            calcMode="spline"
            keySplines="0.42 0 0.58 1"
          />
        </g>
      </svg>
    </div>
  );
};

export default HoverAnimatedSVG;
