import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
// import Constants from 'expo-constants';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import {observer} from "mobx-react-lite";
import { TimerStyle } from './style';


export const Timer = observer (() =>  {
  const [isPlaying, setIsPlaying] = React.useState(true)

  return (
    <View style={TimerStyle.container}>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={10}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[10, 6, 3, 0]}
        onComplete={() => ({ shouldRepeat: true, delay: 2 })}
    >
      {({ remainingTime, color }) => (
        <Text style={{ color, fontSize: 40 }}>
          {remainingTime}
        </Text>
      )}
    </CountdownCircleTimer>
    <Button title="Toggle Playing" onPress={() => setIsPlaying(prev => !prev)} />
  </View>
  )
})
