
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Stop = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.70988 19H19.2899L11.9999 6.01L4.70988 19ZM20.9999 21H2.99988C2.63988 21 2.31988 20.81 2.13988 20.5C1.95988 20.19 1.95988 19.81 2.13988 19.5L11.1299 3.47C11.3199 3.17 11.6499 3 11.9999 3C12.3499 3 12.6799 3.18 12.8699 3.47L21.8699 19.5C22.0399 19.81 22.0399 20.19 21.8699 20.5C21.6899 20.81 21.3599 21 21.0099 21H20.9999ZM11.2699 15L11.0399 9.99H12.9699L12.6799 15H11.2699ZM11.9999 18C11.7199 18 11.4399 17.91 11.2199 17.73C11.0199 17.54 10.8999 17.28 10.8999 17C10.8999 16.72 11.0199 16.46 11.2199 16.27C11.6699 15.9 12.3199 15.9 12.7799 16.27C12.9799 16.46 13.0899 16.72 13.0899 17C13.0899 17.28 12.9799 17.54 12.7799 17.73C12.5599 17.91 12.2799 18.01 11.9999 18Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Stop;
  