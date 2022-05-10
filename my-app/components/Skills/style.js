import {StyleSheet} from 'react-native';

export const SkillsStyle = StyleSheet.create({
    box: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
      position: 'absolute',
      bottom: 0,
    },
    container: {
      width: 100,
      height: 50,
      padding: 10,
      color: 'white',
      fontSize: 20,
    },
    icons: {
      width: 50,
      height: 50,
      top: 307,
      left: 15,
      borderRadius: 50,
      backgroundColor: "white",
    }
});
