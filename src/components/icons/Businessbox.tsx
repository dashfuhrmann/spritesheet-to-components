
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Businessbox = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18 14H17C16.4477 14 16 13.5523 16 13C16 12.4477 16.4477 12 17 12H18C18.5523 12 19 12.4477 19 13C19 13.5523 18.5523 14 18 14ZM23 10V19C23 19.5523 22.5523 20 22 20H2C1.44772 20 1 19.5523 1 19V10C0.999718 9.77327 1.07684 9.55324 1.2186 9.3763L1.2192 9.3755L1.2236 9.37L1.2294 9.3627L5.2194 4.3754C5.4091 4.13822 5.6963 4 6 4H18C18.3038 4 18.5911 4.13823 18.7808 4.3755L22.7708 9.3628L22.7766 9.3701L22.781 9.3755L22.7816 9.3763C22.9233 9.55327 23.0003 9.7733 23 10ZM3 15H21V11H3V15ZM4.0806 9H19.9194L17.5194 6H6.4805L4.0806 9ZM21 18V17H3V18H21Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Businessbox;
  