
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const CameraAdd = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 19H3C2.44772 19 2 18.5523 2 18V7C2 6.44772 2.44772 6 3 6H6V4C6 3.44772 6.44772 3 7 3H17C17.5523 3 18 3.44772 18 4V6H21C21.5523 6 22 6.44772 22 7V13C22 13.5523 21.5523 14 21 14C20.4477 14 20 13.5523 20 13V8H17C16.4477 8 16 7.55228 16 7V5H8V7C8 7.55228 7.55228 8 7 8H4V17H14C14.5523 17 15 17.4477 15 18C15 18.5523 14.5523 19 14 19ZM16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2081 15.9975 15.9975 14.2081 16 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1041 10.0011 13.9989 10.8959 14 12ZM21 17H20V16C20 15.4477 19.5523 15 19 15C18.4477 15 18 15.4477 18 16V17H17C16.4477 17 16 17.4477 16 18C16 18.5523 16.4477 19 17 19H18V20C18 20.5523 18.4477 21 19 21C19.5523 21 20 20.5523 20 20V19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default CameraAdd;
  