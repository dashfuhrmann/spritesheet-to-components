
  import React, { SVGProps } from "react";
import { useTheme } from "styled-components";

const Listen = ({ color, width = 24, height = 24, ...props } : SVGProps<SVGSVGElement>) => {
  const { iconColor } = useTheme();

  return (
    <svg
    color={color ? color : iconColor}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
    dangerouslySetInnerHTML={{ __html: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.52833 21.0978C8.21716 21.0949 6.961 20.5704 6.03713 19.64C5.65673 19.2478 5.66151 18.623 6.04785 18.2366C6.4342 17.8503 7.05908 17.8456 7.45123 18.226C8.51409 19.3442 10.2808 19.393 11.4038 18.3353L16.6216 13.1176C18.5203 11.1166 18.4428 7.95674 16.4482 6.05121C14.5426 4.05651 11.3825 3.97898 9.38133 5.87781C8.98895 6.25678 8.36525 6.25136 7.97951 5.86563C7.59378 5.4799 7.58836 4.85619 7.96733 4.46381C10.7497 1.78457 15.1755 1.86208 17.8623 4.63711C20.6371 7.32389 20.7146 11.7493 18.0356 14.5316L12.8179 19.75C11.9448 20.6197 10.7606 21.1048 9.52833 21.0978ZM7.45313 14.95C8.41928 14.2804 8.99682 13.1806 8.99956 12.0051C9.00228 10.8296 8.42986 9.72709 7.46683 9.05301C7.17462 8.84734 6.79488 8.81317 6.47066 8.96339C6.14643 9.11361 5.92698 9.42539 5.89496 9.78129C5.86294 10.1372 6.02322 10.4831 6.31543 10.6888C6.74484 10.9873 7.00041 11.4775 6.99923 12.0005C6.99805 12.5235 6.74028 13.0126 6.30953 13.3091C5.85641 13.6249 5.74508 14.2482 6.06088 14.7014C6.37668 15.1545 7.00001 15.2658 7.45313 14.95ZM9.77783 16.7508C11.1841 15.5748 11.9976 13.8366 11.9997 12.0034C12.0018 10.1703 11.1922 8.43021 9.78863 7.25101C9.36501 6.9134 8.7496 6.97446 8.40059 7.38874C8.05158 7.80302 8.09589 8.41987 8.50053 8.78001C9.45214 9.57894 10.001 10.7583 9.99951 12.0008C9.99801 13.2433 9.44627 14.4214 8.49273 15.218C8.21288 15.4457 8.0774 15.8066 8.13822 16.1622C8.19903 16.5179 8.44671 16.8132 8.78634 16.935C9.12596 17.0567 9.50486 16.9861 9.77783 16.7502V16.7508ZM6.01953 12C6.01953 11.4477 5.57181 11 5.01953 11H5.00953C4.45858 11.0055 4.01589 11.4556 4.01955 12.0066C4.02322 12.5576 4.47186 13.0018 5.02283 13C5.5738 12.9981 6.0195 12.551 6.01953 12Z" fill="currentColor"/>
  ` }}
  />
  )
};

export default Listen;
  