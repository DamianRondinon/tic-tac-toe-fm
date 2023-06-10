import React from "react";

const Xicon = ({ color, size }) => {
  return (
    <div
      className={`icon ${color ? "icon-" + color : "icon-blue"} 
    ${size && "icon-" + size}`}
    >
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 64 64"
        aria-hidden="true"
        role="img"
        className="iconify iconify--emojione-monotone"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M62 10.571L53.429 2L32 23.429L10.571 2L2 10.571L23.429 32L2 53.429L10.571 
62L32 40.571L53.429 62L62 53.429L40.571 32z"
        ></path>
      </svg>
    </div>
  );
};

export default Xicon;
