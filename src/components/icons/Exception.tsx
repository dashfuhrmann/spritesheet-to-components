
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Exception = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C19.9949 7.58382 16.4162 4.00507 12 4ZM12 17.6084C11.6149 17.6191 11.2392 17.4881 10.9443 17.2402C10.6685 16.9857 10.5117 16.6275 10.5117 16.2522C10.5117 15.8769 10.6685 15.5187 10.9443 15.2642C11.5621 14.763 12.4465 14.763 13.0643 15.2642C13.3349 15.5216 13.4881 15.8787 13.4881 16.2522C13.4881 16.6257 13.3349 16.9828 13.0643 17.2402C12.7674 17.4905 12.3881 17.6217 12 17.6084ZM11.0557 13.9443L10.729 7H13.2867L12.9446 13.9443H11.0557Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Exception;
  