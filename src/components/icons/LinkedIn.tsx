
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const LinkedIn = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.26 18.0414H15.54V13.6639C15.54 12.5646 15.15 11.815 14.16 11.815C13.53 11.815 12.97 12.2148 12.77 12.8044C12.7 13.0143 12.67 13.2442 12.68 13.464V18.0314H9.96C9.96 18.0314 10 10.6257 9.96 9.8561H12.68V11.0154C13.18 10.1459 14.13 9.62623 15.13 9.66621C16.92 9.66621 18.26 10.8355 18.26 13.3441V18.0314V18.0414ZM7.1 8.74673H7.08C6.55 8.77671 6.05 8.50687 5.78 8.05712C5.51 7.59739 5.52 7.02771 5.8 6.57797C6.08 6.12822 6.59 5.87837 7.12 5.91834C7.65 5.87837 8.16 6.13822 8.44 6.59796C8.72 7.05769 8.71 7.62737 8.44 8.07711C8.16 8.52686 7.65 8.78671 7.12 8.73674L7.1 8.74673ZM8.46 18.0414H5.74V9.86609H8.46V18.0414ZM19.67 3.00001H4.33C3.6 3.00001 3.01 3.56968 3 4.29927V19.7005C3 20.4301 3.61 21.0097 4.33 20.9997H19.67C20.4 20.9997 20.99 20.4301 21 19.7005V4.29927C21 3.56968 20.4 2.99001 19.67 3.00001Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default LinkedIn;
  