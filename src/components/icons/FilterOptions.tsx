
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const FilterOptions = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 5H8V4C8 3.44772 7.55228 3 7 3C6.44772 3 6 3.44772 6 4V5H5C4.44772 5 4 5.44772 4 6V9C4 9.55228 4.44772 10 5 10H6V20C6 20.5523 6.44772 21 7 21C7.55228 21 8 20.5523 8 20V10H9C9.55228 10 10 9.55228 10 9V6C10 5.44772 9.55228 5 9 5ZM8 8H6V7H8V8ZM19 7H18V4C18 3.44772 17.5523 3 17 3C16.4477 3 16 3.44772 16 4V7H15C14.4477 7 14 7.44772 14 8V11C14 11.5523 14.4477 12 15 12H16V20C16 20.5523 16.4477 21 17 21C17.5523 21 18 20.5523 18 20V12H19C19.5523 12 20 11.5523 20 11V8C20 7.44772 19.5523 7 19 7ZM18 10H16V9H18V10ZM14 13H13V4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4V13H10C9.44772 13 9 13.4477 9 14V17C9 17.5523 9.44772 18 10 18H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V18H14C14.5523 18 15 17.5523 15 17V14C15 13.4477 14.5523 13 14 13ZM13 16H11V15H13V16Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default FilterOptions;
  