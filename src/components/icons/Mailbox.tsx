
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Mailbox = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20 20H4.00005C3.47541 20 3.03995 19.5946 3.00255 19.0713L2.00255 5.0713C1.98275 4.7944 2.07896 4.52172 2.26814 4.31855C2.45731 4.11538 2.72244 4 3.00005 4H21C21.2777 4 21.5428 4.11538 21.732 4.31855C21.9211 4.52172 22.0173 4.7944 21.9975 5.0713L20.9975 19.0713C20.9601 19.5946 20.5247 20 20 20ZM4.93125 18H19.0688L19.9257 6H4.07435L4.93125 18ZM18 9C18 8.44772 17.5523 8 17 8H7.00005C6.44776 8 6.00005 8.44772 6.00005 9C6.00005 9.55228 6.44776 10 7.00005 10H17C17.5523 10 18 9.55228 18 9ZM12 15C11.1716 15 10.5 14.3284 10.5 13.5C10.5 12.6716 11.1716 12 12 12C12.8285 12 13.5 12.6716 13.5 13.5C13.4991 14.328 12.8281 14.9991 12 15Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Mailbox;
  