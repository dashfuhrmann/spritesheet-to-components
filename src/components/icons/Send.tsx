
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Send = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4478 11.1054L4.44783 3.10539C4.0799 2.92113 3.63666 2.98106 3.33088 3.25642C3.02509 3.53177 2.9192 3.96633 3.06403 4.35149L5.93263 11.9999L3.06403 19.6483C2.9192 20.0334 3.02509 20.468 3.33088 20.7434C3.63666 21.0187 4.0799 21.0786 4.44783 20.8944L20.4478 12.8944C20.7867 12.725 21.0008 12.3787 21.0008 11.9999C21.0008 11.6211 20.7867 11.2747 20.4478 11.1054ZM5.83113 17.9667L7.69393 12.9999H11.0005C11.5528 12.9999 12.0005 12.5522 12.0005 11.9999C12.0005 11.4476 11.5528 10.9999 11.0005 10.9999H7.69393L5.83113 6.03309L17.7647 11.9999L5.83113 17.9667Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Send;
  