import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

// @ts-ignore
function SvgComponent(props) {
  return (
    <Svg width={24} height={22} viewBox="0 0 100 100" fill="none" {...props}>
     

     <Path 
        d="M88 14H77v5c0 3.9-3.1 7-7 7s-7-3.1-7-7v-5H37v5c0 3.9-3.1 7-7 7s-7-3.1-7-7v-5H12c-3.9 0-7 3.1-7 7v68c0 3.9 3.1 7 7 7h76c3.9 0 7-3.1 7-7V21c0-3.9-3.1-7-7-7zm3 75c0 1.7-1.3 3-3 3H12c-1.7 0-3-1.3-3-3V36c0-1.7 1.3-3 3-3h76c1.7 0 3 1.3 3 3v53z" 
        
        
        fill={props.color}
       
        />
      <Path 
      d="M30 24c2.8 0 5-2.2 5-5V9c0-2.8-2.2-5-5-5s-5 2.2-5 5v10c0 2.8 2.2 5 5 5zM70 24c2.8 0 5-2.2 5-5V9c0-2.8-2.2-5-5-5s-5 2.2-5 5v10c0 2.8 2.2 5 5 5zM43.3 80.3c-1 0-2-.4-2.8-1.2L27.2 65.8c-1.6-1.6-1.6-4.1 0-5.7 1.6-1.6 4.1-1.6 5.7 0l10.5 10.5 23.8-23.8c1.6-1.6 4.1-1.6 5.7 0 1.6 1.6 1.6 4.1 0 5.7L46.2 79.2c-.8.7-1.8 1.1-2.9 1.1z" 
     
        
        fill={props.color}
       
        />
    </Svg>
  );
}

const SvgTabPeopleInactive = React.memo(SvgComponent);
export default SvgTabPeopleInactive;
