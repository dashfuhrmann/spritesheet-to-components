
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const DigitalMailing = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.834 2C21.0302 2 21.9999 2.96977 22 4.166V17C22.5523 17 23 17.4477 23 18V21C23 21.5523 22.5523 22 22 22H2C1.44772 22 1 21.5523 1 21V18C1 17.4477 1.44772 17 2 17V4.166C2.00006 2.96977 2.96977 2 4.166 2H19.834ZM21 19H3V20H21V19ZM20 4H4V17H20V4ZM17 6C17.5523 6 18 6.44772 18 7V14C18 14.5523 17.5523 15 17 15H7C6.44772 15 6 14.5523 6 14V7C6 6.44772 6.44772 6 7 6H17ZM16 9.37L12.5547 11.832C12.2188 12.0559 11.7812 12.0559 11.4453 11.832L8 9.37V13H16V9.37ZM14.697 8H9.303L12 9.7979L14.697 8Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default DigitalMailing;
  