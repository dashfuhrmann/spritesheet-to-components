
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Laptop = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M22 16V6.166C21.9999 4.96977 21.0302 4 19.834 4H4.166C2.96977 4 2.00006 4.96977 2 6.166V16C1.44772 16 1 16.4477 1 17V20C1 20.5523 1.44772 21 2 21H22C22.5523 21 23 20.5523 23 20V17C23 16.4477 22.5523 16 22 16ZM4 6H20V16H4V6ZM21 19H3V18H21V19ZM18 8C18 8.55228 17.5523 9 17 9H7V13C7 13.5523 6.55228 14 6 14C5.44772 14 5 13.5523 5 13V8C5 7.44772 5.44772 7 6 7H17C17.5523 7 18 7.44772 18 8Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Laptop;
  