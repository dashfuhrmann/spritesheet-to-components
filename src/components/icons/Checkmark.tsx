
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Checkmark = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99983 15.5856L5.70693 11.2927C5.31663 10.9024 4.68304 10.9024 4.29272 11.2927C3.90242 11.6829 3.90242 12.3166 4.29272 12.7069L9.29273 17.7069C9.31713 17.7313 9.34243 17.7541 9.36863 17.7755C9.44922 17.8403 9.53842 17.8932 9.63473 17.9309C9.89092 18.0311 10.1839 18.0205 10.432 17.9017C10.5342 17.8528 10.6264 17.7864 10.7069 17.7069L19.7069 8.70694C20.0972 8.31664 20.0972 7.68292 19.7069 7.29272C19.3166 6.90242 18.683 6.90242 18.2927 7.29272L9.99983 15.5856Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Checkmark;
  