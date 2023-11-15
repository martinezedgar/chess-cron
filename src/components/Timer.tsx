import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type TimerProps = {
  initialTimeSeconds: number;
  playing: boolean;
  reset?: boolean;
  fontSize?: number;
  fontColor?: string;
};

type StyleProps = {
  fontSize: number;
  fontColor: string;
};

const runTimer = (
  timeRef: React.MutableRefObject<number>,
  timeSetter: React.Dispatch<React.SetStateAction<number>>,
  intervalRef: React.MutableRefObject<any>,
): void => {
  const intervalId = setInterval(() => {
    timeRef.current -= 1;
    if (timeRef.current >= 0) {
      timeSetter(timeRef.current);
    } else {
      clearInterval(intervalId);
    }
  }, 1000);

  intervalRef.current = intervalId;
};

const Timer = ({
  initialTimeSeconds,
  playing,
  reset = false,
  fontSize = 40,
  fontColor = '#242424',
}: TimerProps): React.ReactNode => {
  const [timeValue, setTimeValue] = useState(initialTimeSeconds);
  const timerRef = useRef(timeValue);
  const intervalRef = useRef();

  useEffect(() => {
    const currentIntervalRef = intervalRef.current;
    if (reset) {
      clearInterval(currentIntervalRef);
      setTimeValue(initialTimeSeconds);
      timerRef.current = initialTimeSeconds;
    } else if (!playing) {
      clearInterval(currentIntervalRef);
    } else if (playing) {
      runTimer(timerRef, setTimeValue, intervalRef);
    }
    return () => {
      clearInterval(currentIntervalRef);
    };
  }, [playing, reset]);

  return (
    <View>
      <View className='flex flex-row m-2'>
        <Text style={styles({ fontSize, fontColor }).text}>
          {Math.trunc(timeValue / 60).toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </Text>
        <Text style={styles({ fontSize, fontColor }).text}>:</Text>
        <Text style={styles({ fontSize, fontColor }).text}>
          {(timeValue % 60).toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </Text>
      </View>
    </View>
  );
};

export default Timer;

const styles = ({ fontSize, fontColor }: StyleProps) =>
  StyleSheet.create({
    text: {
      fontFamily: 'OpenSans-SemiBold',
      fontSize: fontSize,
      color: fontColor,
    },
  });
