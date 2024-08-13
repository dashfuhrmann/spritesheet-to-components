
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const VisibilityShow = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 16C9.79103 16 8.00016 14.2091 8.00016 12C8.00016 9.79086 9.79103 8 12.0001 8C14.2093 8 16.0001 9.79086 16.0001 12C15.9976 14.2081 14.2082 15.9975 12.0001 16ZM12.0001 10C10.8956 10 10.0002 10.8954 10.0002 12C10.0002 13.1046 10.8956 14 12.0001 14C13.1047 14 14.0001 13.1046 14.0001 12C13.999 10.8959 13.1042 10.0011 12.0001 10ZM21.8278 11.439C19.031 7.2316 15.6335 5.0054 12.0015 5H11.9878C8.33567 5 5.03376 7.1656 2.17396 11.4366C1.94381 11.7739 1.94187 12.2173 2.16906 12.5566C5.03016 16.832 8.33357 19 11.9878 19H12.0015C15.6358 18.9946 19.0352 16.7656 21.8331 12.5532C22.0576 12.2151 22.0555 11.7749 21.8278 11.439ZM11.9986 17H11.9886C9.19496 17 6.58216 15.3185 4.21576 12C6.58216 8.6815 9.19416 7 11.9883 7H11.9983C15.4383 7.005 18.0803 9.6037 19.7862 12C18.0806 14.3963 15.4381 16.995 11.9986 17Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default VisibilityShow;
  