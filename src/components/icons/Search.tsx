
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Search = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7068 19.293L14.7463 13.3324C16.7521 10.5879 16.3074 6.76195 13.7256 4.55064C11.1439 2.33932 7.29499 2.48784 4.8913 4.89154C2.4876 7.29523 2.33908 11.1441 4.5504 13.7258C6.76171 16.3076 10.5877 16.7523 13.3322 14.7465L19.2928 20.707C19.5439 20.967 19.9157 21.0712 20.2653 20.9797C20.6149 20.8882 20.888 20.6151 20.9795 20.2655C21.071 19.9159 20.9668 19.5441 20.7068 19.293ZM9.49977 14C7.67969 14 6.03882 12.9036 5.34231 11.2221C4.64579 9.54055 5.0308 7.60502 6.31779 6.31803C7.60478 5.03104 9.54031 4.64603 11.2219 5.34255C12.9034 6.03906 13.9998 7.67993 13.9998 9.50001C13.9971 11.9841 11.9839 13.9973 9.49977 14Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Search;
  