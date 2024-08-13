
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const RedoArrow = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5833 10.0004L14.2875 6.70699C13.8967 6.31649 13.8967 5.68339 14.2875 5.29287C14.6783 4.90237 15.3119 4.90237 15.7027 5.29287C15.7027 5.29287 19.1778 8.76498 20.7068 10.2927C20.8945 10.4802 21 10.7346 21 10.9998C21 11.265 20.8946 11.5194 20.7069 11.7069C19.1779 13.2348 15.7027 16.7074 15.7027 16.7074C15.3119 17.0979 14.6783 17.0979 14.2875 16.7074C13.8967 16.3169 13.8967 15.6837 14.2875 15.2932L17.5827 12.0004L10.005 11.9973C7.2429 12.0005 5.0046 14.2371 5.0014 16.9971C5.0014 16.9971 5.0014 16.6748 5.0014 19C5.0014 19.5523 4.5534 20 4.0007 20C3.448 20 3 19.5523 3 19V16.9971C3.0044 13.1331 6.1381 10.0017 10.005 9.99737L17.5832 10.0005L17.5833 10.0004Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default RedoArrow;
  