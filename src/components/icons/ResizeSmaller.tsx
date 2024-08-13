
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const ResizeSmaller = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 9H3C2.44772 9 2 8.55228 2 8C2 7.44772 2.44772 7 3 7H7V3C7 2.44772 7.44772 2 8 2C8.55228 2 9 2.44772 9 3V8C9 8.55228 8.55228 9 8 9ZM22 8C22 7.44772 21.5523 7 21 7H17V3C17 2.44772 16.5523 2 16 2C15.4477 2 15 2.44772 15 3V8C15 8.55228 15.4477 9 16 9H21C21.5523 9 22 8.55228 22 8ZM9 21V16C9 15.4477 8.55228 15 8 15H3C2.44772 15 2 15.4477 2 16C2 16.5523 2.44772 17 3 17H7V21C7 21.5523 7.44772 22 8 22C8.55228 22 9 21.5523 9 21ZM17 21V17H21C21.5523 17 22 16.5523 22 16C22 15.4477 21.5523 15 21 15H16C15.4477 15 15 15.4477 15 16V21C15 21.5523 15.4477 22 16 22C16.5523 22 17 21.5523 17 21Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default ResizeSmaller;
  