
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Helpline = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19 12V10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10V12C3.3432 12.0042 2.00181 13.3475 2 15.0043V17.9955C2.00176 19.6541 3.34583 20.9982 5.0044 21H6.4087C7.28712 20.999 7.99895 20.2871 8 19.4087V13.5913C7.9992 12.9411 7.60343 12.3566 7 12.1144V10C7 7.23858 9.23858 5 12 5C14.7614 5 17 7.23858 17 10V12.1144C16.3966 12.3566 16.0008 12.9411 16 13.5913V19.4087C16.001 20.2871 16.7129 20.999 17.5913 21H18.9956C20.6541 20.9982 21.9982 19.6541 22 17.9956V15.0044C21.9982 13.3476 20.6568 12.0042 19 12ZM6 19H5.0044C4.44998 18.9993 4.00072 18.55 4 17.9956V15.0044C4.00072 14.45 4.44998 14.0007 5.0044 14H6V19ZM20 17.9956C19.9993 18.55 19.55 18.9993 18.9956 19H18V14H18.9956C19.55 14.0007 19.9993 14.45 20 15.0044V17.9956Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Helpline;
  