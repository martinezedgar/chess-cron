import 'react-native';
import React from 'react';
import MenuScreen from '@screens/MenuScreen';
import { it } from '@jest/globals';
import { render } from '@utils/test-utils';

const navigation: any = {};

it('should render Menu Screen', () => {
  render(<MenuScreen {...navigation} />);
});
