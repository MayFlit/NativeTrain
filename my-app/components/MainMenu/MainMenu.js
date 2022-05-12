import React from "react";
import {View, Text, SafeAreaView, Image, Slider} from "react-native";
import {observer} from "mobx-react-lite";
import {AntDesign, Entypo, Ionicons} from '@expo/vector-icons'
import {MainMenuStyle} from "./style";

const gray = "#91A1BD";

export const MainMenu = observer (({navigation}) => {
  const loadScene = () => {
    navigation.navigate('Game');
  }

  const NeuMorph = ({children, size, style}) => {
    return (
      <View style={MainMenuStyle.topShadow}>
        <View style={MainMenuStyle.bottomShadow}>
          <View 
          style={[
            MainMenuStyle.inner,
            {width: size || 40, height: size || 40, borderRadius: size / 2 || 40 / 2},
            style
            ]}
            > 

            {children}
          </View>
        </View>
      </View>
    )
  }

    return (
        <View style={MainMenuStyle.container}>
            {/* <Text style={MainMenuStyle.text} onPress={loadScene}>Играть</Text> */}
            <SafeAreaView style={{ alignSelf: 'stretch'}} >
              <View style={{marginHorizontal: 32, marginTop: 32}}>
                <View style={MainMenuStyle.topContainer} >
                  <NeuMorph size={48}> 
                    <AntDesign name="arrowleft" size={20} color={gray}/>  
                 </NeuMorph> 

                  <View>
                    <Text style={MainMenuStyle.playing}>PLAY NOW</Text>
                  </View>

                  <NeuMorph size={48}>
                   <Entypo name='menu' size={24} color={gray}/>
                  </NeuMorph>
                </View>

                <View style={MainMenuStyle.artContainer}>
                  <NeuMorph size={300}>
                    <Image source={require('../../assets/mage.gif')}
                    style={MainMenuStyle.avaArt} />
                  </NeuMorph>
                </View>


                <View style={MainMenuStyle.avaContainer}>
                  <Text style={MainMenuStyle.title}>Clicker Game</Text>
                  <Text style={MainMenuStyle.artist}>Michail</Text>
                </View>

                <View style={MainMenuStyle.trackContainer}>
                  <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={MainMenuStyle.time}>13:05</Text>
                    <Text style={MainMenuStyle.time}>21:90</Text>
                  </View>
                

                {/* <Slider 
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#8AAAFF"
                maximumTrackTintColor="#DAE6F4"
                thumbTintColor="#7B9BFF"
                /> */}
                </View>

                <View style={MainMenuStyle.controlsContainer}>
                  <NeuMorph size={80}>
                    <Ionicons name="ios-rewind" size={24} color={gray} />
                  </NeuMorph>

                  <NeuMorph size={80} style={{backgroundColor: "#8AAAFF", borderColor: "#8AAAFF"}}>
                    <Ionicons name="ios-pause" size={24} color="#FFFFFF" onPress={loadScene}/>
                  </NeuMorph>

                  <NeuMorph size={80}>
                    <Ionicons name="ios-fastforward" size={24} color={gray} />
                  </NeuMorph>
                </View>

              </View>
            </SafeAreaView>
        </View>
    );
})
