// MapSVG.js
import React from 'react';
export default function Map  ()  {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" className="w-full h-full">
      <defs>
        <style>
          {`
            .map-path {
              fill: #f8fafc;
              stroke: #ccc;
              stroke-width: 1;
            }
          `}
        </style>
      </defs>
      {/* O'zbekiston mapasi */}
      <path
        className="map-path"
        d="M400,0 C450,0 500,50 500,100 L500,500 C500,550 450,600 400,600 C350,600 300,550 300,500 L300,100 C300,50 350,0 400,0 Z"
      />
    </svg>
  );
};

