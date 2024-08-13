
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const StarOn = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5231 21C17.3611 21 17.2011 20.96 17.0581 20.885L12.0001 18.219L6.94215 20.885C6.60515 21.062 6.19615 21.033 5.88815 20.808C5.58015 20.584 5.42615 20.203 5.49115 19.828L6.45615 14.186L2.30715 10.189C2.03115 9.923 1.93115 9.524 2.04815 9.16C2.16515 8.795 2.47915 8.529 2.85815 8.474L8.57415 7.649L11.1041 2.513C11.2901 2.195 11.6311 2 12.0001 2C12.3691 2 12.7101 2.195 12.8971 2.513L15.4261 7.649L21.1421 8.474C21.5211 8.529 21.8351 8.795 21.9521 9.16C22.0691 9.524 21.9691 9.923 21.6931 10.189L17.5441 14.186L18.5091 19.828C18.5591 20.119 18.4791 20.417 18.2891 20.643C18.0991 20.869 17.8191 21 17.5231 21Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default StarOn;
  