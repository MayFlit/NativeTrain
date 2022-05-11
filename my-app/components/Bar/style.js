import {StyleSheet} from 'react-native';

export const BarStyle = StyleSheet.create({
    icons: {
      width: 30,
      height: 30,
    },
    box: {
      position: 'absolute',
      width: '100%',
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'space-between',
    },
    container: {
      width: 100,
      height: 50,
      padding: 10,
      backgroundColor: "red",
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      color: 'white',
      shadowColor: "#f56b00",
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 30,
      shadowRadius: 15,
       elevation: 5,
      fontSize: 20,
      justifyContent: 'space-between',
    },
    shield: {
      
    }
});
