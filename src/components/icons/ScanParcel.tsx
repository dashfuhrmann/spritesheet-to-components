
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const ScanParcel = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 21C9 20.4477 8.5523 20 8 20H4V16C4 15.4477 3.5523 15 3 15C2.4477 15 2 15.4477 2 16V21C2 21.5523 2.4477 22 3 22H8C8.5523 22 9 21.5523 9 21ZM22 21V16C22 15.4477 21.5523 15 21 15C20.4477 15 20 15.4477 20 16V20H16C15.4477 20 15 20.4477 15 21C15 21.5523 15.4477 22 16 22H21C21.5523 22 22 21.5523 22 21ZM18 6H6C5.4477 6 5 6.4477 5 7V17C5 17.5523 5.4477 18 6 18H18C18.5523 18 19 17.5523 19 17V7C19 6.4477 18.5523 6 18 6ZM13 16H17V13H13V16ZM7 16H11V13H7V16ZM13 11H17V8H13V11ZM7 11H11V8H7V11ZM4 8V4H8C8.5523 4 9 3.5523 9 3C9 2.4477 8.5523 2 8 2H3C2.4477 2 2 2.4477 2 3V8C2 8.5523 2.4477 9 3 9C3.5523 9 4 8.5523 4 8ZM22 8V3C22 2.4477 21.5523 2 21 2H16C15.4477 2 15 2.4477 15 3C15 3.5523 15.4477 4 16 4H20V8C20 8.5523 20.4477 9 21 9C21.5523 9 22 8.5523 22 8Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default ScanParcel;
  