
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const ArrowDown = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7074 15.707L12.7074 21.707C12.52 21.8946 12.2656 22 12.0004 22C11.7352 22 11.4809 21.8946 11.2934 21.707L5.29341 15.707C4.91444 15.3146 4.91986 14.6909 5.30559 14.3052C5.69132 13.9194 6.31503 13.914 6.70741 14.293L11.0004 18.5859V3C11.0004 2.44772 11.4481 2 12.0004 2C12.5527 2 13.0004 2.44772 13.0004 3V18.5859L17.2934 14.293C17.6858 13.914 18.3095 13.9194 18.6952 14.3052C19.081 14.6909 19.0864 15.3146 18.7074 15.707Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default ArrowDown;
  