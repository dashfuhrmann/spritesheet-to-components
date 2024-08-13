
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Basics = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19 4V12C19 12.5523 18.5523 13 18 13H6C5.44772 13 5 12.5523 5 12V4C5 3.44772 5.44772 3 6 3H18C18.5523 3 19 3.44772 19 4ZM9.303 5L12 6.7979L14.697 5H9.303ZM17 11V5.8685L12.5547 8.832C12.2188 9.05593 11.7812 9.05593 11.4453 8.832L7 5.8685V11H17ZM21 15C21.5523 15 22 15.4477 22 16V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V16C2 15.4477 2.44772 15 3 15H21ZM20 17H4V19H20V17Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Basics;
  