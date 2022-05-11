import React from "react";
import {SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';
import hero from '../../store/hero';
import {observer} from "mobx-react-lite";
import {SkillsStyle} from "./style";
import { Timer, Timer2, Timer3, Timer4 } from '../Timer/Timer';


export const Skills = observer (() => {
return (
            <SafeAreaView style={SkillsStyle.box}>
                <TouchableOpacity onPress={() => {hero.lightningOrb()}}>
                 
                  <Text style={SkillsStyle.container}> 
                  <Timer />  
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {hero.poison()}}>
                  <Text style={SkillsStyle.container}>
                    <Timer2/>
                     </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {hero.heal()}}>
                <Text style={SkillsStyle.container}>
                  <Timer3 />
                   </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {hero.doubleDamage()}}>
                <Text style={SkillsStyle.container}>
                  <Timer4 />
                </Text>
                </TouchableOpacity>

            </SafeAreaView>
    );
})
