
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const ForwardingDocuments = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 15C14 14.4477 13.5523 14 13 14H5V7.1738L10.3491 11.7588C10.7235 12.0804 11.2765 12.0804 11.6509 11.7588L17 7.1738V11C17 11.5523 17.4477 12 18 12C18.5523 12 19 11.5523 19 11V5C19 4.44772 18.5523 4 18 4H4C3.44772 4 3 4.44772 3 5V15C3 15.5523 3.44772 16 4 16H13C13.5523 16 14 15.5523 14 15ZM11 9.6826L6.7031 6H15.2969L11 9.6826ZM21 14V18C21 18.5523 20.5523 19 20 19C19.4477 19 19 18.5523 19 18V16.4141L14.707 20.707C14.3146 21.086 13.6909 21.0806 13.3052 20.6948C12.9194 20.3091 12.914 19.6854 13.293 19.293L17.5859 15H16C15.4477 15 15 14.5523 15 14C15 13.4477 15.4477 13 16 13H20C20.5523 13 21 13.4477 21 14Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default ForwardingDocuments;
  