
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Camera = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 17C9.79086 17 8 15.2091 8 13C8 10.7909 9.79086 9 12 9C14.2091 9 16 10.7909 16 13C15.9975 15.2081 14.2081 16.9975 12 17ZM12 11C10.8954 11 10 11.8954 10 13C10 14.1046 10.8954 15 12 15C13.1046 15 14 14.1046 14 13C13.9989 11.8959 13.1041 11.0011 12 11ZM21 20H3C2.44772 20 2 19.5523 2 19V8C2 7.44772 2.44772 7 3 7H6V5C6 4.44772 6.44772 4 7 4H17C17.5523 4 18 4.44772 18 5V7H21C21.5523 7 22 7.44772 22 8V19C22 19.5523 21.5523 20 21 20ZM4 18H20V9H17C16.4477 9 16 8.55228 16 8V6H8V8C8 8.55228 7.55228 9 7 9H4V18Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Camera;
  