
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const IconDefect = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20 3C20.5523 3 21 3.4477 21 4V20C21 20.5523 20.5523 21 20 21H4C3.4477 21 3 20.5523 3 20V4C3 3.4477 3.4477 3 4 3H20ZM19 5H12.999V8.999L15.9956 9C16.6606 9 17.1289 9.6318 16.9629 10.2544L14.8357 15.3628C14.6346 15.8772 14.0547 16.1312 13.5403 15.9301C13.0626 15.7434 12.8095 15.23 12.9368 14.7457L14.344 10.999L12 11C11.4872 11 11.0645 10.614 11.0067 10.1166L11 10L10.999 5H5V19H19V5Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default IconDefect;
  