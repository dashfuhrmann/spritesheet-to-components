
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const DragHandle = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18 16H6C5.44772 16 5 15.5523 5 15C5 14.4477 5.44772 14 6 14H18C18.5523 14 19 14.4477 19 15C19 15.5523 18.5523 16 18 16ZM19 9C19 8.44772 18.5523 8 18 8H6C5.44772 8 5 8.44772 5 9C5 9.55228 5.44772 10 6 10H18C18.5523 10 19 9.55228 19 9Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default DragHandle;
  