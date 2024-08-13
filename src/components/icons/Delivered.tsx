
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Delivered = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7071 12.2929C22.0976 12.6835 22.0976 13.3166 21.7071 13.7071L13.7071 21.7071C13.5569 21.8573 13.3708 21.9498 13.1764 21.9844L13.059 21.9983H12.941C12.7051 21.9844 12.4731 21.8874 12.2929 21.7071L9.2929 18.7071C8.9024 18.3166 8.9024 17.6835 9.2929 17.2929C9.6834 16.9024 10.3166 16.9024 10.7071 17.2929L13 19.585L20.2929 12.2929C20.6834 11.9024 21.3166 11.9024 21.7071 12.2929ZM17 3C17.5523 3 18 3.4478 18 4V11C18 11.5523 17.5523 12 17 12C16.4477 12 16 11.5523 16 11V10H11V13H14C14.5523 13 15 13.4477 15 14C15 14.5523 14.5523 15 14 15H3C2.4477 15 2 14.5523 2 14V4C2 3.4478 2.4477 3 3 3H17ZM4 13H9V10H4V13ZM4 8H9V5H4V8ZM11 8H16V5H11V8Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Delivered;
  