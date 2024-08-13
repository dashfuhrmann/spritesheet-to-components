
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Filter = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.6507 2.24164C20.4695 2.08581 20.2383 2.00041 19.9993 2.00104L19.9999 2.00004H4.02992C3.63449 1.9888 3.26957 2.2116 3.0989 2.56848C2.92823 2.92535 2.98385 3.34928 3.24082 3.65004L8.99992 10.3701V18.0001C8.99969 18.3192 9.15207 18.6192 9.40992 18.8073L13.3929 21.7946C13.6952 22.0254 14.1022 22.0649 14.4431 21.8963C14.784 21.7278 14.9998 21.3804 14.9999 21.0001V10.3701L20.7591 3.65104C20.9318 3.44983 21.0174 3.18823 20.997 2.92387C20.9767 2.65951 20.8521 2.41408 20.6507 2.24164ZM13.2408 9.35004C13.0924 9.52261 13.0077 9.74085 13.0008 9.96834L12.9999 19.0001L10.9999 17.5001L10.9992 9.96804C10.9923 9.74055 10.9076 9.52231 10.7592 9.34974L6.17382 4.00004H17.826L13.2408 9.35004Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Filter;
  