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

export const HealthBar = observer (() => {
    const arrOfEnemy = [enemy, enemy2, enemy3, boss, boss2, boss3]
    let currentEnemy;

    arrOfEnemy.forEach((enemy) => {
        if ((enemy.world === hero.world && !hero.bossIndicator && !enemy.boss)
            || (enemy.world === hero.world && hero.bossIndicator && enemy.boss)) {
            currentEnemy = enemy
        }
    })

    return (
        <View style={HealthBarStyle.container}>
            <View style={HealthBarStyle.emptyBar} >
                <View
                style={{
                    bottom: 10,
                    width: `${currentEnemy.healthPercentage()}%`,
                    height: 15,
                    marginTop: 10,
                    backgroundColor: 'red',
                    shadowColor: "#c9203c",
                    shadowOffset: {
                    width: 1,
                    height: 1,
                      },
                    shadowOpacity: 30,
                    shadowRadius: 15,
                    elevation: 5,
                }}
                ></View>
                <Text style={HealthBarStyle.text}>{currentEnemy.characteristics.health}</Text>
            </View>
        </View>
    );
})
