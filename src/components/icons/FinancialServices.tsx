
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const FinancialServices = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18 11C18 10.4481 17.5519 10 17 10H3C2.4481 10 2 10.4481 2 11V19C2 19.5519 2.4481 20 3 20H17C17.5519 20 18 19.5519 18 19V11ZM4 18H16V12H4V18ZM8 8H20V11C19.4477 11 19 11.4477 19 12C19 12.5523 19.4477 13 20 13H21C21.5519 13 22 12.5519 22 12V4C22 3.4481 21.5519 3 21 3H7C6.4481 3 6 3.4481 6 4V8C6 8.2652 6.1054 8.5196 6.2929 8.7071C6.4804 8.8946 6.7348 9 7 9C7.5523 9 8 8.5523 8 8ZM20 6V5H8V6H20Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default FinancialServices;
  