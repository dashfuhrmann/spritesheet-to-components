
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const InsurancePoBe = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.004 13H4C3.45 13 3 12.55 3 12V11.13C3 6.774 6.522 3.169 11.041 2.718C11.163 2.304 11.548 2 12 2C12.452 2 12.836 2.304 12.959 2.718C17.478 3.168 21 6.764 21 11.13V12C21 12.55 20.55 13 20 13H13V19.27C12.99 20.77 11.64 22 10 22C8.33 21.99 7.02 20.79 7 19.28V19C7 18.45 7.45 18 8 18C8.55 18 9 18.45 9 19C9 19.099 9.01 19.205 9.01 19.3C9.04 19.83 9.45 20.25 10 20.25C10.55 20.25 11 19.8 11 19.25C11 17.167 11.015 15.083 11.004 13ZM12 4.67C8.18 4.67 5.08 7.5 5 11H19C18.92 7.5 15.82 4.67 12 4.67Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default InsurancePoBe;
  