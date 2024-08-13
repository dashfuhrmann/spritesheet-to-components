
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const ChevronForward = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99986 18.9999C9.59542 18.9999 9.23089 18.7562 9.07614 18.3826C8.9214 18.009 9.00691 17.5789 9.29282 17.2929L14.5858 11.9999L9.29282 6.70692C8.91385 6.31454 8.91927 5.69083 9.305 5.3051C9.69074 4.91937 10.3145 4.91395 10.7069 5.29292L16.7069 11.2929C16.8945 11.4804 16.9999 11.7347 16.9999 11.9999C16.9999 12.2651 16.8945 12.5195 16.7069 12.7069L10.7069 18.7069C10.5196 18.8948 10.2651 19.0002 9.99986 18.9999Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default ChevronForward;
  