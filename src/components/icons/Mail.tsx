
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Mail = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21 5H3C2.44772 5 2 5.44772 2 6V18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18V6C22 5.44772 21.5523 5 21 5ZM18.0853 7L12 11.7329L5.9147 7H18.0853ZM4 17V8.0447L11.3862 13.79C11.7473 14.0705 12.2527 14.0705 12.6138 13.79L20 8.0447V17H4Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Mail;
  