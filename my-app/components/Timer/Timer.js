import * as React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import {observer} from "mobx-react-lite";
import { TimerStyle } from './style';


export const Timer = observer (() =>  {
  const [isPlaying, setIsPlaying] = React.useState(true)


  return (
    <View style={TimerStyle.container}>
      <CountdownCircleTimer
        isPlaying={!isPlaying}
        size={80}
        strokeWidth={4}
        duration={10}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[10, 6, 3, 0]}
        onComplete={() => ({ shouldRepeat: true, delay: 2 })}

    >
      {({ remainingTime, color }) => (
        <Text style={{ color, fontSize: 40 }} onPress={() => setIsPlaying(prev => !prev)}>
          <Image source={require('../../assets/skills/lightningBoltIcon.png')} style={TimerStyle.img} />
          {/* {remainingTime} */}
        </Text>

      )}
    </CountdownCircleTimer>
    {/* <Button title="Toggle Playing" onPress={() => setIsPlaying(prev => !prev)} /> */}
  </View>
  )
})

export const Timer2 = observer (() =>  {
  const [isPlaying, setIsPlaying] = React.useState(true)


  return (
    <View style={TimerStyle.container}>
      <CountdownCircleTimer
        isPlaying={!isPlaying}
        size={80}
        strokeWidth={4}
        duration={10}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[10, 6, 3, 0]}
        onComplete={() => ({ shouldRepeat: true, delay: 2 })}

    >
      {({ remainingTime, color }) => (
        <Text style={{ color, fontSize: 40 }} onPress={() => setIsPlaying(prev => !prev)}>
          <Image source={require('../../assets/skills/poisonIcon.png')} style={TimerStyle.img} />
          {/* {remainingTime} */}
        </Text>

      )}
    </CountdownCircleTimer>
  </View>
  )
})

export const Timer3 = observer (() =>  {
  const [isPlaying, setIsPlaying] = React.useState(true)


  return (
    <View style={TimerStyle.container}>
      <CountdownCircleTimer
        isPlaying={!isPlaying}
        size={80}
        strokeWidth={4}
        duration={10}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[10, 6, 3, 0]}
        onComplete={() => ({ shouldRepeat: true, delay: 2 })}

    >
      {({ remainingTime, color }) => (
        <Text style={{ color, fontSize: 40 }} onPress={() => setIsPlaying(prev => !prev)}>
          <Image source={require('../../assets/skills/healIcon.png')} style={TimerStyle.img} />
          {/* {remainingTime} */}
        </Text>

      )}
    </CountdownCircleTimer>
  </View>
  )
})

export const Timer4 = observer (() =>  {
  const [isPlaying, setIsPlaying] = React.useState(true)


  return (
    <View style={TimerStyle.container}>
      <CountdownCircleTimer
        isPlaying={!isPlaying}
        size={80}
        strokeWidth={4}
        duration={10}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[10, 6, 3, 0]}
        onComplete={() => ({ shouldRepeat: true, delay: 2 })}

    >
      {({ remainingTime, color }) => (
        <Text style={{ color, fontSize: 40 }} onPress={() => setIsPlaying(prev => !prev)}>
          <Image source={require('../../assets/skills/doubleDamageIcon.png')} style={TimerStyle.img} />
          {/* {remainingTime} */}
        </Text>

      )}
    </CountdownCircleTimer>
  </View>
  )
})
