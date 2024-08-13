
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const AutoRoute = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 13C7 12.4477 7.44772 12 8 12H16C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14H8C7.44772 14 7 13.5523 7 13ZM22 10V19C22 19.5523 21.5523 20 21 20H17C16.4477 20 16 19.5523 16 19V17H8V19C8 19.5523 7.55228 20 7 20H3C2.44772 20 2 19.5523 2 19V10C2 9.44772 2.44772 9 3 9H3.3226L5.0713 4.6284C5.22351 4.24895 5.59116 4.00018 6 4H18C18.4088 4.00018 18.7765 4.24895 18.9287 4.6284L20.6774 9H21C21.5523 9 22 9.44772 22 10ZM5.4773 9H18.5227L17.3227 6H6.6772L5.4773 9ZM6 17H4V18H6V17ZM20 17H18V18H20V17ZM20 11H4V15H20V11Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default AutoRoute;
  