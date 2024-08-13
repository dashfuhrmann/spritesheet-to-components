
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Accessories = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path d="M19.1111 2C20.1823 2 21 2.91995 21 4V20C21 21.0801 20.1823 22 19.1111 22H4.88889C3.81773 22 3 21.0801 3 20V4C3 2.91995 3.81773 2 4.88889 2H19.1111ZM19 4H5V20H19V4ZM7 5C7.55228 5 8 5.44772 8 6V18C8 18.5523 7.55228 19 7 19C6.44772 19 6 18.5523 6 18V6C6 5.44772 6.44772 5 7 5ZM15 5C15.5523 5 16 5.44772 16 6V15.201C16 15.7318 15.5697 16.1622 15.0388 16.1622C14.8486 16.1622 14.6627 16.1057 14.5045 16L13.5633 15.3706C13.2277 15.1462 12.7901 15.1456 12.4539 15.369L11.5045 16C11.0591 16.2961 10.458 16.175 10.1619 15.7295C10.0563 15.5707 10 15.3842 10 15.1934V6C10 5.44772 10.4477 5 11 5H15ZM14 7H12V13.269L13.0125 12.5963L14 13.257V7Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Accessories;
  