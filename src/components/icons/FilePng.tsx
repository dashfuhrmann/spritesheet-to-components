
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const FilePng = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path d="M13 2L13.1314 2.00907C13.3482 2.03763 13.551 2.13675 13.7073 2.293L19.7073 8.293C19.8947 8.48054 20 8.73485 20 9V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H13ZM12 4H6V20H18V10H13C12.4477 10 12 9.55228 12 9V4ZM15.25 15.625C15.72 15.625 16.08 15.7783 16.33 16.085L15.825 16.64C15.7483 16.5467 15.6642 16.48 15.5725 16.44C15.4808 16.4 15.3783 16.38 15.265 16.38C15.0783 16.38 14.9417 16.45 14.855 16.59C14.7683 16.73 14.725 16.9467 14.725 17.24V17.46C14.725 17.7533 14.7633 17.97 14.84 18.11C14.9167 18.25 15.0383 18.32 15.205 18.32C15.3583 18.32 15.4725 18.2675 15.5475 18.1625C15.6225 18.0575 15.665 17.92 15.675 17.75H15.16V17.045H16.525V17.64C16.525 18.0933 16.4083 18.4458 16.175 18.6975C15.9417 18.9492 15.6183 19.075 15.205 19.075C14.7717 19.075 14.4375 18.9375 14.2025 18.6625C13.9675 18.3875 13.85 17.995 13.85 17.485V17.205C13.85 16.8683 13.9083 16.5817 14.025 16.345C14.1417 16.1083 14.305 15.9292 14.515 15.8075C14.725 15.6858 14.97 15.625 15.25 15.625ZM8.885 15.7C9.30833 15.7 9.63833 15.785 9.875 15.955C10.1117 16.125 10.23 16.3983 10.23 16.775V16.875C10.23 17.2517 10.1117 17.525 9.875 17.695C9.63833 17.865 9.30833 17.95 8.885 17.95H8.62V19H7.75V15.7H8.885ZM11.745 15.7L12.45 17.825H12.54V15.7H13.34V19H12.235L11.53 16.875H11.44V19H10.64V15.7H11.745ZM8.905 16.4H8.62V17.25H8.905C9.045 17.25 9.155 17.2225 9.235 17.1675C9.315 17.1125 9.355 17.0133 9.355 16.87V16.795C9.355 16.6417 9.315 16.5375 9.235 16.4825C9.155 16.4275 9.045 16.4 8.905 16.4ZM14 5.414V8H16.5858L14 5.414Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default FilePng;
  