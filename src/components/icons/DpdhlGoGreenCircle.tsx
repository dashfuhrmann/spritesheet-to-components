
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const DpdhlGoGreenCircle = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path d="M12 0C18.6275 0 24 5.37246 24 12C24 18.6275 18.6275 24 12 24C5.37246 24 0 18.6275 0 12C0 5.37246 5.37246 0 12 0ZM13.9922 18.3572C12.5526 14.5059 8.35611 12.4492 4.42975 13.6697C5.57936 17.6225 9.6317 19.975 13.6342 19.0141L8.39654 16.2186V16.2309C8.21197 16.133 8.14107 15.9051 8.23834 15.7205C8.33561 15.536 8.56353 15.4656 8.74811 15.5623L13.9922 18.3572ZM15.8789 4.90986C14.9725 5.46592 14.1908 6.20303 13.5826 7.07549C11.1398 10.5759 11.9977 15.3935 15.498 17.8356V9.73213C15.498 9.52236 15.6686 9.35186 15.8789 9.35186C16.0887 9.35186 16.2598 9.52236 16.2598 9.73213V17.8356C17.1369 17.2257 17.8775 16.4394 18.4354 15.5282C20.6619 11.8901 19.517 7.13643 15.8789 4.90986Z" fill="#007C39"/>
  ` }}
  />
  )
};

export default DpdhlGoGreenCircle;
  