import React, { useState } from 'react';
import { View, Text, Pressable, SafeAreaView } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';

import { ClockStackParamList } from '@navigation/types';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import CloseIcon from '@components/CloseIcon';
import PauseIcon from '@components/PauseIcon';

type NavigationProps = StackScreenProps<ClockStackParamList, 'Clock'>;

const ClockScreen = ({
  navigation,
  route,
}: NavigationProps): React.ReactNode => {
  const [whitePlayerClockRunning, setWhitePlayerClockRunning] = useState(false);
  const [blackPlayerClockRunning, setBlackPlayerClockRunning] = useState(false);
  const { minutes } = route.params;

  return (
    <SafeAreaView className='flex-1 justify-center items-center'>
      <Pressable
        className='flex-1 justify-center items-center bg-gray-950 w-full rotate-180'
        onPress={() => {
          setWhitePlayerClockRunning(true);
          setBlackPlayerClockRunning(false);
        }}
      >
        <CountdownCircleTimer
          isPlaying={blackPlayerClockRunning}
          duration={60 * minutes}
          colors='#F0F0F0'
          trailColor='#A0A0A0'
          size={275}
        >
          {({ remainingTime }) => (
            <Text className='text-neutral-100 text-[100px]'>
              {remainingTime}
            </Text>
          )}
        </CountdownCircleTimer>
      </Pressable>
      <View className='flex-row'>
        <Pressable
          className='flex-1 justify-center items-center h-14 bg-gray-700'
          onPress={() => {
            setWhitePlayerClockRunning(false);
            setBlackPlayerClockRunning(false);
          }}
        >
          <PauseIcon />
        </Pressable>
        <Pressable
          className='flex-1 justify-center items-center h-14 w-full bg-gray-700'
          onPress={() => navigation.navigate('Menu')}
        >
          <CloseIcon />
        </Pressable>
      </View>

      <Pressable
        className='flex-1 justify-center items-center bg-neutral-100 w-full'
        onPress={() => {
          setBlackPlayerClockRunning(true);
          setWhitePlayerClockRunning(false);
        }}
      >
        <CountdownCircleTimer
          isPlaying={whitePlayerClockRunning}
          duration={60 * minutes}
          colors='#242424'
          trailColor='#C0C0C0'
          size={275}
        >
          {({ remainingTime }) => (
            <Text className='text-gray-950 text-[100px]'>{remainingTime}</Text>
          )}
        </CountdownCircleTimer>
      </Pressable>
    </SafeAreaView>
  );
};

export default ClockScreen;
