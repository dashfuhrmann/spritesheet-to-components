
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const ChevronDown = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0004 16.9999C11.7352 17.0002 11.4807 16.8948 11.2934 16.7069L5.29341 10.7069C4.91444 10.3145 4.91986 9.69083 5.30559 9.3051C5.69132 8.91937 6.31503 8.91395 6.70741 9.29292L12.0004 14.5858L17.2934 9.29292C17.6858 8.91395 18.3095 8.91937 18.6952 9.3051C19.081 9.69083 19.0864 10.3145 18.7074 10.7069L12.7074 16.7069C12.5201 16.8948 12.2657 17.0002 12.0004 16.9999Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default ChevronDown;
  