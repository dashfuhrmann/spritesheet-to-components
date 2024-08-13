
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const StorageService = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9998 21H4.99979C4.54087 20.9999 4.14093 20.6874 4.02978 20.2422L2.02979 12.2422C1.95523 11.9435 2.02238 11.6272 2.21184 11.3845C2.4013 11.1419 2.69195 11 2.99979 11H20.9998C21.3077 11 21.5983 11.1419 21.7878 11.3845C21.9772 11.6272 22.0444 11.9435 21.9698 12.2422L19.9698 20.2422C19.8587 20.6874 19.4587 20.9999 18.9998 21ZM5.78099 19H18.2186L19.7186 13H4.28088L5.78099 19ZM15.9998 15C15.9998 14.4477 15.5521 14 14.9998 14H8.99978C8.44749 14 7.99978 14.4477 7.99978 15C7.99978 15.5523 8.44749 16 8.99978 16H14.9998C15.5521 16 15.9998 15.5523 15.9998 15ZM18.9998 3H4.99979C4.4475 3 3.99979 3.44772 3.99979 4V9C3.99979 9.55228 4.4475 10 4.99979 10C5.55207 10 5.99979 9.55228 5.99979 9V5.9428L11.4187 9.8135C11.7662 10.0622 12.2334 10.0622 12.5809 9.8135L17.9998 5.9428V9C17.9998 9.55228 18.4475 10 18.9998 10C19.5521 10 19.9998 9.55228 19.9998 9V4C19.9998 3.44772 19.5521 3 18.9998 3ZM11.9998 7.7715L8.11979 5H15.8798L11.9998 7.7715Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default StorageService;
  