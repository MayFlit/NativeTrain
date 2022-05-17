import React from "react";
import {SafeAreaView, Text, TouchableOpacity } from 'react-native';
import {observer} from "mobx-react-lite";
import {SkillsStyle} from "./style";
import { Timer, Timer2, Timer3, Timer4 } from '../Timer/Timer';


export const Skills = observer (() => {
return (
            <SafeAreaView style={SkillsStyle.box}>
                <TouchableOpacity>
                  <Text style={SkillsStyle.container}>
                  <Timer />
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={SkillsStyle.container}>
                    <Timer2/>
                     </Text>
                </TouchableOpacity>

                <TouchableOpacity >
                <Text style={SkillsStyle.container}>
                  <Timer3 />
                   </Text>
                </TouchableOpacity>

                <TouchableOpacity >
                <Text style={SkillsStyle.container}>
                  <Timer4 />
                </Text>
                </TouchableOpacity>

            </SafeAreaView>
    );
})
