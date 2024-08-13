
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Folder = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21 20H3C2.44772 20 2 19.5523 2 19V10C2 9.44772 2.44772 9 3 9H9.52L13.22 4.3755C13.4095 4.13845 13.6965 4.00031 14 4H21C21.5523 4 22 4.44772 22 5V19C22 19.5523 21.5523 20 21 20ZM4 18H20V6H14.48L10.78 10.6245C10.5905 10.8616 10.3035 10.9997 10 11H4V18ZM4 7V6H10C10.5523 6 11 5.55228 11 5C11 4.44772 10.5523 4 10 4H3C2.44772 4 2 4.44772 2 5V7C2 7.55228 2.44772 8 3 8C3.55228 8 4 7.55228 4 7Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Folder;
  