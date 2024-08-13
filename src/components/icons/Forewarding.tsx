
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Forewarding = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.001 20.0001C3.95986 20.0001 3.91875 19.9976 3.8779 19.9927C3.37676 19.9306 3.00032 19.505 3 19.0001C3 9.90796 7.3506 8.00006 11 8.00006H12V5.00006C12.0001 4.59566 12.2437 4.23113 12.6173 4.07638C12.991 3.92164 13.421 4.00715 13.707 4.29306L20.707 11.2931C21.0974 11.6836 21.0974 12.3166 20.707 12.7072L13.707 19.7072C13.421 19.9931 12.9909 20.0786 12.6173 19.9238C12.2437 19.7691 12 19.4045 12 19.0001V16.0001C5.8516 16.0001 4.9785 19.2101 4.97 19.2428C4.85875 19.6874 4.45939 19.9996 4.001 20.0001ZM12 14.0001H13C13.5523 14.0001 14 14.4478 14 15.0001V16.586L18.5859 12.0001L14 7.41386V9.00006C14 9.55234 13.5523 10.0001 13 10.0001H11C7.7988 10.0001 5.8672 11.9576 5.2324 15.8282C7.23281 14.5065 9.6062 13.8654 12 14.0001Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Forewarding;
  