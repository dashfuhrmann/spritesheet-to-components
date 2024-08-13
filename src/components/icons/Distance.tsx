
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Distance = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.707 12.7069L18.707 15.7069C18.3147 16.0859 17.691 16.0805 17.3052 15.6947C16.9195 15.309 16.9141 14.6853 17.293 14.2929L18.5859 12.9999H5.41414L6.70704 14.2929C6.96699 14.544 7.07125 14.9158 6.97973 15.2654C6.88822 15.6151 6.61517 15.8881 6.26554 15.9796C5.91591 16.0711 5.54411 15.9669 5.29304 15.7069L2.29304 12.7069C2.10542 12.5195 2 12.2651 2 11.9999C2 11.7347 2.10542 11.4804 2.29304 11.2929L5.29304 8.29292C5.68541 7.91395 6.30912 7.91937 6.69485 8.3051C7.08059 8.69083 7.08601 9.31454 6.70704 9.70692L5.41414 10.9999H18.5859L17.293 9.70692C16.9141 9.31454 16.9195 8.69083 17.3052 8.3051C17.691 7.91937 18.3147 7.91395 18.707 8.29292L21.707 11.2929C21.8947 11.4804 22.0001 11.7347 22.0001 11.9999C22.0001 12.2651 21.8947 12.5195 21.707 12.7069Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Distance;
  