
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const PostOfficeBox = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20 11H4C3.44772 11 3 10.5523 3 10V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V10C21 10.5523 20.5523 11 20 11ZM5 9H19V4H5V9ZM18 7V6C18 5.44772 17.5523 5 17 5H12C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12 7H16C16 7.55228 16.4477 8 17 8C17.5523 8 18 7.55228 18 7ZM20 22H4C3.44772 22 3 21.5523 3 21V14C3 13.4477 3.44772 13 4 13H20C20.5523 13 21 13.4477 21 14V21C21 21.5523 20.5523 22 20 22ZM5 20H19V15H5V20ZM18 18V17C18 16.4477 17.5523 16 17 16H12C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18H16C16 18.5523 16.4477 19 17 19C17.5523 19 18 18.5523 18 18Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default PostOfficeBox;
  