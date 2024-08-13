
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const ChevronBack = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 19.0001C13.7348 19.0004 13.4803 18.895 13.293 18.7071L7.29304 12.7071C7.10542 12.5197 7 12.2653 7 12.0001C7 11.7349 7.10542 11.4806 7.29304 11.2931L13.293 5.29311C13.5441 5.03315 13.9159 4.92889 14.2655 5.02041C14.6152 5.11192 14.8882 5.38497 14.9797 5.7346C15.0712 6.08423 14.967 6.45603 14.707 6.70711L9.41413 12.0001L14.707 17.2931C14.9929 17.5791 15.0785 18.0091 14.9237 18.3828C14.769 18.7564 14.4044 19.0001 14 19.0001Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default ChevronBack;
  