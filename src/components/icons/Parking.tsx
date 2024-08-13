
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Parking = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3ZM5 5H19V19H5V5ZM8.78 16.62V7.38H12.3078C13.2593 7.32803 14.1993 7.60757 14.9678 8.171C15.6177 8.69083 15.9816 9.48885 15.9478 10.3204V10.6144C15.9821 11.4444 15.6211 12.2416 14.9746 12.7633C14.2046 13.329 13.2615 13.6087 12.3076 13.5543H10.894V16.62H8.78ZM12.3078 9.102H10.894V11.832H12.3076C12.7092 11.8574 13.1073 11.7438 13.4351 11.5103C13.7087 11.2782 13.8566 10.9304 13.834 10.5723V10.3623C13.8538 10.0067 13.7062 9.66221 13.4351 9.4312C13.1092 9.19319 12.7103 9.07675 12.3076 9.1021L12.3078 9.102Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Parking;
  