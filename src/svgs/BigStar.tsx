import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent() {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 26.534L6.111 32 8 20.422l-8-8.2 11.056-1.688L16 0l4.944 10.534L32 12.223l-8 8.2L25.889 32 16 26.534z"
        fill="#ED3269"
      />
    </Svg>
  )
}

const BigStar = React.memo(SvgComponent)
export default BigStar
