
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Sort = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.706 17.7036C19.8826 18.5269 18.5292 19.8794 17.7051 20.7029C17.3145 21.0932 16.6813 21.0932 16.2907 20.7027C15.4672 19.8792 14.1146 18.5268 13.2913 17.7036C12.9011 17.3135 12.9011 16.6809 13.2913 16.2908C13.2917 16.2904 13.2921 16.29 13.2926 16.2896C13.48 16.1022 13.7341 15.997 13.9992 15.997C14.2642 15.997 14.5183 16.1023 14.7057 16.2896C15.2807 16.8647 15.9976 17.5815 15.9976 17.5815C15.9976 17.5815 15.9985 10.6393 15.9988 8.00234C15.9989 7.45014 16.4466 7.00244 16.9988 7.00244C16.9995 7.00244 17.0002 7.00244 17.0009 7.00244C17.2662 7.00244 17.5205 7.10784 17.7081 7.29544C17.8956 7.48294 18.001 7.73734 18.0009 8.00264C18.0006 10.6398 17.9997 17.5815 17.9997 17.5815C17.9997 17.5815 18.7166 16.8647 19.2916 16.2896C19.479 16.1023 19.7331 15.997 19.9981 15.997C20.2632 15.997 20.5173 16.1022 20.7047 16.2896C20.7052 16.29 20.7056 16.2904 20.706 16.2908C21.0962 16.6809 21.0962 17.3135 20.706 17.7036ZM3.29258 6.29204C4.11577 5.46874 5.46897 4.11614 6.29287 3.29274C6.68337 2.90234 7.31647 2.90244 7.70687 3.29294C8.53027 4.11644 9.88258 5.46874 10.7058 6.29204C11.0959 6.68214 11.0958 7.31464 10.7057 7.70474C10.7053 7.70524 10.7049 7.70564 10.7045 7.70604C10.5171 7.89334 10.263 7.99864 9.99798 7.99864C9.73308 7.99864 9.47898 7.89334 9.29158 7.70594C8.71668 7.13094 7.99998 6.41404 7.99998 6.41404C7.99998 6.41404 7.99908 13.3562 7.99878 15.9933C7.99868 16.5455 7.55098 16.9931 6.99878 16.9931H6.99708C6.73178 16.9931 6.47748 16.8878 6.28988 16.7002C6.10238 16.5126 5.99708 16.2582 5.99708 15.993C5.99738 13.3558 5.99827 6.41404 5.99827 6.41404C5.99827 6.41404 5.28158 7.13094 4.70668 7.70594C4.51938 7.89334 4.26528 7.99864 4.00028 7.99864C3.73528 7.99864 3.48118 7.89334 3.29378 7.70604C3.29338 7.70564 3.29298 7.70524 3.29258 7.70474C2.90247 7.31464 2.90247 6.68214 3.29258 6.29204Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Sort;
  