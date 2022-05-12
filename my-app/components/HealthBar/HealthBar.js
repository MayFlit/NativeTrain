import React, {useRef, useState} from "react";
import {Text, View, Animated} from 'react-native';
import {observer} from "mobx-react-lite";
import {HealthBarStyle} from "./style";
import hero from "../../store/hero";
import enemy from "../../store/enemy";
import enemy2 from "../../store/enemy2";
import enemy3 from "../../store/enemy3";
import boss from "../../store/boss";
import boss2 from "../../store/boss2";
import boss3 from "../../store/boss3";
import { StatusBar } from "expo-status-bar";

const Progress = ({step, steps, height}) => {
  const [width, setWidth] = React.useState(0);
  // анимация
  const animatedValue = React.useRef(new Animatied.Value(-1000)).current;
  const reactive = React.useRef(new Animatied.Value(-1000)).current;

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);


  React.useEffect(() => {
    // -width + width * step / steps

    reactive.setValue(-width + (width * step) / steps)
  }, [step, width]);

  return (
    <>
    <Text >
      {step}/{steps}
    </Text>
    <View 
    onLayout={e => {
      const newWidth = e.nativeEvent.layout.width;

      setWidth(newWidth);
    }}
    style={{
      height,
      backgroundColor: 'green',
      borderRadius: height,

    }}>
      <Animated.View 
      style={{
        height,
        borderRadius: height,
        backgroundColor: 'red',
        width: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        transform: [{
          translateX: animatedValue
        }]
      }}
      />
    </View>
    </>
  )
}

export const HealthBar = observer (() => {
    const arrOfEnemy = [enemy, enemy2, enemy3, boss, boss2, boss3]
    let currentEnemy;

    arrOfEnemy.forEach((enemy) => {
        if ((enemy.world === hero.world && !hero.bossIndicator && !enemy.boss)
            || (enemy.world === hero.world && hero.bossIndicator && enemy.boss)) {
            currentEnemy = enemy
        }
    })
    
    // шаг(где движется полоска). step
    const [index, setIndex] = React.useState(0);
    
    React.useEffect(() => {
      const interval = setInterval(() => {
        // (10 + 1) - это steps.length
        setIndex((index + 1) % (10 + 1))
      }, 1000)

      return () => {
        clearInterval(interval);
      }
    }, [index]);

    return (
        <View style={HealthBarStyle.container}>
            {/* <View style={HealthBarStyle.emptyBar} >
                <View style={{
                    bottom: 10,
                    width: `${currentEnemy.healthPercentage()}%`,
                    height: 15,
                    marginTop: 10,
                    backgroundColor: 'red',
                }}></View>
                <Text style={HealthBarStyle.text}>{currentEnemy.characteristics.health}</Text>
            </View> */}

            <StatusBar hidden />
            <Progress step={index} steps={10} height={20}/>
        </View>
    );
})
