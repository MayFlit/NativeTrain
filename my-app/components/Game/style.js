import {StyleSheet} from 'react-native';

export const GameStyle = StyleSheet.create({
    text: {
        fontSize: 50,
        color: 'red',
        position: 'absolute',
        bottom: 60,
        right: 65,
    },
    text2: {
        fontSize: 50,
        color: 'red',
        position: 'absolute',
        bottom: 10,
        right: 65,
    },
    shop: {
        width: 50,
        height: 50,
        marginTop: 10,
    },
    container: {
      display: 'flex',
      flex: 1,
      justifyContent: 'space-evenly',
    },
    shopContainer: {
        alignSelf: 'flex-end',
    },
    hero: {
        height: 150,
        width: 100,
    },
    heroContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
  
});

