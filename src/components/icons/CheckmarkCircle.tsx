
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const CheckmarkCircle = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.0005 12.0006C22.0005 7.95587 19.5645 4.30937 15.8274 2.76147C12.0904 1.21367 7.78967 2.06927 4.92947 4.92947C2.06927 7.78977 1.21367 12.0904 2.76147 15.8275C4.30937 19.5645 7.95587 22.0005 12.0006 22.0005C17.5231 22.0005 22.0005 17.5231 22.0005 12.0006ZM10.0005 14.1721L7.70757 11.8792C7.31727 11.4889 6.68357 11.4889 6.29337 11.8792C5.90307 12.2694 5.90307 12.9031 6.29337 13.2934L10.0005 17.0005L17.676 9.32497C18.0837 8.91727 18.1 8.27157 17.7124 7.88397C17.3195 7.49107 16.665 7.50757 16.2517 7.92077L10.0005 14.1721Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default CheckmarkCircle;
  