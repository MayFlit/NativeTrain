import {StyleSheet} from 'react-native';

export const BarStyle = StyleSheet.create({
    icons: {
      width: 30,
      height: 30,
    },
    box: {
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'space-between',
    },
    container: {
      width: 100,
      height: 50,
      padding: 10,
      color: 'white',
      borderTopRightRadius: 20,
      shadowOffset:{  width: 1,  height: 1,  },
      shadowColor: "#f56b00",
      shadowOpacity: 30,
      fontSize: 15,
      shadowRadius: 1,
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
      position: 'relative',
      height: 35,
      width: 35,
      zIndex: -1,
      top: -10,
    },
    textShield: {
      position: "absolute",
      zIndex: 5,
      color: 'white',
      fontSize: 15,
      right: 100,
      bottom: 24,
    },
    btn: {

    }
});
