
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const RotateAgainst = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0171 5C16.8728 5.0125 19.9988 8.1443 19.9988 12C19.9988 15.8634 16.8603 19 12.9945 19C12.4423 19 11.9939 19.4481 11.9939 20C11.9939 20.5519 12.4423 21 12.9945 21C17.9647 21 22 16.9672 22 12C22 7.0328 17.9647 3 12.9945 3H12.9654C8.14397 3.0157 4.20998 6.8251 3.99805 11.5946L3.69577 11.2926C3.30313 10.9136 2.67905 10.9191 2.29312 11.3048C1.90708 11.6905 1.90168 12.3142 2.28091 12.7066H2.28051L4.28173 14.7066C4.46934 14.8942 4.72379 14.9996 4.98916 14.9996C5.25452 14.9996 5.50897 14.8942 5.69659 14.7066L7.6978 12.7066C8.07703 12.3142 8.07163 11.6905 7.6856 11.3048C7.29966 10.9191 6.67558 10.9136 6.28294 11.2926L6.00587 11.5694C6.00637 11.5617 6.00597 11.554 6.00477 11.5464C6.23872 7.8943 9.28107 5 12.9945 5H13.0171Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default RotateAgainst;
  