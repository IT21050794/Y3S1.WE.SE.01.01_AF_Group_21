import React from "react";
import "./Animation.css"
import Imageslider from "./imageslider";

function Animation() {
    return(
<>
  {/*Hey! This is the original version
of Simple CSS Waves*/}
  <div className="header">
    {/*Content before waves*/}
    <div className="inner-header flex flex-col lg:flex-row lg:items-center ">
  <img src="../../../assets/img/mylogo/logo.png" alt="" className=""/>
  <h2 className="text-4xl font-bold leading-snug text-gray-300 mb-10 mt-10 lg:ml-10">
    <Imageslider/>
    MUNICIPAL COUNCIL<br className="hidden lg:block" /> SERVICE MANAGEMENT SYSTEM
</h2>
</div>
    {/*Waves Container*/}
    <div>
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            xlinkHref="#gentle-wave"
            x={48}
            y={0}
            fill="rgba(255,255,255,0.7"
          />
          <use
            xlinkHref="#gentle-wave"
            x={48}
            y={3}
            fill="rgba(255,255,255,0.5)"
          />
          <use
            xlinkHref="#gentle-wave"
            x={48}
            y={5}
            fill="rgba(255,255,255,0.3)"
          />
          <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
        </g>
      </svg>
    </div>
    {/*Waves end*/}
  </div>
  {/*Header ends*/}
  {/*Content starts*/}
  <div className="content flex">
  </div>
  {/*Content ends*/}
</>
    );
}

export default Animation