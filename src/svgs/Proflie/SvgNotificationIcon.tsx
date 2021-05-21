import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

// @ts-ignore
function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.424 16.308V11.74c0-4.022-2.712-7.408-6.366-8.348.153-.315.24-.669.24-1.043C14.298 1.053 13.267 0 12 0c-1.267 0-2.298 1.053-2.298 2.348 0 .374.087.728.24 1.043-3.654.94-6.366 4.326-6.366 8.348v4.57a2.349 2.349 0 00-1.532 2.213c0 1.294 1.03 2.348 2.298 2.348h3.906C8.604 22.653 10.15 24 12 24c1.85 0 3.396-1.346 3.752-3.13h3.907c1.267 0 2.297-1.054 2.297-2.348 0-1.02-.64-1.89-1.532-2.213zM12 1.565c.422 0 .766.351.766.783A.775.775 0 0112 3.13a.775.775 0 01-.766-.782c0-.432.344-.783.766-.783zm-2.166 19.3c.316.91 1.168 1.57 2.166 1.57s1.85-.66 2.166-1.57H9.834zm9.825-1.56H4.342a.775.775 0 01-.766-.783c0-.432.343-.783.766-.783h1.531c.423 0 .766-.35.766-.783a.774.774 0 00-.766-.782h-.766v-4.435C5.107 7.855 8.2 4.696 12 4.696c3.8 0 6.893 3.16 6.893 7.043v4.435h-.767a.774.774 0 00-.766.782c0 .433.343.783.766.783h1.533c.422 0 .765.351.765.783a.775.775 0 01-.765.782zm-13.02-7.566c0-3.02 2.405-5.478 5.361-5.478.423 0 .766.35.766.782a.774.774 0 01-.766.783c-2.111 0-3.83 1.755-3.83 3.913a.774.774 0 01-.765.783.774.774 0 01-.766-.783z"
        fill="#fff"
      />
    </Svg>
  );
}

const SvgNotificationIcon = React.memo(SvgComponent);
export default SvgNotificationIcon;