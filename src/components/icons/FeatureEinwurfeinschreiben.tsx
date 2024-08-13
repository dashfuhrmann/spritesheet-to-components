
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const FeatureEinwurfeinschreiben = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.958 16.08L2.004 4.08C2.001 4.053 2 4.026 2 4C1.999 3.479 2.401 3.044 2.921 3.003C2.947 3.001 2.973 3 3 3H19C19.279 3 19.546 3.117 19.735 3.322C19.925 3.527 20.019 3.802 19.997 4.081L19.512 10.092C19.467 10.642 18.984 11.052 18.434 11.008C17.884 10.964 17.473 10.48 17.518 9.931L17.916 5L4.082 4.999L4.879 15H6.378C6.93 15 7.377 15.448 7.377 16C7.378 16.552 6.93 17 6.377 17H3.955C3.434 17 3 16.599 2.958 16.08ZM12.293 21.707L9.288 18.702C8.898 18.312 8.898 17.679 9.288 17.288C9.679 16.898 10.312 16.898 10.702 17.288L13 19.586L20.293 12.293C20.683 11.903 21.317 11.903 21.707 12.293C22.097 12.683 22.097 13.317 21.707 13.707L13.707 21.707C13.317 22.098 12.683 22.097 12.293 21.707ZM16 8C16 8.553 15.628 9 15.166 9H6.834C6.373 8.999 6 8.552 6 8C6 7.448 6.373 7 6.834 7H15.166C15.626 7 16 7.448 16 8ZM11 13C10.448 13 10 12.553 10 12C10 11.448 10.448 11 11 11C11.553 11 12 11.448 12 12C11.999 12.552 11.552 12.999 11 13Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default FeatureEinwurfeinschreiben;
  