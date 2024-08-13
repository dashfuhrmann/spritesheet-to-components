
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const PowerPlug = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 20C13 19.4481 12.5519 19 12 19C11.4481 19 11 19.4481 11 20V21C11 21.5519 11.4481 22 12 22C12.5519 22 13 21.5519 13 21V20ZM9 17C9 17.5519 9.4481 18 10 18H14C14.5519 18 15 17.5519 15 17H17C17.5519 17 18 16.5519 18 16V11C18 10.4481 17.5519 10 17 10H7C6.4481 10 6 10.4481 6 11V16C6 16.5519 6.4481 17 7 17H9ZM16 15V12H8V15H10.001C10.5527 15 11 15.4473 11 15.999C11 15.9997 11 16 11 16H13V15.999C13 15.4473 13.4473 15 13.999 15C14.8717 15 16 15 16 15ZM19 8C19 7.4481 18.5519 7 18 7H6C5.4481 7 5 7.4481 5 8C5 8.5519 5.4481 9 6 9H18C18.5519 9 19 8.5519 19 8ZM10 3C10 2.4481 9.5519 2 9 2C8.4481 2 8 2.4481 8 3V5C8 5.5519 8.4481 6 9 6C9.5519 6 10 5.5519 10 5V3ZM16 3C16 2.4481 15.5519 2 15 2C14.4481 2 14 2.4481 14 3V5C14 5.5519 14.4481 6 15 6C15.5519 6 16 5.5519 16 5V3Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default PowerPlug;
  