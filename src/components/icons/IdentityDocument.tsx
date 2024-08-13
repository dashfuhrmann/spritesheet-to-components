
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const IdentityDocument = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M22 4H2C1.44772 4 1 4.44772 1 5V19C1 19.5523 1.44772 20 2 20H22C22.5523 20 23 19.5523 23 19V5C23 4.44772 22.5523 4 22 4ZM5.07 18C5.49358 16.8014 6.72875 16 8 16C9.27125 16 10.5064 16.8014 10.93 18H5.07ZM21 18H13C12.5246 15.6719 10.3766 13.9999 8.0005 13.9999C5.62438 13.9999 3.47538 15.6719 3 18V6H21V18ZM8 13C9.65685 13 11 11.6569 11 10C11 8.34315 9.65685 7 8 7C6.34315 7 5 8.34315 5 10C5.00182 11.6561 6.3439 12.9982 8 13ZM8 9C8.55228 9 9 9.44772 9 10C9 10.5523 8.55228 11 8 11C7.44772 11 7 10.5523 7 10C7.0005 9.44792 7.44792 9.0005 8 9ZM13 10C13 9.44772 13.4477 9 14 9H18C18.5523 9 19 9.44772 19 10C19 10.5523 18.5523 11 18 11H14C13.4477 11 13 10.5523 13 10ZM13 13C13 12.4477 13.4477 12 14 12H18C18.5523 12 19 12.4477 19 13C19 13.5523 18.5523 14 18 14H14C13.4477 14 13 13.5523 13 13Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default IdentityDocument;
  