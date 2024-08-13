
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const X = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path d="M13.9047 10.4696L21.3513 2H19.5873L13.1187 9.35251L7.956 2H2L9.80867 13.1194L2 21.9999H3.764L10.5907 14.2338L16.044 21.9999H22M4.40067 3.30158H7.11067L19.586 20.7623H16.8753" fill="currentColor"/>
  ` }}
  />
  )
};

export default X;
  