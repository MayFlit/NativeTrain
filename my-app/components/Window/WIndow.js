import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, SafeAreaView, Button, Alert, Image} from 'react-native';

export default function App() {
    // const hello = () => console.log('lalaila')
    // const lalaila = () => Alert.alert('Lalaila', 'Lalaila inner', [
    //   {text: 'Да', onPress: () => console.log('Да')},
    //   {text: 'Отмена', onPress: () => console.log('Отмена')},
    // ])


    return (
        <SafeAreaView   style={styles.container}>
            <Text></Text>
            {/*<Image source={require('./assets/background_main.jpg')}/>*/}
            {/*<Button title='Играть' onPress={hello}/>*/}
            {/*<Button title='Выйти' onPress={lalaila}/>*/}



            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
