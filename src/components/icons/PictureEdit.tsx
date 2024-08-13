
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const PictureEdit = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21 10C20.4477 10 20 10.4477 20 11V16.5859L16.707 13.293C16.5196 13.1054 16.2652 13 16 13C15.7348 13 15.4804 13.1054 15.293 13.293L12.5 16.0859L7.707 11.293C7.51955 11.1054 7.26521 11 7 11C6.73479 11 6.48045 11.1054 6.293 11.293L4 13.5859V6.00003H12C12.5523 6.00003 13 5.55232 13 5.00003C13 4.44775 12.5523 4.00003 12 4.00003H3C2.44772 4.00003 2 4.44775 2 5.00003V19C2 19.5523 2.44772 20 3 20H21C21.5523 20 22 19.5523 22 19V11C22 10.4477 21.5523 10 21 10ZM16 15.4141L18.5859 18H14.4141L13.9141 17.5L16 15.4141ZM4 16.4141L7 13.4141L11.5859 18H4V16.4141ZM12 13C11.6922 13 11.4015 12.8581 11.2121 12.6155C11.0226 12.3728 10.9554 12.0565 11.03 11.7578L12.03 7.75783C12.0738 7.58185 12.1648 7.42115 12.2932 7.29303L18.2932 1.29303C18.4806 1.10542 18.735 1 19.0002 1C19.2654 1 19.5197 1.10542 19.7072 1.29303L22.7072 4.29303C22.8948 4.48048 23.0002 4.73482 23.0002 5.00003C23.0002 5.26525 22.8948 5.51958 22.7072 5.70703L16.7072 11.707C16.5791 11.8351 16.4186 11.9259 16.2429 11.9697L12.2429 12.9697C12.1635 12.9899 12.0819 13 12 13ZM13.9028 8.51173L13.3745 10.626L15.4888 10.0967L20.5859 5.00003L19 3.41413L13.9028 8.51173ZM8.5 10C7.67157 10 7 9.32846 7 8.50003C7 7.67161 7.67157 7.00003 8.5 7.00003C9.32843 7.00003 10 7.67161 10 8.50003C9.99906 9.32807 9.32804 9.9991 8.5 10Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default PictureEdit;
  