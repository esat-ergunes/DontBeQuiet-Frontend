import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

// @ts-ignore
function SvgComponent(props) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        fill-rule="nonzero" 
        d="M249 67c14-14-7-35-20-22L85 156c-7 5-7 15 0 21l144 110c13 15 34-6 20-21l-133-99L249 67z"
      />
    </Svg>
  );
}

const SvgArrDown = React.memo(SvgComponent);
export default SvgArrDown;
