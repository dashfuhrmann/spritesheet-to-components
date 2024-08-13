
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const ArrowUp = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7074 9.70704C18.52 9.89463 18.2656 10 18.0004 10C17.7352 10 17.4809 9.89463 17.2934 9.70704L13.0004 5.41414V21C13.0004 21.5523 12.5527 22 12.0004 22C11.4481 22 11.0004 21.5523 11.0004 21V5.41414L6.70741 9.70704C6.31503 10.086 5.69132 10.0806 5.30559 9.69485C4.91986 9.30912 4.91444 8.68541 5.29341 8.29304L11.2934 2.29304C11.4809 2.10542 11.7352 2 12.0004 2C12.2656 2 12.52 2.10542 12.7074 2.29304L18.7074 8.29304C18.895 8.48049 19.0005 8.73482 19.0005 9.00004C19.0005 9.26525 18.895 9.51959 18.7074 9.70704Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default ArrowUp;
  