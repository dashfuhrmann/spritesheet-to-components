
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Upload = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20 21.0001H4C3.44772 21.0001 3 20.5524 3 20.0001C3 19.4478 3.44772 19.0001 4 19.0001H20C20.5523 19.0001 21 19.4478 21 20.0001C21 20.5524 20.5523 21.0001 20 21.0001ZM17.707 8.29303L12.707 3.29303C12.5196 3.10542 12.2652 3 12 3C11.7348 3 11.4804 3.10542 11.293 3.29303L6.293 8.29303C5.91403 8.68541 5.91945 9.30912 6.30518 9.69485C6.69092 10.0806 7.31462 10.086 7.707 9.70703L11 6.41413V16.0001C11 16.5524 11.4477 17.0001 12 17.0001C12.5523 17.0001 13 16.5524 13 16.0001V6.41413L16.293 9.70703C16.6854 10.086 17.3091 10.0806 17.6948 9.69485C18.0806 9.30912 18.086 8.68541 17.707 8.29303Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Upload;
  