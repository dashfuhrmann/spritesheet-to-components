
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const LocationPin = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.9998C11.412 21.9998 10.8569 21.7287 10.4952 21.265C8.843 19.1738 5 13.7932 5 9.00635C5 6.50549 6.33419 4.1946 8.5 2.94417C10.6658 1.69374 13.3342 1.69374 15.5 2.94417C17.6658 4.1946 19 6.50549 19 9.00635C19 13.7932 15.157 19.1738 13.5048 21.265C13.143 21.7285 12.588 21.9996 12 21.9998ZM12 4.00075C9.23853 4.0056 7.00212 6.24488 7.0008 9.00635C7.0008 13.1263 10.4767 18.0054 12.022 19.9701C13.4931 18.0474 16.9992 13.1448 16.9992 9.00635C16.9979 6.24488 14.7615 4.0056 12 4.00075ZM12 9.99985C11.1716 9.99985 10.5 9.32828 10.5 8.49985C10.5 7.67142 11.1716 6.99985 12 6.99985C12.8284 6.99985 13.5 7.67142 13.5 8.49985C13.4991 9.32789 12.828 9.99891 12 9.99985Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default LocationPin;
  