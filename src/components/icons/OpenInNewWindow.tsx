
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const OpenInNewWindow = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19 11.9931V20C19 20.5523 18.5523 21 18 21H4C3.4477 21 3 20.5523 3 20V6C3 5.4477 3.4477 5 4 5H12.0069C12.5554 5 13 5.4446 13 5.9931C13 5.9977 13 6.0023 13 6.0069C13 6.5554 12.5554 7 12.0069 7C10.0753 7 5 7 5 7V19H17V11.9931C17 11.4446 17.4446 11 17.9931 11H18.0069C18.5554 11 19 11.4446 19 11.9931ZM21 4.0015V8.0077C21 8.5608 20.5516 9.0092 19.9985 9.0092C19.4453 9.0092 18.9969 8.5608 18.9969 8.0077V6.4194L11 14.4161C10.607 14.7957 9.9824 14.7902 9.596 14.4039C9.2097 14.0176 9.2043 13.3929 9.5838 12.9999L17.5806 5.0031H15.9923C15.4392 5.0031 14.9908 4.5547 14.9908 4.0015C14.9908 3.4484 15.4392 3 15.9923 3H19.9985C20.5516 3 21 3.4484 21 4.0015Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default OpenInNewWindow;
  