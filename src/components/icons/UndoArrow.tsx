
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const UndoArrow = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.4167 10.0004L9.7125 6.70699C10.1033 6.31649 10.1033 5.68339 9.7125 5.29287C9.3217 4.90237 8.6881 4.90237 8.2973 5.29287C8.2973 5.29287 4.8222 8.76498 3.2932 10.2927C3.1055 10.4802 3 10.7346 3 10.9998C3 11.265 3.1054 11.5194 3.2931 11.7069C4.8221 13.2348 8.2973 16.7074 8.2973 16.7074C8.6881 17.0979 9.3217 17.0979 9.7125 16.7074C10.1033 16.3169 10.1033 15.6837 9.7125 15.2932L6.4173 12.0004L13.995 11.9973C16.7571 12.0005 18.9954 14.2371 18.9986 16.9971C18.9986 16.9971 18.9986 16.6748 18.9986 19C18.9986 19.5523 19.4466 20 19.9993 20C20.552 20 21 19.5523 21 19V16.9971C20.9956 13.1331 17.8619 10.0017 13.995 9.99737L6.4168 10.0005L6.4167 10.0004Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default UndoArrow;
  