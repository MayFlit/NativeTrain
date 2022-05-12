import {StyleSheet} from 'react-native';

export const HealthBarStyle = StyleSheet.create({
    container: {
      padding: 20,
    },
    emptyBar: {
        width: '80%',
        height: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        backgroundColor: 'grey',
        shadowColor: "#17924b",
        shadowOffset: {
       width: 1,
       height: 1,
           },
       shadowOpacity: 30,
        shadowRadius: 15,
        elevation: 5,
    },
    text: {
        position: 'absolute',
        left: '50%',
        color: 'white',
        textAlign: 'center',
    }
});

