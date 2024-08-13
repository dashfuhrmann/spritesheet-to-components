
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Calendar = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19 4H18V3C18 2.44772 17.5523 2 17 2C16.4477 2 16 2.44772 16 3V4H8V3C8 2.44772 7.55228 2 7 2C6.44772 2 6 2.44772 6 3V4H5C4.44772 4 4 4.44772 4 5V21C4 21.5523 4.44772 22 5 22H19C19.5523 22 20 21.5523 20 21V5C20 4.44772 19.5523 4 19 4ZM18 6V8H6V6H18ZM18 20H6V10H18V20Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Calendar;
  