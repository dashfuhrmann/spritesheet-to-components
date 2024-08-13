
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Image = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 11C6.67157 11 6 10.3284 6 9.5C6 8.67157 6.67157 8 7.5 8C8.32843 8 9 8.67157 9 9.5C8.99906 10.328 8.32804 10.9991 7.5 11ZM21 4H3C2.44772 4 2 4.44772 2 5V19C2 19.5523 2.44772 20 3 20H21C21.5523 20 22 19.5523 22 19V5C22 4.44772 21.5523 4 21 4ZM4 6H20V14.5859L15.707 10.293C15.5196 10.1054 15.2652 9.99996 15 9.99996C14.7348 9.99996 14.4804 10.1054 14.293 10.293L6.5859 18H4V6ZM9.4141 18L15 12.4141L20 17.4141V18H9.4141Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Image;
  