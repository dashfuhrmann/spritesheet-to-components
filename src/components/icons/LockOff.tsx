
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const LockOff = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18 10H16.8311V7C16.8278 4.23992 14.5912 2.00325 11.8311 2C9.77344 2.04037 7.93742 3.30207 7.1621 5.2085C6.96978 5.71882 7.22182 6.28913 7.72865 6.49049C8.23548 6.69184 8.81018 6.44997 9.0205 5.9468C9.49447 4.8028 10.5935 4.04154 11.8311 4C13.4872 4.00182 14.8293 5.3439 14.8311 7V10H6C5.44772 10 5 10.4477 5 11V21C5 21.5523 5.44772 22 6 22H18C18.5523 22 19 21.5523 19 21V11C19 10.4477 18.5523 10 18 10ZM17 20H7V12H17V20Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default LockOff;
  