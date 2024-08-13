
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Minus = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0002 13H17.9982L5.9982 12.9768C5.73453 12.978 5.48121 12.8743 5.29402 12.6887C5.10683 12.503 5.00113 12.2505 5.0002 11.9868C4.99475 11.7208 5.09908 11.4643 5.28865 11.2776C5.47822 11.0909 5.7363 10.9905 6.0022 11L18.0022 11.0232C18.3587 11.0185 18.6901 11.2061 18.8694 11.5142C19.0488 11.8223 19.0485 12.2031 18.8684 12.5108C18.6884 12.8185 18.3567 13.0054 18.0002 13Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Minus;
  