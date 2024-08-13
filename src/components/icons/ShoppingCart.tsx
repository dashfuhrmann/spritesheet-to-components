
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const ShoppingCart = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 21C9.67157 21 9 20.3284 9 19.5C9 18.6716 9.67157 18 10.5 18C11.3284 18 12 18.6716 12 19.5C11.9991 20.328 11.328 20.9991 10.5 21ZM16.5 21C15.6716 21 15 20.3284 15 19.5C15 18.6716 15.6716 18 16.5 18C17.3284 18 18 18.6716 18 19.5C17.9991 20.328 17.328 20.9991 16.5 21ZM18 17H9C8.58313 17 8.21 16.7414 8.0635 16.3511L5.0645 8.3535L5.0605 8.3423L5.0493 8.3105L4.2793 6H3C2.44772 6 2 5.55228 2 5C2 4.44772 2.44772 4 3 4H5C5.43039 4 5.81252 4.27532 5.9487 4.6836L6.7207 7H21C21.328 6.99995 21.6352 7.16075 21.822 7.43033C22.0089 7.69991 22.0517 8.04398 21.9365 8.3511L18.9365 16.3511C18.79 16.7414 18.4169 17 18 17ZM9.6929 15H17.3071L19.5571 9H7.4429L9.6929 15Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default ShoppingCart;
  