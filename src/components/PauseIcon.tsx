import React from 'react';
import { View } from 'react-native';

import { Svg, Path } from 'react-native-svg';

const PauseIcon = (): React.ReactNode => {
  return (
    <View>
      <Svg
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={3}
        stroke='#FFF'
        className='w-10 h-10 bg-yellow-500'
      >
        <Path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15.75 5.25v13.5m-7.5-13.5v13.5'
        />
      </Svg>
    </View>
  );
};

export default PauseIcon;
