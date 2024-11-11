import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={28}
    height={29}
    fill="none"
    {...props}
  >
    <Path
      fill="#0E1117"
      d="M26.251 13.55c0-5.275-5.484-9.55-12.25-9.55s-12.25 4.276-12.25 9.55c0 3.354 2.223 6.306 5.583 8.01l-1.04 4.29c-.241.758-.035.791.55.482l5.142-3.363c.669.086 1.342.128 2.015.128 6.766 0 12.25-4.274 12.25-9.548Z"
    />
  </Svg>
);
export default SvgComponent;
