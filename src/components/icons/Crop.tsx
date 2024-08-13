
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Crop = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21 17C21 17.552 20.552 18 20 18C19.127 18 18 18 18 18V20C18 20.552 17.552 21 17 21C16.448 21 16 20.552 16 20C16 19.127 16 18 16 18H7C6.448 18 6 17.552 6 17V8H4C3.448 8 3 7.552 3 7C3 6.448 3.448 6 4 6C4.873 6 6 6 6 6V4C6 3.448 6.448 3 7 3C7.552 3 8 3.448 8 4C8 7.046 8 16 8 16H20C20.552 16 21 16.448 21 17ZM16 14H18V7C18 6.735 17.895 6.48 17.707 6.293C17.52 6.105 17.265 6 17 6H10V8H16V14Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Crop;
  