
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const ReceiveParcel = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18 3H4C3.44772 3 3 3.44772 3 4V14C3 14.5523 3.44772 15 4 15H15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13H12V10H18C18.5523 10 19 9.55228 19 9V4C19 3.44772 18.5523 3 18 3ZM5 5H10V8H5V5ZM10 13H5V10H10V13ZM17 8H12V5H17V8ZM21.707 17.707L18.707 20.707C18.5195 20.8946 18.2652 21 18 21C17.7348 21 17.4805 20.8946 17.293 20.707L14.293 17.707C13.914 17.3146 13.9194 16.6909 14.3052 16.3052C14.6909 15.9194 15.3146 15.914 15.707 16.293L17 17.5859V12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12V17.5859L20.293 16.293C20.6854 15.914 21.3091 15.9194 21.6948 16.3052C22.0806 16.6909 22.086 17.3146 21.707 17.707Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default ReceiveParcel;
  