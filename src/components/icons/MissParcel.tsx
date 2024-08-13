
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const MissParcel = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7071 12.2929L17 15.585L20.2929 12.2929C20.6834 11.9024 21.3166 11.9024 21.7071 12.2929C22.0976 12.6834 22.0976 13.3166 21.7071 13.7071L18.415 17L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L17 18.415L13.7071 21.7071C13.3166 22.0976 12.6834 22.0976 12.2929 21.7071C11.9024 21.3166 11.9024 20.6834 12.2929 20.2929L15.585 17L12.2929 13.7071C11.9024 13.3166 11.9024 12.6834 12.2929 12.2929C12.6834 11.9024 13.3166 11.9024 13.7071 12.2929ZM17 3C17.5523 3 18 3.4477 18 4V9C18 9.5523 17.5523 10 17 10H11V11C11 11.5523 10.5523 12 10 12C9.4477 12 9 11.5523 9 11V10H4V13H9C9.5523 13 10 13.4477 10 14C10 14.5523 9.5523 15 9 15H3C2.4477 15 2 14.5523 2 14V4C2 3.4477 2.4477 3 3 3H17ZM11 8H16V5H11V8ZM4 8H9V5H4V8Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default MissParcel;
  