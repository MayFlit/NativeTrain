import {StyleSheet} from 'react-native';

export const HealthBarStyle = StyleSheet.create({
    container: {

    },
    fullBar: {
        bottom: 10,
        width: '80%',
        height: 15,
        marginTop: 10,
        backgroundColor: 'red',
    },
    emptyBar: {
        width: '80%',
        height: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        backgroundColor: 'grey',
    },
});

