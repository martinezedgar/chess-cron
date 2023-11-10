import React from 'react';
import { SafeAreaView } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';

import { ClockStackParamList } from '@navigation/types';
import MenuButton from '@components/MenuButton';

type NavigationProps = StackScreenProps<ClockStackParamList, 'Menu'>;

const MenuScreen = (navigation: NavigationProps): React.ReactNode => {
  return (
    <SafeAreaView className='flex-1 justify-center items-center'>
      <MenuButton title='3 Minutes' minutes={3} navigation={navigation} />
      <MenuButton title='5 Minutes' minutes={5} navigation={navigation} />
      <MenuButton title='10 Minutes' minutes={10} navigation={navigation} />
    </SafeAreaView>
  );
};

export default MenuScreen;
