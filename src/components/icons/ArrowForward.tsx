
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const ArrowForward = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.707 12.7069L15.707 18.7069C15.3146 19.0859 14.6909 19.0805 14.3052 18.6947C13.9194 18.309 13.914 17.6853 14.293 17.2929L18.5859 12.9999H3C2.44772 12.9999 2 12.5522 2 11.9999C2 11.4476 2.44772 10.9999 3 10.9999H18.5859L14.293 6.70692C13.914 6.31454 13.9194 5.69083 14.3052 5.3051C14.6909 4.91937 15.3146 4.91395 15.707 5.29292L21.707 11.2929C21.8946 11.4804 22 11.7347 22 11.9999C22 12.2651 21.8946 12.5195 21.707 12.7069Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default ArrowForward;
  