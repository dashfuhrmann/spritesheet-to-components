
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Pause = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 18C8.44772 18 8 17.5523 8 17V7C8 6.44772 8.44772 6 9 6C9.55228 6 10 6.44772 10 7V17C10 17.5523 9.55228 18 9 18ZM16 17V7C16 6.44772 15.5523 6 15 6C14.4477 6 14 6.44772 14 7V17C14 17.5523 14.4477 18 15 18C15.5523 18 16 17.5523 16 17Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Pause;
  