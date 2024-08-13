
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Password = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0006 11.0001H9.87396C9.37039 9.04974 7.49517 7.77813 5.49696 8.03193C3.49875 8.28574 2.00098 9.98578 2.00098 12.0001C2.00098 14.0143 3.49875 15.7144 5.49696 15.9682C7.49517 16.222 9.37039 14.9504 9.87396 13.0001H17.0006V15.0001C17.0006 15.5523 17.4483 16.0001 18.0006 16.0001C18.5529 16.0001 19.0006 15.5523 19.0006 15.0001V13.0001H20.0006V15.0001C20.0006 15.5523 20.4483 16.0001 21.0006 16.0001C21.5529 16.0001 22.0006 15.5523 22.0006 15.0001V12.0001C22.0006 11.4478 21.5529 11.0001 21.0006 11.0001ZM6.00056 14.0001C4.89599 14.0001 4.00056 13.1046 4.00056 12.0001C4.00056 10.8955 4.89599 10.0001 6.00056 10.0001C7.10513 10.0001 8.00056 10.8955 8.00056 12.0001C7.99946 13.1042 7.10467 13.9989 6.00056 14.0001Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Password;
  