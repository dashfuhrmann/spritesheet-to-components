
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Scanner = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 9C2.44772 9 2 8.55228 2 8V3C2 2.44772 2.44772 2 3 2H8C8.55228 2 9 2.44772 9 3C9 3.55228 8.55228 4 8 4H4V8C4 8.55228 3.55228 9 3 9ZM22 8V3C22 2.44772 21.5523 2 21 2H16C15.4477 2 15 2.44772 15 3C15 3.55228 15.4477 4 16 4H20V8C20 8.55228 20.4477 9 21 9C21.5523 9 22 8.55228 22 8ZM9 21C9 20.4477 8.55228 20 8 20H4V16C4 15.4477 3.55228 15 3 15C2.44772 15 2 15.4477 2 16V21C2 21.5523 2.44772 22 3 22H8C8.55228 22 9 21.5523 9 21ZM22 21V16C22 15.4477 21.5523 15 21 15C20.4477 15 20 15.4477 20 16V20H16C15.4477 20 15 20.4477 15 21C15 21.5523 15.4477 22 16 22H21C21.5523 22 22 21.5523 22 21ZM23 12C23 11.4477 22.5523 11 22 11H2C1.44772 11 1 11.4477 1 12C1 12.5523 1.44772 13 2 13H22C22.5523 13 23 12.5523 23 12Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Scanner;
  