
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const UserLoggedIn = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path d="M19.7999 20.6C19.5999 20.8 19.2999 21 18.9999 21H4.99987C4.69987 21 4.39987 20.8 4.19987 20.6C3.99987 20.3 3.99987 20 4.09987 19.7C5.19987 16.3 8.39987 14 11.9999 14C15.5999 14 18.6999 16.3 19.8999 19.7C19.9999 20 19.9999 20.3 19.7999 20.6ZM11.9999 4C9.79986 4 7.99987 5.8 7.99987 8C7.99987 10.2 9.79986 12 11.9999 12C14.1999 12 15.9999 10.2 15.9999 8C15.9999 5.8 14.1999 4 11.9999 4Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default UserLoggedIn;
  