
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Document = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19 22H5C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22ZM6 20H18V4H6V20ZM16 8C16 7.44772 15.5523 7 15 7H9C8.44772 7 8 7.44772 8 8C8 8.55228 8.44772 9 9 9H15C15.5523 9 16 8.55228 16 8ZM16 12C16 11.4477 15.5523 11 15 11H9C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13H15C15.5523 13 16 12.5523 16 12ZM14 16C14 15.4477 13.5523 15 13 15H9C8.44772 15 8 15.4477 8 16C8 16.5523 8.44772 17 9 17H13C13.5523 17 14 16.5523 14 16Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Document;
  