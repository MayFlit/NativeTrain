import {StyleSheet} from 'react-native';

export const BossStyle = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: 'red',
        position: 'absolute',
        bottom: 100,
        left: 50

    },
    enemy: {
        width: 300,
        height: 500,
        left: 30,
    },
    text: {
        position: 'absolute',
        top: 150,
        fontSize: 20,
        color: 'red',
    }
});

