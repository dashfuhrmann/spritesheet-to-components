
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Globe = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C21.9937 6.47976 17.5202 2.00628 12 2ZM19.9376 11H16.9776C16.9317 8.86914 16.4476 6.77054 15.5554 4.8349C17.9543 6.02881 19.5985 8.34193 19.9376 11ZM12 20C10.8621 20 9.2466 17.3045 9.0257 13H14.9743C14.7534 17.3045 13.1379 20 12 20ZM9.0257 11C9.2466 6.6955 10.8621 4 12 4C13.1379 4 14.7534 6.6955 14.9743 11H9.0257ZM8.4448 4.8349C7.55263 6.77054 7.06852 8.86914 7.0226 11H4.0626C4.40168 8.34193 6.04586 6.02881 8.4448 4.8349ZM4.0624 13H7.0224C7.06833 15.1309 7.55248 17.2295 8.4447 19.1652C6.0457 17.9713 4.40147 15.6581 4.0624 13ZM15.5554 19.165C16.4474 17.2294 16.9315 15.1308 16.9775 13H19.9375C19.5985 15.6581 17.9543 17.9712 15.5554 19.165Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Globe;
  