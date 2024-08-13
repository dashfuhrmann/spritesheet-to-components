
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const SearchLetter = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 8.55228 16.4477 9 17 9C17.5523 9 18 8.55228 18 8V3C18 2.44772 17.5523 2 17 2H3C2.44772 2 2 2.44772 2 3V13C2 13.5523 2.44772 14 3 14H9C9.55228 14 10 13.5523 10 13C10 12.4477 9.55228 12 9 12H4V5.1743L9.3491 9.7593C9.72363 10.0804 10.2764 10.0804 10.6509 9.7593L16 5.1743V8ZM10 7.6831L5.7032 4H14.2968L10 7.6831ZM21.707 19.2931L18.4448 16.0309C19.4691 14.2945 19.0423 12.0673 17.4487 10.8326C15.855 9.59782 13.5918 9.74084 12.1663 11.1664C10.7407 12.5919 10.5977 14.8551 11.8325 16.4488C13.0672 18.0424 15.2944 18.4692 17.0308 17.4449L20.293 20.707C20.6854 21.086 21.3091 21.0806 21.6948 20.6948C22.0806 20.3091 22.086 19.6854 21.707 19.293V19.2931ZM15 16C13.8954 16 13 15.1046 13 14C13 12.8954 13.8954 12 15 12C16.1046 12 17 12.8954 17 14C16.9989 15.1041 16.1041 15.9989 15 16Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default SearchLetter;
  