
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const ShoppingCartFilled = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 21C9.7 21 9 20.3 9 19.5C9 18.7 9.7 18 10.5 18C11.3 18 12 18.7 12 19.5C12 20.3 11.3 21 10.5 21ZM16.5 21C15.7 21 15 20.3 15 19.5C15 18.7 15.7 18 16.5 18C17.3 18 18 18.7 18 19.5C18 20.3 17.3 21 16.5 21ZM18 17H9C8.6 17 8.2 16.7 8.1 16.4L5.1 8.4L4.3 6H3C2.4 6 2 5.6 2 5C2 4.4 2.4 4 3 4H5C5.4 4 5.8 4.3 5.9 4.7L6.7 7H21C21.3 7 21.6 7.2 21.8 7.4C22 7.7 22.1 8 21.9 8.4L18.9 16.4C18.8 16.7 18.4 17 18 17Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default ShoppingCartFilled;
  