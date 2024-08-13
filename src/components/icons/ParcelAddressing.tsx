
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const ParcelAddressing = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path d="M9.9994 17C9.70047 16.9997 9.41736 16.8656 9.22765 16.6346C9.03795 16.4036 8.96156 16.0998 9.0194 15.8065L9.7167 12.2842C9.75506 12.0901 9.85018 11.9118 9.99 11.7719L18.47 3.29279C18.6573 3.10533 18.9115 3 19.1765 3C19.4416 3 19.6958 3.10533 19.8831 3.29279L22.7074 6.11639C22.8949 6.30372 23.0002 6.55788 23.0002 6.82289C23.0002 7.08791 22.8949 7.34206 22.7074 7.52939L14.2251 16.011C14.0851 16.1509 13.9068 16.2462 13.7127 16.2847L10.1936 16.981C10.1296 16.9936 10.0646 17 9.9994 17ZM11.6179 12.97L11.27 14.7307L13.0272 14.3833L20.588 6.82329L19.1764 5.41229L11.6179 12.97ZM23 20V11C23 10.4477 22.5523 9.99999 22 9.99999C21.4477 9.99999 21 10.4477 21 11V19H3V5.99999H14C14.5523 5.99999 15 5.55228 15 4.99999C15 4.44771 14.5523 3.99999 14 3.99999H2C1.44772 3.99999 1 4.44771 1 4.99999V20C1 20.5523 1.44772 21 2 21H22C22.5523 21 23 20.5523 23 20ZM8 13C8 12.4477 7.5523 12 7 12H5C4.44772 12 4 12.4477 4 13C4 13.5523 4.44772 14 5 14H7C7.5523 14 8 13.5523 8 13ZM11 8.99999C11 8.44771 10.5523 7.99999 10 7.99999H5C4.44772 7.99999 4 8.44771 4 8.99999C4 9.55228 4.44772 9.99999 5 9.99999H10C10.5523 9.99999 11 9.55228 11 8.99999Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default ParcelAddressing;
  