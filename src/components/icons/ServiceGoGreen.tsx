
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const ServiceGoGreen = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20 18V10.5342C20 10.2561 20.224 10.0304 20.5 10.0304C20.776 10.0304 21 10.2561 21 10.5342V18C22.9476 16.5868 24.0698 14.3271 23.9966 11.948C23.9219 9.517 22.6093 7.2841 20.5 6C18.3907 7.2841 17.0781 9.517 17.0034 11.948C16.9303 14.3272 18.0524 16.5868 20 18Z" fill="#007C39"/>
  ` }}
  />
  )
};

export default ServiceGoGreen;
  