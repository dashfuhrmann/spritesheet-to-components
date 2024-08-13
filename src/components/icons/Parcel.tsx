
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Parcel = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 8C14 7.44772 14.4477 7 15 7H18C18.5523 7 19 7.44772 19 8C19 8.55228 18.5523 9 18 9H15C14.4477 9 14 8.55228 14 8ZM22 5V19C22 19.5523 21.5523 20 21 20H3C2.44772 20 2 19.5523 2 19V5C2 4.44772 2.44772 4 3 4H21C21.5523 4 22 4.44772 22 5ZM20 6H13V11H20V6ZM4 6V11H11V6H4ZM4 18H11V13H4V18ZM20 18V13H13V18H20Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Parcel;
  