
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Wrapping = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 12H4C3.44772 12 3 12.4477 3 13V21C3 21.5523 3.44772 22 4 22H14C14.5523 22 15 21.5523 15 21V13C15 12.4477 14.5523 12 14 12ZM13 16H10V14H13V16ZM8 14V16H5V14H8ZM5 18H8V20H5V18ZM10 20V18H13V20H10ZM20 2H6C5.44772 2 5 2.44772 5 3V10C5 10.5523 5.44772 11 6 11C6.55228 11 7 10.5523 7 10V5.4141L8.293 6.707C8.48045 6.89461 8.73479 7.00002 9 7H17C17.2652 7.00002 17.5196 6.89461 17.707 6.707L19 5.4141V18H17C16.4477 18 16 18.4477 16 19C16 19.5523 16.4477 20 17 20H20C20.5523 20 21 19.5523 21 19V3C21 2.44772 20.5523 2 20 2ZM16.5859 5H9.4141L8.4141 4H17.5859L16.5859 5Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Wrapping;
  