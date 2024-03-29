import React, { useState } from 'react';
import { View, Pressable, SafeAreaView } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import Sound from 'react-native-sound';

import { ClockStackParamList } from '@navigation/types';
import CloseIcon from '@components/CloseIcon';
import PauseIcon from '@components/PauseIcon';
import Timer from '@components/Timer';

type NavigationProps = StackScreenProps<ClockStackParamList, 'Clock'>;

const ClockScreen = ({
  navigation,
  route,
}: NavigationProps): React.ReactNode => {
  const [whitePlayerClockRunning, setWhitePlayerClockRunning] = useState(false);
  const [blackPlayerClockRunning, setBlackPlayerClockRunning] = useState(false);
  const { minutes } = route.params;

  Sound.setCategory('Playback');
  const tapSound = new Sound(
    'tap_sound.mp3',
    Sound.MAIN_BUNDLE,
    (error: any) => {
      if (error) {
        console.log('Playback Error');
        return;
      }
    },
  );
  tapSound.setVolume(1);
  const playSound = (sound: any) => {
    sound.play();
  };

  return (
    <SafeAreaView className='flex-1 justify-center items-center'>
      <Pressable
        className='flex-1 justify-center items-center bg-gray-950 w-full rotate-180'
        onPress={() => {
          setWhitePlayerClockRunning(true);
          setBlackPlayerClockRunning(false);
          playSound(tapSound);
        }}
      >
        <Timer
          initialTimeSeconds={60 * minutes}
          playing={blackPlayerClockRunning}
          fontColor='#F0F0F0'
          fontSize={100}
        />
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
          playSound(tapSound);
        }}
      >
        <Timer
          initialTimeSeconds={60 * minutes}
          playing={whitePlayerClockRunning}
          fontColor='#242424'
          fontSize={100}
        />
      </Pressable>
    </SafeAreaView>
  );
};

export default ClockScreen;
