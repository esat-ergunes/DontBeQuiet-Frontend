import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

// @ts-ignore
function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        clipRule="evenodd"
        d="M12.039 17.146a5.133 5.133 0 100-10.267 5.133 5.133 0 000 10.267z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        clipRule="evenodd"
        d="M22.34 10.264l-1.8-.466a8.744 8.744 0 00-.929-2.232l.956-1.623a.88.88 0 00-.136-1.068l-1.25-1.251a.88.88 0 00-1.07-.136l-1.622.953a8.745 8.745 0 00-2.236-.931l-.478-1.85a.88.88 0 00-.852-.66h-1.769a.88.88 0 00-.852.66l-.476 1.844a8.742 8.742 0 00-2.252.932L5.916 3.46a.88.88 0 00-1.069.136l-1.25 1.251a.88.88 0 00-.137 1.07l.976 1.657a8.744 8.744 0 00-.92 2.21l-1.856.48a.88.88 0 00-.66.852v1.769a.88.88 0 00.66.851l1.84.477c.206.8.523 1.567.943 2.277l-.953 1.622a.88.88 0 00.136 1.069l1.251 1.25a.88.88 0 001.069.137l1.623-.956c.71.42 1.475.736 2.273.94l.46 1.788c.1.388.45.66.852.66h1.77a.88.88 0 00.851-.66l.465-1.797a8.743 8.743 0 002.256-.94l1.588.935a.88.88 0 001.069-.136l1.25-1.25a.88.88 0 00.137-1.07l-.935-1.587a8.745 8.745 0 00.95-2.295l1.785-.462a.88.88 0 00.66-.853v-1.77a.88.88 0 00-.66-.851z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const SvgSettingIcon = React.memo(SvgComponent);
export default SvgSettingIcon;
