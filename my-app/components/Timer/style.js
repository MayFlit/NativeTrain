import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export const TimerStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 1,
    maxHeight: 20,
  },
  img: {
      width: 70,
      height: 70,
      borderRadius: 50,
  }
});
