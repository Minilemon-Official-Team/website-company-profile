import React from "react";

const WaveSeparator = () => {
  return (
    <div className="relative">
      {/* <div className="absolute inset-0 "></div> */}
      <div className="-top-20 flex w-full bg-repeat-x"></div>
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#fff"
          d="M0,192L60,213.3C120,235,240,277,360,272C480,267,600,213,720,186.7C840,160,960,160,1080,160C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
      {/* <div className="absolute bottom-0 bg-white h-24 w-full"></div> */}
    </div>
  );
};

export default WaveSeparator;
