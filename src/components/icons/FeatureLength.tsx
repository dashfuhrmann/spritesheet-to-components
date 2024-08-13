
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const FeatureLength = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C10.55 2 11 2.45 11 3V21C11 21.55 10.55 22 10 22H3C2.45 22 2 21.55 2 21V3C2 2.45 2.45 2 3 2H10ZM9 20V4H4V5H7C7.55 5 8 5.45 8 6C8 6.55 7.55 7 7 7H4V8H6C6.55 8 7 8.45 7 9C7 9.55 6.55 10 6 10H4V11H7C7.55 11 8 11.45 8 12C8 12.55 7.55 13 7 13H4V14H6C6.55 14 7 14.45 7 15C7 15.55 6.55 16 6 16H4V17H7C7.55 17 8 17.45 8 18C8 18.55 7.55 19 7 19H4V20H9ZM18.719 2.29L21.719 5.289C22.098 5.681 22.093 6.305 21.707 6.691C21.321 7.077 20.595 7.08 20.305 6.703L19.012 5.41V18.586L20.305 17.293C20.698 16.914 21.321 16.919 21.707 17.305C22.093 17.691 22.098 18.315 21.719 18.707L18.719 21.707C18.532 21.895 18.277 22 18.012 22C17.747 22 17.493 21.895 17.305 21.707L14.305 18.707C13.926 18.315 13.932 17.691 14.317 17.305C14.703 16.919 15.327 16.914 15.719 17.293L17.012 18.586V5.41L15.719 6.703C15.327 7.082 14.703 7.077 14.317 6.691C13.932 6.305 13.926 5.591 14.305 5.289L17.305 2.29C17.493 2.102 17.747 2 18.012 2C18.277 2 18.532 2.102 18.719 2.29Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default FeatureLength;
  