/**
 * @format
 */

import 'react-native';
import React from 'react';
import MenuButton from '@components/MenuButton';
import { it } from '@jest/globals';
import { render } from '@utils/test-utils';

const navigation: any = {};

it('should render Example Screen', () => {
  render(<MenuButton title='Test' minutes={3} navigation={navigation} />);
});
