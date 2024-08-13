
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Home = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20 21H15C14.4477 21 14 20.5523 14 20V17C14 15.8954 13.1046 15 12 15C10.8954 15 10 15.8954 10 17V20C10 20.5523 9.55228 21 9 21H4C3.44772 21 3 20.5523 3 20V12C3 11.7348 3.10545 11.4805 3.293 11.293L11.293 3.29303C11.4804 3.10541 11.7348 3 12 3C12.2652 3 12.5196 3.10541 12.707 3.29303L20.707 11.293C20.8946 11.4805 21 11.7348 21 12V20C21 20.5523 20.5523 21 20 21ZM16 19H19V12.4141L12 5.41413L5 12.4141V19H8V17C8 14.7909 9.79086 13 12 13C14.2091 13 16 14.7909 16 17V19Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Home;
  