
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const TikTok = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.95 8.61331L15.99 15.6468C15.99 19.1586 13.15 22 9.64004 22C6.13004 22 3.29004 19.1586 3.29004 15.6468C3.29004 12.1351 6.13004 9.29365 9.64004 9.29365H10.46V12.7554C8.93004 12.3152 7.34004 13.1956 6.90004 14.7164C6.45004 16.2371 7.32004 17.8379 8.83004 18.2981C10.35 18.7584 11.95 17.908 12.42 16.3872C12.49 16.1271 12.52 15.8569 12.51 15.5768V2H15.95C15.95 2 15.76 6.35218 20.71 6.66233V10.064C19.01 10.1041 17.34 9.6038 15.95 8.61331Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default TikTok;
  