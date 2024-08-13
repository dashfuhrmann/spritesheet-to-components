
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const SafeFiled = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 17C14.7347 17.0003 14.4803 16.8949 14.293 16.707L11.293 13.707C10.914 13.3146 10.9194 12.6909 11.3052 12.3052C11.6909 11.9194 12.3146 11.914 12.707 12.293L15 14.5859L21.293 8.293C21.6854 7.91403 22.3091 7.91945 22.6948 8.30518C23.0806 8.69092 23.086 9.31462 22.707 9.707L15.707 16.707C15.5197 16.8949 15.2653 17.0003 15 17ZM22 19V15C22 14.4477 21.5523 14 21 14C20.4477 14 20 14.4477 20 15V18H4V6H21C21.5523 6 22 5.55228 22 5C22 4.44772 21.5523 4 21 4H3C2.44772 4 2 4.44772 2 5V19C2 19.5523 2.44772 20 3 20H21C21.5523 20 22 19.5523 22 19ZM13 9V8C13 7.44772 12.5523 7 12 7H7C6.44772 7 6 7.44772 6 8C6 8.55228 6.44772 9 7 9H11C11 9.55228 11.4477 10 12 10C12.5523 10 13 9.55228 13 9Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default SafeFiled;
  