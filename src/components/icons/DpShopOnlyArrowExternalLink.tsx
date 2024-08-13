
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const DpShopOnlyArrowExternalLink = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3642 5.6359L19.3642 14.1212C19.3547 14.6666 18.9099 15.1038 18.3644 15.1038C17.8188 15.1038 17.374 14.6666 17.3645 14.1212L17.3644 8.05003L6.34354 19.0709C5.95302 19.4614 5.31986 19.4615 4.92932 19.0709C4.53879 18.6804 4.5388 18.0472 4.92932 17.6567L15.9502 6.63582L9.87909 6.63576C9.33364 6.6263 8.89643 6.18145 8.89648 5.6359C8.89645 5.09041 9.33365 4.64556 9.87909 4.63606L18.3644 4.63605C18.6296 4.63598 18.8839 4.74127 19.0715 4.92879C19.259 5.11632 19.3643 5.37073 19.3642 5.6359Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default DpShopOnlyArrowExternalLink;
  