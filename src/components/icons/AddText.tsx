
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const AddText = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 20H3C2.44772 20 2 19.5523 2 19V5C2 4.44772 2.44772 4 3 4H21C21.5523 4 22 4.44772 22 5V14C22 14.5523 21.5523 15 21 15C20.4477 15 20 14.5523 20 14V6H4V18H14C14.5523 18 15 18.4477 15 19C15 19.5523 14.5523 20 14 20ZM21 18H20V17C20 16.4477 19.5523 16 19 16C18.4477 16 18 16.4477 18 17V18H17C16.4477 18 16 18.4477 16 19C16 19.5523 16.4477 20 17 20H18V21C18 21.5523 18.4477 22 19 22C19.5523 22 20 21.5523 20 21V20H21C21.5523 20 22 19.5523 22 19C22 18.4477 21.5523 18 21 18ZM15 7H9C8.44772 7 8 7.44772 8 8V9C8 9.55228 8.44772 10 9 10C9.55228 10 10 9.55228 10 9H11V15C10.4477 15 10 15.4477 10 16C10 16.5523 10.4477 17 11 17H13C13.5523 17 14 16.5523 14 16C14 15.4477 13.5523 15 13 15V9H14C14 9.55228 14.4477 10 15 10C15.5523 10 16 9.55228 16 9V8C16 7.44772 15.5523 7 15 7Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default AddText;
  