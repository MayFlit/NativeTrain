import {StyleSheet} from 'react-native';

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
        marginBottom: '50%'

      },
      hero: {
        width: 150,
        height: 200,
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
      statContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      statItem: {
        width: '40%',
      },
      statText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'brown',

      },
      statIcon: {

      },
});
