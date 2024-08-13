
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const RollsAndTubes = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.8449 16.9144C2.8556 16.9021 16.8787 2.8781 16.8787 2.8781C18.0495 1.7073 19.9505 1.7073 21.1213 2.8781C22.2921 4.0489 22.2921 5.95 21.1213 7.1207L7.1476 21.0945C6.6025 21.6534 5.8414 22.0006 5 22.0006C3.3443 22.0006 2 20.6563 2 19.0006C2 18.1903 2.322 17.4546 2.8449 16.9144ZM5 18.0006C5.5519 18.0006 6 18.4487 6 19.0006C6 19.5525 5.5519 20.0006 5 20.0006C4.4481 20.0006 4 19.5525 4 19.0006C4 18.4487 4.4481 18.0006 5 18.0006ZM7.707 17.7067C7.4111 17.0893 6.91 16.5885 6.2923 16.2929L18.2929 4.2923C18.6832 3.9021 19.3168 3.9021 19.7071 4.2923C20.0974 4.6826 20.0974 5.3163 19.7071 5.7065L7.707 17.7067Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default RollsAndTubes;
  