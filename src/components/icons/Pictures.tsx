
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Pictures = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M17 6H4V16C4 16.5523 3.55228 17 3 17C2.44772 17 2 16.5523 2 16V5C2 4.44772 2.44772 4 3 4H17C17.5523 4 18 4.44772 18 5C18 5.55228 17.5523 6 17 6ZM22 8V19C22 19.5523 21.5523 20 21 20H6C5.44772 20 5 19.5523 5 19V8C5 7.44772 5.44772 7 6 7H21C21.5523 7 22 7.44772 22 8ZM7 18H7.5859L14.293 11.293C14.4804 11.1054 14.7348 11 15 11C15.2652 11 15.5196 11.1054 15.707 11.293L20 15.5859V9H7V18ZM15 13.4141L10.4141 18H19.5859L15 13.4141ZM10.5 13C11.3284 13 12 12.3284 12 11.5C12 10.6716 11.3284 10 10.5 10C9.67157 10 9 10.6716 9 11.5C9 12.3284 9.67157 13 10.5 13Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Pictures;
  