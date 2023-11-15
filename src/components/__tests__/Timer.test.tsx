/**
 * @format
 */

import 'react-native';
import React from 'react';
import Timer from '@components/Timer';
import { it } from '@jest/globals';
import { render } from '@utils/test-utils';

it('should render Example Screen', () => {
  render(<Timer initialTimeSeconds={10} playing={false} />);
});
