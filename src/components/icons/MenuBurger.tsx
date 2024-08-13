
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const MenuBurger = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18 8H6C5.44772 8 5 7.55228 5 7C5 6.44772 5.44772 6 6 6H18C18.5523 6 19 6.44772 19 7C19 7.55228 18.5523 8 18 8ZM19 12C19 11.4477 18.5523 11 18 11H6C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H18C18.5523 13 19 12.5523 19 12ZM19 17C19 16.4477 18.5523 16 18 16H6C5.44772 16 5 16.4477 5 17C5 17.5523 5.44772 18 6 18H18C18.5523 18 19 17.5523 19 17Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default MenuBurger;
  