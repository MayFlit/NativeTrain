import {StyleSheet} from 'react-native';

export const BarStyle = StyleSheet.create({
    icons: {
      width: 30,
      height: 30,
    },
    box: {
      flexDirection: 'row',
      flex: 1,
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
      boxShadow: "1px 1px 30px 15px #f56b00",
      fontSize: 20,
    },
    shield: {
      
    }
});
