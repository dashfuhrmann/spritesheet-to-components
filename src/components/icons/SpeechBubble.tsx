
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const SpeechBubble = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 18C4.44772 18 4 17.5523 4 17V15H3C2.44772 15 2 14.5523 2 14V5C2 4.44772 2.44772 4 3 4H15C15.5523 4 16 4.44772 16 5V14C16 14.5523 15.5523 15 15 15H8.4141L5.707 17.707C5.51951 17.8946 5.26519 18 5 18ZM4 13H5C5.55228 13 6 13.4477 6 14V14.5859L7.293 13.293C7.48045 13.1054 7.73479 13 8 13H14V6H4V13ZM18.4473 20.8945C18.7861 20.7251 19 20.3788 19 20V18H21C21.5523 18 22 17.5523 22 17V8C22 7.44772 21.5523 7 21 7H18C17.4477 7 17 7.44772 17 8C17 8.55228 17.4477 9 18 9H20V16H18C17.4477 16 17 16.4477 17 17V18L14.6 16.2C14.427 16.07 14.2164 15.9998 14 16H9C8.44772 16 8 16.4477 8 17C8 17.5523 8.44772 18 9 18H13.667L17.4 20.8C17.7028 21.0274 18.1082 21.0641 18.4469 20.8947L18.4473 20.8945Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default SpeechBubble;
  