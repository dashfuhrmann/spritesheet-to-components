
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Grid = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 3C13.448 3 13 3.448 13 4V10C13 10.552 13.448 11 14 11H20C20.552 11 21 10.552 21 10V4C21 3.448 20.552 3 20 3H14ZM19 9H15V5H19V9ZM3 10C3 10.552 3.448 11 4 11H10C10.552 11 11 10.552 11 10V4C11 3.448 10.552 3 10 3H4C3.448 3 3 3.448 3 4V10ZM5 5H9V9H5V5ZM13 20C13 20.552 13.448 21 14 21H20C20.552 21 21 20.552 21 20V14C21 13.448 20.552 13 20 13H14C13.448 13 13 13.448 13 14V20ZM15 15H19V19H15V15ZM3 20C3 20.552 3.448 21 4 21H10C10.552 21 11 20.552 11 20V14C11 13.448 10.552 13 10 13H4C3.448 13 3 13.448 3 14V20ZM5 15H9V19H5V15Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Grid;
  