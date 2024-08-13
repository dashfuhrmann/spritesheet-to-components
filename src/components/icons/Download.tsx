
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Download = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.293 11.707C5.91403 11.3146 5.91945 10.6909 6.30518 10.3052C6.69092 9.91945 7.31462 9.91403 7.707 10.293L11 13.5859V4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4V13.5859L16.293 10.293C16.6854 9.91403 17.3091 9.91945 17.6948 10.3052C18.0806 10.6909 18.086 11.3146 17.707 11.707L12.707 16.707C12.5195 16.8946 12.2652 17 12 17C11.7348 17 11.4805 16.8946 11.293 16.707L6.293 11.707ZM20 19H4C3.44772 19 3 19.4477 3 20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20C21 19.4477 20.5523 19 20 19Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Download;
  