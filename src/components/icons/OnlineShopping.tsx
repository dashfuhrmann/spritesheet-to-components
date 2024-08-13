
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const OnlineShopping = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M22 16V5C22 4.44772 21.5523 4 21 4H3C2.44772 4 2 4.44772 2 5V16C1.44772 16 1 16.4477 1 17V20C1 20.5523 1.44772 21 2 21H22C22.5523 21 23 20.5523 23 20V17C23 16.4477 22.5523 16 22 16ZM4 6H20V16H4V6ZM21 19H3V18H21V19ZM15.02 14C15.0214 14.553 14.5747 15.0027 14.0217 15.005C13.4686 15.0073 13.0182 14.5613 13.015 14.0083C13.0118 13.4553 13.457 13.0041 14.01 13H14.02C14.5723 13 15.02 13.4477 15.02 14ZM12.02 14C12.0214 14.553 11.5747 15.0027 11.0217 15.005C10.4686 15.0073 10.0182 14.5613 10.015 14.0083C10.0118 13.4553 10.457 13.0041 11.01 13H11.02C11.5723 13 12.02 13.4477 12.02 14ZM16 11C16 11.5523 15.5523 12 15 12H10C9.56961 12 9.18748 11.7247 9.0513 11.3164L8.2793 9H8C7.44772 9 7 8.55228 7 8C7 7.44772 7.44772 7 8 7H9C9.43039 7 9.81252 7.27532 9.9487 7.6836L10.7207 10H15C15.5523 10 16 10.4477 16 11Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default OnlineShopping;
  