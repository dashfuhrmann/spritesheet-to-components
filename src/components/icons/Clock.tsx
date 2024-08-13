
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Clock = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C19.9949 7.58382 16.4162 4.00507 12 4ZM15.707 9.293C15.5196 9.10538 15.2652 8.99996 15 8.99996C14.7348 8.99996 14.4804 9.10538 14.293 9.293L12 11.5859L8.707 8.293C8.45593 8.03304 8.08412 7.92879 7.73449 8.0203C7.38486 8.11182 7.11182 8.38486 7.0203 8.73449C6.92879 9.08412 7.03304 9.45593 7.293 9.707L11.293 13.707C11.4805 13.8946 11.7348 14 12 14C12.2652 14 12.5195 13.8946 12.707 13.707L15.707 10.707C15.8946 10.5196 16 10.2652 16 10C16 9.73479 15.8946 9.48045 15.707 9.293Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Clock;
  