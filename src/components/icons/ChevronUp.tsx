
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const ChevronUp = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0004 15C17.7352 15.0003 17.4807 14.8949 17.2934 14.707L12.0004 9.41413L6.70741 14.707C6.31503 15.086 5.69132 15.0806 5.30559 14.6949C4.91986 14.3091 4.91444 13.6854 5.29341 13.293L11.2934 7.29304C11.4809 7.10542 11.7352 7 12.0004 7C12.2656 7 12.52 7.10542 12.7074 7.29304L18.7074 13.293C18.9933 13.579 19.0788 14.0091 18.9241 14.3827C18.7694 14.7563 18.4048 14.9999 18.0004 15Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default ChevronUp;
  