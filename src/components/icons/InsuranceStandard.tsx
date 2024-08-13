
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const InsuranceStandard = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3357 21.75C11.7145 22.0868 12.2855 22.0868 12.6643 21.75C13.9232 20.6311 16.6868 18.1503 18.4395 16.5925C19.4321 15.7102 20 14.4455 20 13.1175C20 10.2342 20 5.1466 20 3C20 2.4478 19.5523 2 19 2C16.1273 2 7.8727 2 5 2C4.4477 2 4 2.4478 4 3C4 5.1466 4 10.2342 4 13.1175C4 14.4455 4.5679 15.7102 5.5606 16.5925C7.3132 18.1503 10.0768 20.6311 11.3357 21.75ZM6 4H18V13.1175C18 13.8742 17.6764 14.5949 17.1108 15.0976L12 19.6402L6.8892 15.0976C6.3236 14.5949 6 13.8742 6 13.1175V4ZM12 16.948L8.3096 13.5897C8.1124 13.4102 8 13.156 8 12.8894V6H16V12.8894C16 13.156 15.8876 13.4102 15.6905 13.5896L12 16.948Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default InsuranceStandard;
  