
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const LargeEnvelope = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 22C3.4477 22 3 21.5523 3 21V3C3 2.4477 3.4477 2 4 2H20C20.5523 2 21 2.4477 21 3V21C21 21.5523 20.5523 22 20 22H4ZM19 20H5V5.4141L6.293 6.707C6.4804 6.8946 6.7348 7 7 7H17C17.2652 7 17.5196 6.8946 17.707 6.707L19 5.4141V20ZM17.5859 4H6.4141L7.4141 5H16.5859L17.5859 4Z" fill="currentColor"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 22C3.4477 22 3 21.5523 3 21V3C3 2.4477 3.4477 2 4 2H20C20.5523 2 21 2.4477 21 3V21C21 21.5523 20.5523 22 20 22H4ZM19 20H5V5.4141L6.293 6.707C6.4804 6.8946 6.7348 7 7 7H17C17.2652 7 17.5196 6.8946 17.707 6.707L19 5.4141V20ZM17.5859 4H6.4141L7.4141 5H16.5859L17.5859 4Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default LargeEnvelope;
  