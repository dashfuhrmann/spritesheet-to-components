
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const AccountPilot = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 17H3C2.44771 17 2 16.5523 2 16C2 15.4477 2.44771 15 3 15H9C9.55228 15 9.99995 15.4477 9.99995 16C9.99995 16.5523 9.55228 17 9 17ZM14.8363 17.43C14.9168 17.8696 15.147 18.2678 15.4877 18.5569C15.8222 18.8258 16.2414 18.9672 16.6704 18.9559C17.2268 18.9776 17.7635 18.749 18.1334 18.3328L17.517 17.6819C17.4085 17.8069 17.2752 17.9082 17.1255 17.9793C16.997 18.0335 16.8588 18.0609 16.7192 18.0599C16.3347 18.0698 15.9972 17.8056 15.9146 17.4299H16.979V16.7299H15.809V16.3451H16.979V15.6451H15.9146C16.0022 15.2736 16.3376 15.0139 16.7192 15.0221C16.8588 15.021 16.997 15.0485 17.1255 15.1027C17.2751 15.1738 17.4083 15.275 17.517 15.4L18.1334 14.7491C17.7634 14.3331 17.2267 14.1046 16.6704 14.1261C16.2422 14.1146 15.8239 14.256 15.4904 14.525C15.1527 14.8142 14.9221 15.2087 14.8361 15.645H14.4025V16.345H14.7658V16.73H14.4025V17.43H14.8363ZM22 16.5C22 13.4624 19.5375 11 16.5 11C13.4625 11 11 13.4624 11 16.5C11 19.5376 13.4625 22 16.5 22C19.5361 21.9966 21.9965 19.5361 22 16.5ZM20 16.5C20 17.9156 19.1472 19.1918 17.8393 19.7336C16.5315 20.2753 15.0262 19.9759 14.0252 18.9749C13.0241 17.9739 12.7247 16.4685 13.2665 15.1606C13.8082 13.8527 15.0844 13 16.5 13C18.4321 13.0023 19.9977 14.568 20 16.5ZM13 10V7C13 6.44772 12.5522 6 12 6C11.4478 6 11 6.44772 11 7V10C11 10.5523 11.4478 11 12 11C12.5522 11 13 10.5523 13 10ZM9 13V4C9 3.44772 8.55228 3 8 3C7.44771 3 7 3.44772 7 4V13C7 13.5523 7.44771 14 8 14C8.55228 14 9 13.5523 9 13ZM5 13V8C5 7.44772 4.55228 7 4 7C3.44771 7 3 7.44772 3 8V13C3 13.5523 3.44771 14 4 14C4.55228 14 5 13.5523 5 13Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default AccountPilot;
  