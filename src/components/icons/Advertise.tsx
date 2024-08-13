
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Advertise = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5658 3.2491C17.3019 2.88263 18.1755 2.92267 18.875 3.35495C19.5744 3.78712 20 4.54992 20 5.37133C20 8.39804 20 12.602 20 15.6287C20 16.4501 19.5744 17.2129 18.875 17.6451C18.1755 18.0773 17.3019 18.1174 16.5658 17.7509C15.0802 17.0114 13.4302 16.19 12.3152 15.635C11.5093 15.2337 11 14.4119 11 13.5127C11 11.8486 11 9.15125 11 7.48726C11 6.58807 11.5093 5.76626 12.3152 5.36504C13.4302 4.81004 15.0802 3.98863 16.5658 3.2491ZM17.4581 5.03936C17.5743 4.98146 17.7121 4.98776 17.8225 5.05606C17.9328 5.12436 18 5.24496 18 5.37466V15.647C18 15.7768 17.9328 15.8974 17.8225 15.9657C17.7121 16.034 17.5743 16.0403 17.4581 15.9824L13.2076 13.8634C13.0804 13.7999 13 13.6701 13 13.5281C13 13.528 13 7.49376 13 7.49376C13 7.35166 13.0804 7.22186 13.2075 7.15846C13.2076 7.15836 17.4581 5.03936 17.4581 5.03936ZM10 8.9794C10 7.8869 9.1131 7 8.0206 7H2.9794C1.8869 7 1 7.8869 1 8.9794V11.9381C1 13.0306 1.8869 13.9175 2.9794 13.9175H8.0206C9.1131 13.9175 10 13.0306 10 11.9381V8.9794ZM22 8C22.5523 8 23 8.44772 23 9V12C23 12.5523 22.5523 13 22 13C21.4477 13 21 12.5523 21 12V9C21 8.44772 21.4477 8 22 8ZM6 15C6.55228 15 7 15.4477 7 16V19C7 19.5523 6.55228 20 6 20C5.44772 20 5 19.5523 5 19V16C5 15.4477 5.44772 15 6 15ZM3 12H8V9H3V12Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Advertise;
  