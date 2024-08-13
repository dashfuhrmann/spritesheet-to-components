
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const HeartFilled = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4295 6.08591C17.3983 4.06591 14.1464 3.97591 12.0051 5.87591C9.82377 3.92591 6.49178 4.06591 4.48058 6.18591C2.46938 8.30591 2.51941 11.6359 4.58064 13.7059L11.2947 20.2059C11.6849 20.5959 12.3153 20.5959 12.7055 20.2059L19.4195 13.7059C21.5308 11.5959 21.5308 8.18591 19.4195 6.07591L19.4295 6.08591Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default HeartFilled;
  