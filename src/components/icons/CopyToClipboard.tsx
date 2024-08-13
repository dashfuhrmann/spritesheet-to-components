
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const CopyToClipboard = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19 6H16V3C16 2.44772 15.5523 2 15 2H5C4.44772 2 4 2.44772 4 3V17C4 17.5523 4.44772 18 5 18H8V21C8 21.5523 8.44772 22 9 22H19C19.5523 22 20 21.5523 20 21V7C20 6.44772 19.5523 6 19 6ZM6 16V4H14V6H9C8.44772 6 8 6.44772 8 7V16H6ZM18 20H10V8H18V20Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default CopyToClipboard;
  