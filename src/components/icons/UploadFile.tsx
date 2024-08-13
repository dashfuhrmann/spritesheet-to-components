
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const UploadFile = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 2L13.1314 2.00908C13.3482 2.03765 13.551 2.13675 13.7073 2.293L19.7073 8.293C19.8947 8.4805 20 8.7348 20 9V21C20 21.5523 19.5523 22 19 22H5C4.4477 22 4 21.5523 4 21V3C4 2.4477 4.4477 2 5 2H13ZM12 4H6V20H18V10H13C12.4477 10 12 9.5523 12 9V4ZM11.9966 11C12.2317 11 12.5169 11.1062 12.7036 11.293L15.7193 14.3088C16.0983 14.7011 16.0928 15.3249 15.7071 15.7106C15.3214 16.0963 14.6977 16.1017 14.3053 15.7228L12.9966 14.4141L12.9969 14.8716C12.997 14.9119 12.997 14.9544 12.997 14.9989L12.9979 16.1551C12.998 16.2174 12.998 16.2804 12.9981 16.3437L12.9989 17.4816C12.999 17.5423 12.999 17.6022 12.999 17.661L12.9993 18.0003C12.9995 18.2653 12.8943 18.5196 12.7069 18.7071C12.5196 18.8947 12.2653 19 12.0003 19H11.999C11.4472 19 11 18.5527 11 18.001L10.9999 14.4141L9.6912 15.7228C9.2989 16.1017 8.6751 16.0963 8.2894 15.7106C7.9037 15.3249 7.8983 14.7011 8.2772 14.3088L11.2929 11.293C11.4796 11.1062 11.7615 11 11.9966 11ZM14 5.414V8H16.5858L14 5.414Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default UploadFile;
  