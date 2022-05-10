import React from "react";
import {SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';
import hero from '../../store/hero';
import {observer} from "mobx-react-lite";
import {SkillsStyle} from "./style";


export const Skills = observer (() => {
return (
            <SafeAreaView style={SkillsStyle.box}>

                <TouchableOpacity onPress={() => {hero.lightningOrb()}}>
                  <Text style={SkillsStyle.container}> <Image source={require('../../assets/skills/lightningBoltIcon.png')} style={SkillsStyle.icons} /> </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {hero.poison()}}>
                  <Text style={SkillsStyle.container}><Image source={require('../../assets/skills/poisonIcon.png')} style={SkillsStyle.icons}/> </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {hero.heal()}}>
                <Text style={SkillsStyle.container}><Image source={require('../../assets/skills/healIcon.png')} style={SkillsStyle.icons}/> </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {hero.doubleDamage()}}>
                <Text style={SkillsStyle.container}><Image source={require('../../assets/skills/doubleDamageIcon.png')} style={SkillsStyle.icons}/></Text>
                </TouchableOpacity>

            </SafeAreaView>
    );
})
