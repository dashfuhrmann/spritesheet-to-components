
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const FeatureWeight = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path d="M17.94 10H16L16 8C16.55 8 17 7.55 17 6.98751L17 2.9995C17 2.44978 16.49 2 16 2H8.00002C7.45002 2 7.00002 2.44978 7.00002 2.9995L7.00003 6.9975C7.00003 7.54723 7.45003 8 8.00003 8L7.99997 10H6C5.59 10 5 10.4458 5 10.9955V21.0005C5 21.5502 5.45 22 6 22H18C18.55 22 19 21.5502 19 21.0005V10.9955C19 10.4458 18.49 10 17.94 10ZM9.00002 3.999H15V5.998H9.00003L9.00002 3.999ZM9.99999 8H14L14 10H9.99999V8ZM17 20H7V12H17V20Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default FeatureWeight;
  