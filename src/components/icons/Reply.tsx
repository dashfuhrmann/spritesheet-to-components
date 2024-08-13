
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Reply = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.999 20.0001C19.5404 19.9996 19.1409 19.6872 19.0298 19.2423C18.9961 19.124 18.0425 16.0001 12 16.0001V19.0001C11.9999 19.4045 11.7563 19.769 11.3827 19.9237C11.0091 20.0785 10.579 19.993 10.293 19.7071L3.29304 12.7071C3.10542 12.5196 3 12.2653 3 12.0001C3 11.7348 3.10542 11.4805 3.29304 11.2931L10.293 4.29306C10.5791 4.00707 11.0093 3.9216 11.383 4.0765C11.7566 4.23139 12.0002 4.59615 12 5.00066V8.00006H13C16.6494 8.00006 21 9.90856 21 19.0001C21 19.505 20.6233 19.9306 20.1221 19.9923C20.0813 19.9977 20.0402 20.0004 19.999 20.0001ZM5.41414 12.0001L10 16.586V15.0001C10 14.4478 10.4478 14.0001 11 14.0001H12C14.3938 13.8654 16.7672 14.5064 18.7676 15.8281C18.1333 11.9583 16.2007 10.0001 13 10.0001H11C10.4478 10.0001 10 9.55234 10 9.00006V7.41456L5.41414 12.0001Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Reply;
  