import {StyleSheet} from 'react-native';

export const EnemyStyle = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: 'red',
        position: 'absolute',
        bottom: 300,
        left: 30
    },
    enemy: {
        width: 300,
        height: 300,
    },
    text: {
        fontSize: 40,
        color: 'red',
    }
});

