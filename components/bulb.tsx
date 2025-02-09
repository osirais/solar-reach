import { useRef, useState } from "react";

export default function Bulb({
  size,
  setBackgroundColor,
}: {
  size: number;
  setBackgroundColor: Function;
}) {
      const [isLightOn, setIsLightOn] = useState(false);
    
      const svgRef = useRef<SVGSVGElement>(null);
    
      function animate() {
        if (isLightOn) return;
        setIsLightOn(true);
        const animatesBulb = svgRef.current?.querySelectorAll(
          `animate[data-group="bulb"]`,
        );
        const animatesHalo = svgRef.current?.querySelectorAll(
          `animate[data-group="halo"]`,
        );
    
        animatesBulb?.forEach((animate) => {
          (animate as SVGAnimateElement).beginElement();
        });
    
        animatesHalo?.forEach((animate, index) => {
          setTimeout(
            () => {
              (animate as SVGAnimateElement).beginElement();
            },
            (animatesHalo.length - index) * 500,
          );
        });
    
        setTimeout(() => setBackgroundColor("var(--yellow-5)"), 1750);
      }
    
    return (
    <svg
              ref={svgRef}
              width="625px"
              height="625px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="#000000"
              overflow="visible"
            >
              <ellipse
                style={{
                  strokeWidth: 0,
                  stroke: "rgb(0, 0, 0)",
                  fill: "var(--yellow-4)",
                  fillOpacity: 0,
                  strokeOpacity: 0,
                }}
                cx="256"
                cy="256"
                rx="256"
                ry="256"
              >
                <animate
                  data-group="halo"
                  attributeName="fill-opacity"
                  values="0;1"
                  begin="indefinite"
                  dur="0.5s"
                  fill="freeze"
                  keyTimes="0;1"
                />
              </ellipse>
              <ellipse
                style={{
                  strokeWidth: 0,
                  stroke: "rgb(0, 0, 0)",
                  fill: "var(--yellow-3)",
                  fillOpacity: 0,
                  strokeOpacity: 0,
                }}
                cx="256"
                cy="256"
                rx="197.33"
                ry="197.33"
              >
                <animate
                  data-group="halo"
                  attributeName="fill-opacity"
                  values="0;1"
                  begin="indefinite"
                  dur="0.5s"
                  fill="freeze"
                  keyTimes="0;1"
                />
              </ellipse>
              <ellipse
                style={{
                  strokeWidth: 0,
                  stroke: "rgb(0, 0, 0)",
                  fill: "var(--yellow-2)",
                  fillOpacity: 0,
                  strokeOpacity: 0,
                }}
                cx="256"
                cy="256"
                rx="138.67"
                ry="138.67"
              >
                <animate
                  data-group="halo"
                  attributeName="fill-opacity"
                  values="0;1"
                  begin="indefinite"
                  dur="0.5s"
                  fill="freeze"
                  keyTimes="0;1"
                />
              </ellipse>
              <g transform="matrix(1, 0, 0, 1, 1.174431, -3.807872)">
                <g transform="matrix(-0.47639, 0, 0, -0.47639, 376.781921, 341.327789)">
                  <path
                    style={{ fill: "var(--dark-3)" }}
                    d="M422.841,152.717C414.014,73.269,350.455,9.71,271.007,0.883C265.71,0.883,261.297,0,256,0 c-5.297,0-9.71,0-15.007,0.883C161.545,9.71,97.986,74.152,89.159,152.717c-6.179,56.497,15.007,107.697,52.083,143.007 c21.186,20.303,38.841,46.786,44.138,75.034h141.241c5.297-28.248,22.952-54.731,44.138-75.034 C407.834,260.414,429.021,209.214,422.841,152.717"
                  >
                    <animate
                      data-group="bulb"
                      attributeName="fill"
                      values="#3d3846;#f5c211"
                      begin="indefinite"
                      dur="0.2s"
                      fill="freeze"
                      keyTimes="0;1"
                    />
                  </path>
                  <path
                    style={{ fill: "var(--dark-4)" }}
                    d="M203.034,176.552c-9.71,0-17.655,7.945-17.655,17.655c0,9.71,7.945,17.655,17.655,17.655h17.655 v-17.655C220.69,184.497,212.745,176.552,203.034,176.552L203.034,176.552z M291.31,211.862h17.655 c9.71,0,17.655-7.945,17.655-17.655c0-9.71-7.945-17.655-17.655-17.655s-17.655,7.945-17.655,17.655V211.862z M282.483,379.586 c-5.297,0-8.828-3.531-8.828-8.828V229.517h-35.31v141.241c0,5.297-3.531,8.828-8.828,8.828s-8.828-3.531-8.828-8.828V229.517 h-17.655c-19.421,0-35.31-15.89-35.31-35.31s15.89-35.31,35.31-35.31s35.31,15.89,35.31,35.31v17.655h35.31v-17.655 c0-19.421,15.89-35.31,35.31-35.31s35.31,15.89,35.31,35.31s-15.89,35.31-35.31,35.31H291.31v141.241 C291.31,376.055,287.779,379.586,282.483,379.586L282.483,379.586z"
                  >
                    <animate
                      data-group="bulb"
                      attributeName="fill"
                      values="#241f31;#e5a50a"
                      begin="indefinite"
                      dur="0.2s"
                      fill="freeze"
                      keyTimes="0;1"
                    />
                  </path>
                  <path
                    style={{ fill: "var(--dark-1)" }}
                    d="M185.379,370.759V476.69h141.241v-70.621v-35.31H185.379z"
                  >
                    <animate
                      data-group="bulb"
                      attributeName="fill"
                      values="#77767b;#deddda"
                      begin="indefinite"
                      dur="0.2s"
                      fill="freeze"
                      keyTimes="0;1"
                    />
                  </path>
                  <g style={{ fill: "var(--dark-2)" }}>
                    <path d="M269.241,512h-26.483c-7.945,0-15.89-3.531-21.186-10.593l-18.538-24.717h105.931l-18.538,24.717 C285.131,508.469,277.186,512,269.241,512" />
                    <path d="M247.172,414.897c5.297,0,8.828-3.531,8.828-8.828s-3.531-8.828-8.828-8.828h-61.793v17.655H247.172 z" />
                    <path d="M220.69,450.207c5.297,0,8.828-3.531,8.828-8.828s-3.531-8.828-8.828-8.828h-35.31v17.655H220.69z" />
                    <path d="M326.621,397.241h-35.31c-5.297,0-8.828,3.531-8.828,8.828s3.531,8.828,8.828,8.828h35.31v-8.828 V397.241z" />
                    <path d="M264.828,432.552c-5.297,0-8.828,3.531-8.828,8.828s3.531,8.828,8.828,8.828h61.793v-17.655H264.828 z" />
                    <animate
                      data-group="bulb"
                      attributeName="fill"
                      values="#5e5c64;#c0bfbc"
                      begin="indefinite"
                      dur="0.2s"
                      fill="freeze"
                      keyTimes="0;1"
                    />
                  </g>
                </g>
                <ellipse
                  style={{
                    fill: "rgb(216, 216, 216)",
                    stroke: "rgb(0, 0, 0)",
                    strokeWidth: 0,
                    fillOpacity: 0,
                  }}
                  cx="254.826"
                  cy="259.808"
                  rx="80"
                  ry="80"
                />
              </g>
              <path
                style={{ stroke: "var(--dark-2)", strokeWidth: 12 }}
                d="M 256 94 l 0 -2000"
              >
                <animate
                  data-group="bulb"
                  attributeName="stroke"
                  values="#5e5c64;#c0bfbc"
                  begin="indefinite"
                  dur="0.2s"
                  fill="freeze"
                  keyTimes="0;1"
                />
              </path>
            </svg>);
}
