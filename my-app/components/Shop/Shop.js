import React, { useState } from "react";
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Image } from "react-native";
import {observer} from "mobx-react-lite";
import shop from '../../store/shop';
import {ShopStyle} from "./style";

export const Shop = observer (({ navigation, route }) => {
  const loadScene = () => {
    navigation.goBack();
  }

  console.log('====================================');
  console.log(shop.shop.weapons);
  console.log('====================================');

  return (
          <View style={ShopStyle.background}>
              
              <Button title="Назад" onPress={loadScene}/>

              {/* <Text> {shop.shop.weapons[0].name}  </Text> */}
              <FlatList renderItem={({shop}) => (
                <TouchableOpacity onPress={loadScene} >
                  
                  <Text> {shop.shop.weapons[0].name}  </Text>
                </TouchableOpacity>
              )} />
          </View>
  );
})
