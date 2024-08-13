
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const MobilePhone = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M17 22H7C6.44772 22 6 21.5523 6 21V3C6 2.44772 6.44772 2 7 2H17C17.5523 2 18 2.44772 18 3V21C18 21.5523 17.5523 22 17 22ZM8 20H16V4H8V20ZM15 18C15 17.4477 14.5523 17 14 17H10C9.44772 17 9 17.4477 9 18C9 18.5523 9.44772 19 10 19H14C14.5523 19 15 18.5523 15 18Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default MobilePhone;
  