
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Glossary = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path d="M19.1111 2C20.1313 2 20.9215 2.83442 20.9945 3.84688L21 4V20C21 21.0286 20.2583 21.912 19.2623 21.9938L19.1111 22H4.88889C3.86874 22 3.07845 21.1656 3.0055 20.1531L3 20V4C3 2.97138 3.74171 2.08798 4.73765 2.00618L4.88889 2H19.1111ZM19 4H5V20H19V4ZM7 5C7.55228 5 8 5.44772 8 6V18C8 18.5523 7.55228 19 7 19C6.44772 19 6 18.5523 6 18V6C6 5.44772 6.44772 5 7 5ZM17.688 12.72V13.8L15.704 16.872H17.776V18H14.128V16.92L16.12 13.848H14.224V12.72H17.688ZM12.432 6L13.752 11.28H12.28L12.064 10.248H10.64L10.424 11.28H9.048L10.368 6H12.432ZM11.448 7.264H11.264L10.872 9.128H11.832L11.448 7.264Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Glossary;
  