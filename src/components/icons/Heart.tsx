
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Heart = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0157 12.2959L12.0121 18.0959L6.00856 12.2959C4.67777 10.9659 4.67777 8.81591 6.00856 7.49591C7.35937 6.21591 9.47063 6.21591 10.8214 7.49591L11.2917 7.96591L11.3117 7.98591C11.5018 8.17591 11.752 8.27591 12.0221 8.27591C12.2923 8.27591 12.5425 8.16591 12.7326 7.98591L13.2229 7.49591C14.5737 6.21591 16.6849 6.21591 18.0357 7.49591C19.3665 8.82591 19.3665 10.9759 18.0357 12.2959H18.0157ZM19.4266 6.08591C17.3954 4.06591 14.1434 3.97591 12.0021 5.87591C9.82084 3.92591 6.48885 4.06591 4.47765 6.18591C2.46645 8.30591 2.51648 11.6359 4.57771 13.7059L11.2917 20.2059C11.6819 20.5959 12.3123 20.5959 12.7026 20.2059L19.4166 13.7059C21.5278 11.5959 21.5278 8.18591 19.4166 6.07591L19.4266 6.08591Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Heart;
  