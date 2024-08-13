
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const LockOn = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18 10H17V7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7V10H6C5.44772 10 5 10.4477 5 11V21C5 21.5523 5.44772 22 6 22H18C18.5523 22 19 21.5523 19 21V11C19 10.4477 18.5523 10 18 10ZM9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7V10H9V7ZM17 20H7V12H17V20Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default LockOn;
  