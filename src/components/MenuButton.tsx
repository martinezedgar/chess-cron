import React from 'react';
import { View, Button } from 'react-native';

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
    <View>
      <Button
        title={title}
        onPress={() => {
          console.log(minutes);
          navigation.navigation.navigate('Clock');
        }}
      />
    </View>
  );
};

export default MenuButton;
