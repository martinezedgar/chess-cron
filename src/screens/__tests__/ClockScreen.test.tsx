import 'react-native';
import React from 'react';

import { it } from '@jest/globals';
import { render } from '@utils/test-utils';

import ClockScreen from '@screens/ClockScreen';

const navigation: any = {
  route: {
    params: {
      minutes: 3,
    },
  },
};

it('should render Menu Screen', () => {
  render(<ClockScreen {...navigation} />);
});
