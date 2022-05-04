import {makeAutoObservable} from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";


class Hero {

    characteristics = {attack: 20, health: 100}

    constructor() {
        makeAutoObservable(this)
    }


    increment = () => {
        this.characteristics.attack++
    }


    // init = async () => {
    //     const characteristics = await AsyncStorage.getItem('characteristics')
    //     console.log(characteristics)
    //
    //     if(!characteristics) {
    //         await AsyncStorage.setItem('heroAttack', JSON.stringify(this.characteristics))
    //     }
    //     this.characteristics = JSON.parse(characteristics)
    // }



    init() {
        AsyncStorage.getItem('characteristics')
            .then(char => {
                console.log(char)
                if(!char) {
                    AsyncStorage.setItem('heroAttack', JSON.stringify(this.characteristics))
                }
                this.characteristics = JSON.parse(char)
            })
    }

}

export default new Hero()