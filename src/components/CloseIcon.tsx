import React from 'react';
import { View } from 'react-native';

import { Svg, Path } from 'react-native-svg';

const CloseIcon = (): React.ReactNode => {
  return (
    <View>
      <Svg
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={3}
        stroke='#FFF'
        className='w-10 h-10 bg-red-500'
      >
        <Path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M6 18L18 6M6 6l12 12'
        />
      </Svg>
    </View>
  );
};

export default CloseIcon;
