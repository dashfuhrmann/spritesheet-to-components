
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Facebook = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.87055 12.89H6.81055V9.32H9.87055V6.7C9.87055 3.66 11.7306 2 14.4406 2C15.3606 2 16.2706 2.04 17.1806 2.14V5.32H15.3106C13.8306 5.32 13.5506 6.02 13.5506 7.05V9.32H17.0806L16.6206 12.89H13.5506V22H9.87055V12.89Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Facebook;
  