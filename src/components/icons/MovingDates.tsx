
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const MovingDates = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.707 10.707C18.5195 10.8946 18.2652 11 18 11C17.7348 11 17.4805 10.8946 17.293 10.707L11 4.41414L4 11.4141V18H6C6.55229 18 7 18.4477 7 19C7 19.5523 6.55229 20 6 20H3C2.44772 20 2 19.5523 2 19V11C1.99969 10.7348 2.10514 10.4803 2.293 10.293L10.293 2.29304C10.4805 2.10542 10.7348 2 11 2C11.2652 2 11.5196 2.10542 11.707 2.29304L18.707 9.29304C18.8946 9.48049 19 9.73482 19 10C19 10.2652 18.8946 10.5196 18.707 10.707ZM22 13V21C22 21.5523 21.5523 22 21 22H9C8.44772 22 8 21.5523 8 21V13C8 12.4478 8.44772 12 9 12H21C21.5523 12 22 12.4478 22 13ZM12.303 14L15 15.7979L17.697 14H12.303ZM20 20V14.8685L15.5547 17.832C15.2188 18.056 14.7812 18.056 14.4453 17.832L10 14.8685V20H20Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default MovingDates;
  