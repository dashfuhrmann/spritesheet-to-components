
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Edit = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 15C8.70106 15 8.41778 14.8663 8.2278 14.6355C8.03783 14.4047 7.96108 14.101 8.0186 13.8076L8.7075 10.293C8.74585 10.098 8.84137 9.91883 8.9819 9.7783L17.4673 1.293C17.6548 1.10545 17.9091 1 18.1743 1C18.4395 1 18.6939 1.10543 18.8814 1.293L21.707 4.1191C22.0974 4.50961 22.0974 5.14269 21.707 5.5332L13.2193 14.0205C13.0787 14.1612 12.8994 14.2567 12.7042 14.2949L9.192 14.9814C9.12877 14.9939 9.06446 15 9 15ZM10.6118 10.9765L10.2671 12.7334L12.021 12.3906L19.586 4.8262L18.1743 3.4141L10.6118 10.9765ZM20 20V10.8887C20 10.3364 19.5523 9.8887 19 9.8887C18.4477 9.8887 18 10.3364 18 10.8887V19H6V5H12C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3H5C4.44772 3 4 3.44772 4 4V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Edit;
  