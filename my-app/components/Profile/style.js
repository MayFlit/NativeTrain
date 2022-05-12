import {Dimensions, StyleSheet} from 'react-native';

export const ProfileStyle = StyleSheet.create({
      exit: {
        width:50,
        height:50
      },
      bg: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#ecc792',
      },
      heroBg: {
        position: 'absolute',
        marginLeft: '50%',
        top: '50%',

      },
      hero: {
        width: 150,
        height: 150,
      },
      equipContainer: {
        display: 'flex',
        width: '80%',
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
      equipItem: {
         width: '20%',
         alignItems: 'center',
      },
      equipIcon: {
          position: 'absolute',
          height: 70,
          width: 70,
      },
      container: {
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
      },
      iconContainer: {
          display: 'flex',
          height: 70,
          width: 70,
          padding: 40,
          marginBottom: 10,
          borderWidth: 4,
          borderColor: 'orange',
          justifyContent: 'center',
          alignItems: 'center',
      },
      statContainer: {
        display: 'flex',
      },
      statItem: {

      },
      statText: {

      },
      statIcon: {

      },

});
