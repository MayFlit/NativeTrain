import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import {observer} from "mobx-react-lite";
import hero from '../../store/hero';
import { TimerStyle } from './style';


export const Timer = observer (() =>  {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [key, setKey] = React.useState(0);



  return (
      <View>
          {!hero.lightningOrbCooldown ? <View style={TimerStyle.container}>
      <CountdownCircleTimer
        isPlaying={!isPlaying}
        size={80}
        strokeWidth={4}
        duration={3}
        colors={["#61c722", "#F7B801", "#A30000", "#41c92c"]}
        colorsTime={[3, 2, 1, 0]}
        key={key}
        onComplete={() =>{
          setKey(prevKey => prevKey + 1)
          setIsPlaying(!isPlaying)
     }}>
      {({ remainingTime, color }) => (
        <Text style={{ color, fontSize: 40 }} onPress={() => {setIsPlaying(prev => !prev); hero.lightningOrb()} } >
          <Image source={require('../../assets/skills/lightningBoltIcon.png')} style={TimerStyle.img} />
        </Text>
      )}
    </CountdownCircleTimer>
    {/* <Button title="Toggle Playing" onPress={() => setIsPlaying(prev => !prev)} /> */}
  </View> :
  <View style={TimerStyle.container}>
      <CountdownCircleTimer
          isPlaying={!isPlaying}
          size={80}
          strokeWidth={4}
          duration={3}
          colors={["#61c722", "#F7B801", "#A30000", "#41c92c"]}
          colorsTime={[3, 2, 1, 0]}
          key={key}
          onComplete={() =>{
              setKey(prevKey => prevKey + 1)
              setIsPlaying(!isPlaying)
          }}>
          {({ remainingTime, color }) => (
              <Text style={{ color, fontSize: 40 }} >
                  <Image source={require('../../assets/skills/lightningBoltIcon.png')} style={TimerStyle.img} />
              </Text>
          )}
      </CountdownCircleTimer>
      {/* <Button title="Toggle Playing" onPress={() => setIsPlaying(prev => !prev)} /> */}
  </View>}
      </View>
  )
})

export const Timer2 = observer (() =>  {
  const [isPlaying, setIsPlaying] = React.useState(true)
  const [key, setKey] = React.useState(0);

  return (
    <View>
          {!hero.poisonCooldown ? <View style={TimerStyle.container}>
      <CountdownCircleTimer
        isPlaying={!isPlaying}
        size={80}
        strokeWidth={4}
        duration={3}
        colors={["#61c722", "#F7B801", "#A30000", "#41c92c"]}
        colorsTime={[3, 2, 1, 0]}
        key={key}
        onComplete={() =>{
          setKey(prevKey => prevKey + 1)
          setIsPlaying(!isPlaying)
     }}>
      {({ remainingTime, color }) => (
        <Text style={{ color, fontSize: 40 }} onPress={() => {setIsPlaying(prev => !prev); hero.poison()} } >
          <Image source={require('../../assets/skills/poisonIcon.png')} style={TimerStyle.img} />
        </Text>
      )}
      </CountdownCircleTimer>
  </View> :
  <View style={TimerStyle.container}>
      <CountdownCircleTimer
          isPlaying={!isPlaying}
          size={80}
          strokeWidth={4}
          duration={3}
          colors={["#61c722", "#F7B801", "#A30000", "#41c92c"]}
          colorsTime={[3, 2, 1, 0]}
          key={key}
          onComplete={() =>{
              setKey(prevKey => prevKey + 1)
              setIsPlaying(!isPlaying)
          }}>
          {({ remainingTime, color }) => (
              <Text style={{ color, fontSize: 40 }} >
                  <Image source={require('../../assets/skills/poisonIcon.png')} style={TimerStyle.img} />
              </Text>
          )}
      </CountdownCircleTimer>
  </View>}
      </View>
  )
})

export const Timer3 = observer (() =>  {
  const [isPlaying, setIsPlaying] = React.useState(true)
  const [key, setKey] = React.useState(0);

  return (
    <View>
          {!hero.healCooldown ? <View style={TimerStyle.container}>
      <CountdownCircleTimer
        isPlaying={!isPlaying}
        size={80}
        strokeWidth={4}
        duration={3}
        colors={["#61c722", "#F7B801", "#A30000", "#41c92c"]}
        colorsTime={[3, 2, 1, 0]}
        key={key}
        onComplete={() =>{
          setKey(prevKey => prevKey + 1)
          setIsPlaying(!isPlaying)
     }}>
      {({ remainingTime, color }) => (
        <Text style={{ color, fontSize: 40 }} onPress={() => {setIsPlaying(prev => !prev); hero.heal()} } >
          <Image source={require('../../assets/skills/healIcon.png')} style={TimerStyle.img} />
        </Text>
      )}

</CountdownCircleTimer>
  </View> :
  <View style={TimerStyle.container}>
      <CountdownCircleTimer
          isPlaying={!isPlaying}
          size={80}
          strokeWidth={4}
          duration={3}
          colors={["#61c722", "#F7B801", "#A30000", "#41c92c"]}
          colorsTime={[3, 2, 1, 0]}
          key={key}
          onComplete={() =>{
              setKey(prevKey => prevKey + 1)
              setIsPlaying(!isPlaying)
          }}>
          {({ remainingTime, color }) => (
              <Text style={{ color, fontSize: 40 }} >
                  <Image source={require('../../assets/skills/healIcon.png')} style={TimerStyle.img} />
              </Text>
          )}
      </CountdownCircleTimer>
  </View>}
      </View>
  )
})

export const Timer4 = observer (() =>  {
  const [isPlaying, setIsPlaying] = React.useState(true)
  const [key, setKey] = React.useState(0);

  return (
    <View>
          {!hero.doubleDamageCooldown ? <View style={TimerStyle.container}>
      <CountdownCircleTimer
        isPlaying={!isPlaying}
        size={80}
        strokeWidth={4}
        duration={3}
        colors={["#61c722", "#F7B801", "#A30000", "#41c92c"]}
        colorsTime={[3, 2, 1, 0]}
        key={key}
        onComplete={() =>{
          setKey(prevKey => prevKey + 1)
          setIsPlaying(!isPlaying)
     }}>
      {({ remainingTime, color }) => (
        <Text style={{ color, fontSize: 40 }} onPress={() => {setIsPlaying(prev => !prev); hero.doubleDamage()} } >
          <Image source={require('../../assets/skills/doubleDamageIcon.png')} style={TimerStyle.img} />
        </Text>
      )}
</CountdownCircleTimer>
 
  </View> :
  <View style={TimerStyle.container}>
      <CountdownCircleTimer
          isPlaying={!isPlaying}
          size={80}
          strokeWidth={4}
          duration={3}
          colors={["#61c722", "#F7B801", "#A30000", "#41c92c"]}
          colorsTime={[3, 2, 1, 0]}
          key={key}
          onComplete={() =>{
              setKey(prevKey => prevKey + 1)
              setIsPlaying(!isPlaying)
          }}>
          {({ remainingTime, color }) => (
              <Text style={{ color, fontSize: 40 }} >
                  <Image source={require('../../assets/skills/doubleDamageIcon.png')} style={TimerStyle.img} />
              </Text>
          )}
      </CountdownCircleTimer>
  </View>}
      </View>
  )
})
