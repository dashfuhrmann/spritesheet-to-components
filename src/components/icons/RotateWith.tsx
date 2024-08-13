
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const RotateWith = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9829 5C7.12724 5.0125 4.00123 8.1443 4.00123 12C4.00123 15.8634 7.13975 19 11.0055 19C11.5578 19 12.0061 19.4481 12.0061 20C12.0061 20.5519 11.5578 21 11.0055 21C6.03527 21 2 16.9672 2 12C2 7.0328 6.03527 3 11.0055 3H11.0346C15.8561 3.0157 19.7901 6.8251 20.002 11.5946L20.3042 11.2926C20.6969 10.9136 21.3209 10.9191 21.7069 11.3048C22.0929 11.6905 22.0983 12.3142 21.7191 12.7066H21.7195L19.7183 14.7066C19.5306 14.8942 19.2762 14.9996 19.0108 14.9996C18.7455 14.9996 18.491 14.8942 18.3034 14.7066L16.3022 12.7066C15.9229 12.3142 15.9283 11.6905 16.3144 11.3048C16.7003 10.9191 17.3244 10.9136 17.717 11.2926L17.9941 11.5694C17.9937 11.5617 17.9941 11.554 17.9953 11.5464C17.7614 7.8943 14.719 5 11.0055 5H10.9829Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default RotateWith;
  