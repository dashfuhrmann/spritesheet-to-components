
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Play = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.479 11.1222L7.479 5.12218C7.16915 4.95311 6.79311 4.95991 6.48957 5.14008C6.18604 5.32025 6 5.6471 6 6.00008V18.0001C6 18.3531 6.18604 18.68 6.48957 18.8601C6.79311 19.0403 7.16915 19.0471 7.479 18.878L18.479 12.878C18.8003 12.7028 19.0002 12.3661 19.0002 12.0001C19.0002 11.6342 18.8003 11.2975 18.479 11.1222ZM8 16.3155V7.68468L15.9116 12.0001L8 16.3155Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Play;
  