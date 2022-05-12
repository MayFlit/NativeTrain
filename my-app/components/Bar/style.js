import {StyleSheet, ImageBackground} from 'react-native';

export const BarStyle = StyleSheet.create({
    icons: {
      width: 30,
      height: 30,
    },
    box: {
      // position: 'absolute',
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'space-between',
    },
    container: {
      width: 100,
      height: 50,
      padding: 10,
      color: 'white',
      backgroundColor: '#ff5757',
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 0,
      borderTopLeftRadius: 0,
      shadowOffset:{  width: 10,  height: 10,  },
      shadowColor: '#f90000',
      shadowOpacity: 0.5,
      fontSize: 15,
      shadowRadius: 10,
      elevation: 1,
      justifyContent: 'space-between',
    },
    mainContainer: {
      width: '100%',
    },
    shieldContainer: {
      width: 100,
      height: 50,
      padding: 10,
      color: 'white',
      justifyContent: 'space-between',
    },
    shield: {
      position: 'relevant',
      height: 50,
      width: 50,
      zIndex: -1,
    },
    textShield: {
      position: "absolute",
      zIndex: 5,
      color: 'white',
      fontSize: 16,
      right: 57,
      bottom: 8,
    }
});
