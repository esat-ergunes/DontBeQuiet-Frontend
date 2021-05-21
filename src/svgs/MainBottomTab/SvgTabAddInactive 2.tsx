import * as React from 'react';
import Svg, {Path,Rect} from 'react-native-svg';

// @ts-ignore
function SvgComponent(props) {
  return (
    
       <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24} height={24} 
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-plus-square"
      {...props}
    >
      <Rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
      <Path d="M12 8v8M8 12h8" />
    </Svg>
   
  );
}

const SvgTabInactive = React.memo(SvgComponent);
export default SvgTabInactive;
