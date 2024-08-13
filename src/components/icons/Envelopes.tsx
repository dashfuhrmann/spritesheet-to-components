
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Envelopes = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21 12C21.5523 12 22 12.4477 22 13V21C22 21.5523 21.5523 22 21 22H9C8.44772 22 8 21.5523 8 21V13C8 12.4477 8.44772 12 9 12H21ZM20 14.8685L15.5547 17.832C15.2188 18.0559 14.7812 18.0559 14.4453 17.832L10 14.8685V20H20V14.8685ZM17 2C17.5523 2 18 2.44772 18 3V10C18 10.5523 17.5523 11 17 11C16.4477 11 16 10.5523 16 10V5.4141L14.707 6.707C14.5196 6.89461 14.2652 7.00002 14 7H6C5.73479 7.00002 5.48045 6.89461 5.293 6.707L4 5.4141V18H6C6.55228 18 7 18.4477 7 19C7 19.5523 6.55228 20 6 20H3C2.44772 20 2 19.5523 2 19V3C2 2.44772 2.44772 2 3 2H17ZM17.697 14H12.303L15 15.7979L17.697 14ZM14.5859 4H5.4141L6.4141 5H13.5859L14.5859 4Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Envelopes;
  