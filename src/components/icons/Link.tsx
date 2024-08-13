
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Link = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 16H16C15.4477 16 15 15.5523 15 15C15 14.4477 15.4477 14 16 14H17.5C18.8807 14 20 12.8807 20 11.5C20 10.1193 18.8807 9 17.5 9H13.5C12.12 9.00165 11.0017 10.12 11 11.5C11 12.0523 10.5523 12.5 10 12.5C9.44772 12.5 9 12.0523 9 11.5C9.00276 9.01586 11.0159 7.00276 13.5 7H17.5C19.9853 7 22 9.01472 22 11.5C22 13.9853 19.9853 16 17.5 16ZM15 11.5C15 10.9477 14.5523 10.5 14 10.5C13.4477 10.5 13 10.9477 13 11.5C12.9983 12.88 11.88 13.9983 10.5 14H6.5C5.11929 14 4 12.8807 4 11.5C4 10.1193 5.11929 9 6.5 9H8C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7H6.5C4.01472 7 2 9.01472 2 11.5C2 13.9853 4.01472 16 6.5 16H10.5C12.9841 15.9972 14.9972 13.9841 15 11.5Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Link;
  