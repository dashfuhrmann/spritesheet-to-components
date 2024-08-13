
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Video = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20 21H4C3.44772 21 3 20.5523 3 20C3 19.4477 3.44772 19 4 19H20C20.5523 19 21 19.4477 21 20C21 20.5523 20.5523 21 20 21ZM21 17V5C21 4.44772 20.5523 4 20 4H4C3.44772 4 3 4.44772 3 5V17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17ZM5 6H19V16H5V6ZM10.5146 14.8574L15.5146 11.8574C15.8157 11.6767 15.9999 11.3512 15.9999 11C15.9999 10.6488 15.8157 10.3233 15.5146 10.1426L10.5146 7.1426C10.2057 6.9572 9.8209 6.9523 9.50737 7.12979C9.19383 7.30728 9 7.63971 9 8V14C9 14.3603 9.19383 14.6927 9.50737 14.8702C9.8209 15.0477 10.2057 15.0428 10.5146 14.8574ZM13.0562 11L11 12.234V9.7663L13.0562 11Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Video;
  