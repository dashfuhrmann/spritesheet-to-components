
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const UserLoggedOut = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.9551 20.2969C6.7299 17.8051 9.1501 16 12.0002 16C14.8502 16 17.2705 17.8051 18.0453 20.2969C18.2092 20.8239 18.7701 21.1188 19.2971 20.9549C19.8241 20.791 20.119 20.2301 19.9551 19.7031C18.9325 16.4145 15.7615 14 12.0002 14C8.2389 14 5.0678 16.4145 4.0453 19.7031C3.8814 20.2301 4.1763 20.791 4.7033 20.9549C5.2303 21.1188 5.7912 20.8239 5.9551 20.2969ZM12.0002 12C9.7911 12 8.0002 10.2091 8.0002 8C8.0002 5.7909 9.7911 4 12.0002 4C14.2093 4 16.0002 5.7909 16.0002 8C15.9978 10.2081 14.2084 11.9975 12.0002 12ZM11.999 10C10.895 9.9994 10.0002 9.1042 10.0002 8C10.0002 6.8954 10.8956 6 12.0002 6C13.1044 6 13.9996 6.8948 14.0002 7.9989C13.9984 9.1033 13.1035 9.9981 11.9991 10H11.999Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default UserLoggedOut;
  