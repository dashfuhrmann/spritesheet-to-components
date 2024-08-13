
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const ParcelTracking = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.707 19.293L18.4448 16.0308C19.4691 14.2944 19.0423 12.0672 17.4487 10.8325C15.855 9.59772 13.5918 9.74074 12.1663 11.1663C10.7407 12.5918 10.5977 14.855 11.8325 16.4487C13.0672 18.0423 15.2944 18.4691 17.0308 17.4448L20.293 20.707C20.6854 21.086 21.3091 21.0806 21.6948 20.6948C22.0806 20.3091 22.086 19.6854 21.707 19.293ZM15 16C13.8954 16 13 15.1046 13 14C13 12.8954 13.8954 12 15 12C16.1046 12 17 12.8954 17 14C16.9989 15.1041 16.1041 15.9989 15 16ZM11 9H17C17.5523 9 18 8.55228 18 8V3C18 2.44772 17.5523 2 17 2H3C2.44772 2 2 2.44772 2 3V13C2 13.5523 2.44772 14 3 14H9C9.55228 14 10 13.5523 10 13C10 12.4477 9.55228 12 9 12H4V9H9V10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10V9ZM16 4V7H11V4H16ZM4 7V4H9V7H4Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default ParcelTracking;
  