
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const AddressBook = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 14C15.433 14 17 12.433 17 10.5C17 8.567 15.433 7 13.5 7C11.567 7 10 8.567 10 10.5C10.0023 12.432 11.568 13.9977 13.5 14ZM13.5 9C14.3284 9 15 9.67157 15 10.5C15 11.3284 14.3284 12 13.5 12C12.6716 12 12 11.3284 12 10.5C12.0009 9.67196 12.672 9.00094 13.5 9ZM20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3ZM19 17.3954C17.5789 15.8678 15.5864 15 13.5 15C11.4136 15 9.42112 15.8678 8 17.3954V5H19V17.3954ZM17.7463 19H9.2537C10.3 17.7334 11.8571 17 13.5 17C15.1429 17 16.7 17.7334 17.7463 19ZM5 5H6V19H5V5Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default AddressBook;
  