
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const VideoConference = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 10C11.1716 10 10.5 9.32843 10.5 8.5C10.5 7.67157 11.1716 7 12 7C12.8284 7 13.5 7.67157 13.5 8.5C13.4991 9.32804 12.828 9.99906 12 10ZM15.3647 14.8218C15.8476 14.6203 16.0759 14.0656 15.8747 13.5825C15.2227 12.0186 13.6945 11 12.0002 11C10.3059 11 8.77766 12.0186 8.1257 13.5825C7.92425 14.0655 8.15248 14.6203 8.63545 14.8217C9.11842 15.0232 9.67325 14.795 9.8747 14.312C10.232 13.4537 11.0705 12.8945 12.0002 12.8945C12.9299 12.8945 13.7684 13.4537 14.1257 14.312C14.2223 14.5441 14.4071 14.7282 14.6396 14.8239C14.872 14.9196 15.1328 14.9187 15.3647 14.8218ZM22 16V5C22 4.44772 21.5523 4 21 4H3C2.44772 4 2 4.44772 2 5V16C1.44772 16 1 16.4477 1 17V20C1 20.5523 1.44772 21 2 21H22C22.5523 21 23 20.5523 23 20V17C23 16.4477 22.5523 16 22 16ZM4 6H20V16H4V6ZM21 19H3V18H21V19Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default VideoConference;
  