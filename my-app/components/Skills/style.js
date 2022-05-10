import {StyleSheet} from 'react-native';

export const SkillsStyle = StyleSheet.create({
    box: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      position: 'absolute',
      bottom: 0,
      width: '100%'
    },
    container: {
      flex: 4,
    },
    icons: {
      width: 70,
      height: 70,
      borderRadius: 50,
      borderColor: 'white',
      borderWidth: 2,
    }
});
