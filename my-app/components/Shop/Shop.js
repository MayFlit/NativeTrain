import React, { useState } from "react";
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Image, SafeAreaView } from "react-native";
import {observer} from "mobx-react-lite";
import shop from '../../store/shop';
import {ShopStyle} from "./style";

export const Shop = observer (({ navigation }) => {
  const loadScene = () => {
    navigation.goBack();
  }

  // для навигации

  const listTab = [
    { status: 'All'},
    { status: 'Weapon'},
    { status: 'Armor'}
  ];

  const [status, setStatus] = useState('All');
  const [dataList, setDataList] = useState(shop.shop);


  // это чтобы потом фильтровать броню и оружие
  const setStatusFilter = status => {
    // if (status !== 'All') { // weapon and armor
    //   setDataList([...shop.shop.filter(el => el.status === status)])
    // } else {
    //   setDataList(shop.shop)
    // }
    setStatus(status) 
  }


  const renderItem = ({item, index}) => {
    return (
      <View key={index} style={ShopStyle.itemContainer}> 
      <View style={ShopStyle.img}>
      <Image 
      style={ShopStyle.itemImg}
      source={item.img}/>
      </View>

      <View style={ShopStyle.itemBg}>
        <Text style={ShopStyle.itemName}> 
         {item.name}
         {'\n'}
          Attack: {item.attack}
        </Text>
      </View>

      <View style={ShopStyle.button}>
         <TouchableOpacity onPress={loadScene} >
           <Text > 
           Buy
           {'\n'}
           {item.price} 
           </Text>
          </TouchableOpacity>
      </View>

      </View>
    )
  }

  return (
    <SafeAreaView style={ShopStyle.container}>

          <View style={ShopStyle.listTab}>
            <TouchableOpacity onPress={loadScene}>
             <Image 
               style={ShopStyle.exit}
               source={require('../../assets/shop/exit.png')}
               />
            </TouchableOpacity>
            {
              listTab.map(el => (
                <TouchableOpacity 
                style={[ShopStyle.btnTab, status === el.status && ShopStyle.btnTabActive]}
                onPress={() => setStatusFilter(el.status)}
                >
                <Text 
                style={ShopStyle.textTab, status === el.status && ShopStyle.textTabActive}> 
                {el.status}
                 </Text>
              </TouchableOpacity>
              ))
            }
                   

          </View>

          <FlatList 
          data={shop.shop.weapons}
          keyExtractor={(el, i) => i.toString()}
          renderItem={renderItem}
          />

      </SafeAreaView>
  );
})
