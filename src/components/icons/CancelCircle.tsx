
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const CancelCircle = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.0005 12.0006C22.0005 7.95587 19.5645 4.30937 15.8274 2.76147C12.0904 1.21367 7.78967 2.06927 4.92947 4.92947C2.06927 7.78977 1.21367 12.0904 2.76147 15.8275C4.30937 19.5645 7.95587 22.0005 12.0006 22.0005C17.5231 22.0005 22.0005 17.5231 22.0005 12.0006ZM12.0005 10.5863L8.46487 7.05077C8.07467 6.66047 7.44097 6.66047 7.05067 7.05077C6.66047 7.44097 6.66047 8.07467 7.05067 8.46497L10.5863 12.0005L7.05067 15.536C6.66047 15.9263 6.66047 16.56 7.05067 16.9503C7.44097 17.3405 8.07467 17.3405 8.46487 16.9503L12.0005 13.4147L15.536 16.9503C15.9263 17.3405 16.56 17.3405 16.9502 16.9503C17.3405 16.56 17.3405 15.9263 16.9502 15.536L13.4147 12.0005L16.9502 8.46497C17.3405 8.07467 17.3405 7.44097 16.9502 7.05077C16.56 6.66047 15.9263 6.66047 15.536 7.05077L12.0005 10.5863Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default CancelCircle;
  