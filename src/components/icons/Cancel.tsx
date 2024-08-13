
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Cancel = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7074 17.293C18.9674 17.5441 19.0716 17.9159 18.9801 18.2655C18.8886 18.6151 18.6156 18.8882 18.2659 18.9797C17.9163 19.0712 17.5445 18.967 17.2934 18.707L12.0004 13.4141L6.70741 18.707C6.31503 19.086 5.69132 19.0806 5.30559 18.6948C4.91986 18.3091 4.91444 17.6854 5.29341 17.293L10.5863 12L5.29341 6.70698C4.91444 6.3146 4.91986 5.69089 5.30559 5.30516C5.69132 4.91943 6.31503 4.91401 6.70741 5.29298L12.0004 10.5859L17.2934 5.29298C17.5445 5.03302 17.9163 4.92877 18.2659 5.02028C18.6156 5.1118 18.8886 5.38484 18.9801 5.73447C19.0716 6.0841 18.9674 6.4559 18.7074 6.70698L13.4145 12L18.7074 17.293Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Cancel;
  