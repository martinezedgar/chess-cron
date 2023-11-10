import React from 'react';
import { Text, Pressable } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';

import { ClockStackParamList } from '@navigation/types';

type NavigationProps = StackScreenProps<ClockStackParamList, 'Menu'>;

type MenuButtonProps = {
  title: string;
  minutes: number;
  navigation: NavigationProps;
};

const MenuButton = ({
  title,
  minutes,
  navigation,
}: MenuButtonProps): React.ReactNode => {
  return (
    <Pressable
      className='w-[75%] h-14 m-4 justify-center items-center bg-gray-700'
      onPress={() => {
        navigation.navigation.navigate('Clock', { minutes: minutes });
      }}
    >
      <Text className='text-white'>{title}</Text>
    </Pressable>
  );
};

export default MenuButton;
