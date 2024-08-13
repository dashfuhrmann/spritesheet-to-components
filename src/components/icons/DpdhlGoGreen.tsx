
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const DpdhlGoGreen = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8189 5.36121C17.4788 5.47026 14.415 7.24435 12.6577 10.087C10.9004 12.9297 10.683 16.4634 12.0786 19.5L17.3044 10.4486C17.3931 10.2926 17.5585 10.1961 17.7379 10.1957C17.9174 10.1953 18.0832 10.2911 18.1726 10.4467C18.262 10.6023 18.2611 10.7938 18.1704 10.9486L12.9446 20C16.2722 19.6903 19.2237 17.7351 20.8069 14.792C22.39 11.8488 22.3946 8.30843 20.8189 5.36121ZM5.07833 13.129C4.932 12.8949 5.00316 12.5865 5.23726 12.4401C5.47137 12.2938 5.77978 12.365 5.92611 12.5991L10.0023 19.1163C10.7272 15.021 8.81295 10.9097 5.21216 8.82849C4.30079 8.30342 3.3114 7.92729 2.28138 7.71432C1.03238 12.884 4.05175 18.1261 9.15024 19.6398L5.07833 13.129Z" fill="#007C39"/>
  ` }}
  />
  )
};

export default DpdhlGoGreen;
  