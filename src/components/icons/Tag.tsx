
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Tag = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7351 2H14.4137C14.1485 2 13.8941 2.1054 13.7066 2.2929C12.183 3.8165 4.56148 11.438 2.29287 13.7066C1.90237 14.0971 1.90237 14.7303 2.29287 15.1208C3.80988 16.6378 7.36168 20.1896 8.87868 21.7066C9.26919 22.0971 9.90238 22.0971 10.2929 21.7066C12.5615 19.438 20.183 11.8165 21.7066 10.2929C21.8941 10.1054 21.9995 9.851 21.9995 9.5858C21.9995 8.1198 21.9995 3.2644 21.9995 3.2644C21.9995 2.5661 21.4334 2 20.7351 2ZM19.9995 4V9.1716L9.58578 19.5853L4.41418 14.4137L14.8279 4H19.9995ZM17.5599 8.5609C16.9741 9.1465 16.0244 9.1464 15.4387 8.5606C14.8531 7.9748 14.8531 7.0252 15.4387 6.4394C16.0244 5.8536 16.9741 5.8535 17.5599 6.4392C18.1457 7.0251 18.1457 7.9749 17.5599 8.5609Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Tag;
  