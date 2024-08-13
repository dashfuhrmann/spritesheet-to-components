
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const ArrowBack = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12.0001C22 12.5524 21.5523 13.0001 21 13.0001H5.41414L9.70704 17.2931C9.96699 17.5442 10.0712 17.916 9.97973 18.2656C9.88822 18.6152 9.61517 18.8883 9.26554 18.9798C8.91591 19.0713 8.54411 18.9671 8.29304 18.7071L2.29304 12.7071C2.10542 12.5197 2 12.2653 2 12.0001C2 11.7349 2.10542 11.4806 2.29304 11.2931L8.29304 5.29311C8.54411 5.03315 8.91591 4.92889 9.26554 5.02041C9.61517 5.11192 9.88822 5.38497 9.97973 5.7346C10.0712 6.08423 9.96699 6.45603 9.70704 6.70711L5.41414 11.0001H21C21.5523 11.0001 22 11.4478 22 12.0001Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default ArrowBack;
  