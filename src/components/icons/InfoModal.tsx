
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const InfoModal = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C19.9949 7.58382 16.4162 4.00507 12 4ZM12 8.99954C11.7418 9.00749 11.4897 8.9119 11.2906 8.73047C11.1054 8.54239 11 8.27741 11 7.99976C11 7.72211 11.1054 7.45714 11.2906 7.26905C11.7076 6.91031 12.2924 6.91031 12.7094 7.26905C12.8946 7.45714 13 7.72211 13 7.99976C13 8.27741 12.8946 8.54239 12.7094 8.73047C12.5103 8.9119 12.2582 9.00749 12 8.99954ZM11 16V11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default InfoModal;
  