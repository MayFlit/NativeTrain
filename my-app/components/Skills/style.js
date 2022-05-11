import {StyleSheet} from 'react-native';

export const SkillsStyle = StyleSheet.create({
    box: {
      position: 'absolute',
      bottom: 0,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '100%',
      // minHeight: 125,
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
