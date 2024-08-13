
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const EmergingMarketSolutions = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path d="M20.8889 21H3.11111C2.49747 21 2 20.5523 2 20C2 19.4477 2.49747 19 3.11111 19H20.8889C21.5026 19 22 19.4477 22 20C22 20.5523 21.5026 21 20.8889 21ZM8 17V7C8 6.44772 7.55228 6 7 6H3C2.44772 6 2 6.44772 2 7V17C2 17.5523 2.44772 18 3 18H7C7.55228 18 8 17.5523 8 17ZM4 8H6V16H4V8ZM15 17V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V17C9 17.5523 9.44772 18 10 18H14C14.5523 18 15 17.5523 15 17ZM11 5H13V16H11V5ZM22 17V12C22 11.4477 21.5523 11 21 11H17C16.4477 11 16 11.4477 16 12V17C16 17.5523 16.4477 18 17 18H21C21.5523 18 22 17.5523 22 17ZM18 13H20V16H18V13Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default EmergingMarketSolutions;
  