import React from "react";

function LogoutIcon() {
  return (
    <div>
      <svg
        width="36"
        height="38"
        viewBox="0 0 33 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_3_3315)">
          <rect x="4" width="25" height="26" rx="4" fill="#3D1DF3" />
        </g>
        <path
          d="M17.2917 12.9999L24.7917 12.9999M24.7917 12.9999L23.125 11.2666M24.7917 12.9999L23.125 14.7333"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21 16.9997C20.9898 18.7398 20.9081 19.6822 20.2579 20.297C19.5143 21 18.3175 21 15.9239 21L15.0776 21C12.684 21 11.4872 21 10.7436 20.297C10 19.594 10 18.4625 10 16.1996L10 9.79903C10 7.53609 10 6.40462 10.7436 5.70162C11.3939 5.08686 12.3907 5.00969 14.2313 5L17.6164 5.01247C18.931 5.04992 19.7152 5.18853 20.2579 5.70162C20.9081 6.31638 20.9898 7.25879 21 8.99896"
          stroke="white"
          stroke-linecap="round"
        />
        <defs>
          <filter
            id="filter0_d_3_3315"
            x="0"
            y="0"
            width="33"
            height="34"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_3_3315"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_3_3315"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default LogoutIcon;
