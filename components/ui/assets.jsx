import { cn } from "../../lib/utils";

const IconSlider = ({ className }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
  >
    <g filter="url(#filter0_d_2279_13)">
      <circle cx="32" cy="32" r="15" fill="url(#paint0_linear_2279_13)" />
      <circle cx="32" cy="32" r="20" stroke="white" strokeWidth="10" />
    </g>
    <circle cx="32" cy="32" r="16.5" stroke="#F7F7F7" strokeWidth="3" />
    <defs>
      <filter
        id="filter0_d_2279_13"
        x="0"
        y="0"
        width="64"
        height="64"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="7"
          operator="dilate"
          in="SourceAlpha"
          result="effect1_dropShadow_2279_13"
        />
        <feOffset />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.46 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2279_13"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2279_13"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_2279_13"
        x1="32"
        y1="47"
        x2="32"
        y2="17"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFA209" />
        <stop offset="1" stopColor="#FFEE83" />
      </linearGradient>
    </defs>
  </svg>
);

export const Assets = {
  IconSlider,
};
