
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const TrashBinDelete = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 19C13.4477 19 13 18.5523 13 18V9C13 8.44772 13.4477 8 14 8C14.5523 8 15 8.44772 15 9V18C15 18.5523 14.5523 19 14 19ZM11 18V9C11 8.44772 10.5523 8 10 8C9.44772 8 9 8.44772 9 9V18C9 18.5523 9.44772 19 10 19C10.5523 19 11 18.5523 11 18ZM21 6C21 6.55228 20.5523 7 20 7H19V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V7H4C3.44772 7 3 6.55228 3 6C3 5.44772 3.44772 5 4 5H7.8818L9.1055 2.5527C9.27493 2.21393 9.62122 2 10 2H14C14.3788 2 14.7251 2.21393 14.8945 2.5527L16.1182 5H20C20.5523 5 21 5.44772 21 6ZM10.1182 5H13.8818L13.3818 4H10.6182L10.1182 5ZM17 7H7V20H17V7Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default TrashBinDelete;
  