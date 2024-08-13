
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Shop = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21 4H3C2.44772 4 2 4.44772 2 5V19C2 19.5523 2.44772 20 3 20H21C21.5523 20 22 19.5523 22 19V5C22 4.44772 21.5523 4 21 4ZM8 18V12H11V18H8ZM13 18V12H16V18H13ZM20 18H18V11C18 10.4477 17.5523 10 17 10H7C6.44772 10 6 10.4477 6 11V18H4V6H20V18ZM11 8C10.9986 7.73562 11.1025 7.48155 11.2888 7.29392C11.475 7.10629 11.7283 7.00053 11.9927 7H12.0027C12.5546 7.00149 13.001 7.44986 13 8.00179C12.999 8.55373 12.551 9.00049 11.9991 9C11.4472 8.9995 11 8.55193 11 8Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Shop;
  