import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (

    <Svg  viewBox="0 0 700.000000 150.000000"  preserveAspectRatio="xMidYMid meet">

  <g transform="translate(0.000000,150.000000) scale(0.100000,-0.100000)"
  fill="#000000" stroke="none">
  <path d="M913 1391 c-88 -64 -136 -154 -136 -258 0 -29 -1 -53 -3 -53 -1 0
  -37 57 -80 128 -43 70 -79 129 -80 130 -4 6 -44 -9 -44 -16 0 -4 40 -57 90
  -119 l90 -112 -73 34 c-122 59 -210 66 -333 28 -172 -53 -262 -232 -225 -447
  27 -153 123 -386 199 -483 82 -104 203 -151 352 -138 47 4 103 6 125 4 22 -2
  85 -4 140 -4 94 0 106 3 167 33 117 57 197 168 269 372 116 329 81 537 -109
  638 -88 47 -177 60 -274 38 -43 -10 -104 -30 -135 -47 -32 -16 -59 -29 -60
  -29 -1 0 27 48 61 108 125 215 128 222 113 222 -8 0 -32 -13 -54 -29z m289
  -288 c65 -23 121 -72 150 -131 21 -42 23 -60 22 -172 -1 -130 -14 -204 -29
  -165 -56 149 -151 278 -255 345 -55 35 -155 70 -201 70 -40 0 -36 14 11 35
  103 47 206 53 302 18z"/>
  </g>
  </Svg>

  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
