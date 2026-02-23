"use client";

import { useId } from "react";

type Variant = 1 | 2 | 3 | 4 | 5;

interface CreamDividerProps {
  topColor: string;
  bottomColor: string;
  variant?: Variant;
  className?: string;
}

const VIEWBOX_H = 170;

const paths: Record<Variant, string> = {
  1: `
    M0,0 H1440
    V65
    C1320,65 1250,120 1150,110
    C1050,100 980,70 880,80
    C760,95 700,140 600,120
    C500,100 420,70 320,85
    C200,105 120,140 0,115
    Z
  `,
  2: `
    M0,0 H1440
    V70
    C1300,60 1200,140 1080,120
    C960,100 860,75 740,95
    C620,120 520,150 400,125
    C280,100 160,75 0,105
    Z
  `,
  3: `
    M0,0 H1440
    V60
    C1280,70 1180,130 1040,110
    C900,90 800,75 660,95
    C520,115 420,145 280,120
    C140,95 60,80 0,95
    Z
  `,
  4: `
    M0,0 H1440
    V75
    C1320,85 1220,150 1100,130
    C980,110 860,90 740,110
    C620,130 500,160 380,135
    C260,110 140,90 0,115
    Z
  `,
  5: `
    M0,0 H1440
    V68
    C1340,75 1240,135 1120,120
    C1000,105 880,85 760,100
    C640,115 520,145 400,125
    C280,105 160,85 0,110
    Z
  `,
};

const TRANSITION = "fill 0.6s cubic-bezier(0.4, 0, 0.2, 1)";

export function CreamDivider({
  topColor,
  bottomColor,
  variant = 1,
  className = "",
}: CreamDividerProps) {
  const rawId = useId();
  const filterId = `cd-${rawId.replace(/:/g, "")}`;

  return (
    <div
      className={`relative z-[2] w-full leading-[0] -mt-[2px] ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox={`0 0 1440 ${VIEWBOX_H}`}
        preserveAspectRatio="none"
        className="block w-full h-[65px] md:h-[95px] lg:h-[120px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id={filterId} x="-2%" y="-5%" width="104%" height="130%">
            <feDropShadow
              dx="0"
              dy="6"
              stdDeviation="12"
              floodColor="#000"
              floodOpacity="0.08"
            />
          </filter>
        </defs>
        <rect
          width="1440"
          height={VIEWBOX_H}
          style={{ fill: bottomColor, transition: TRANSITION }}
        />
        <path
          d={paths[variant]}
          filter={`url(#${filterId})`}
          style={{ fill: topColor, transition: TRANSITION }}
        />
      </svg>
    </div>
  );
}
