
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Print = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21 13H19V5C19 4.44772 18.5523 4 18 4H6C5.44772 4 5 4.44772 5 5V13H3C2.44772 13 2 13.4477 2 14V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V14C22 13.4477 21.5523 13 21 13ZM7 6H17V13H7V6ZM20 19H4V15H20V19ZM16 17C16 16.4477 16.4477 16 17 16H18C18.5523 16 19 16.4477 19 17C19 17.5523 18.5523 18 18 18H17C16.4477 18 16 17.5523 16 17ZM9 8C9 7.44772 9.44772 7 10 7H14C14.5523 7 15 7.44772 15 8C15 8.55228 14.5523 9 14 9H10C9.44772 9 9 8.55228 9 8ZM15 11C15 11.5523 14.5523 12 14 12H10C9.44772 12 9 11.5523 9 11C9 10.4477 9.44772 10 10 10H14C14.5523 10 15 10.4477 15 11Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Print;
  