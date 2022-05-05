import {action, makeAutoObservable, observable} from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";


class Enemy {

    @observable characteristics = {attack: 0, health: 100}

    constructor() {
        makeAutoObservable(this)
    }

    @action
    increment = () => {
        this.characteristics.attack++
    }


    @action
    enemyInit = (char) => {
        this.characteristics = JSON.parse(char)
    }


    @action.bound
    init = () => {
        // AsyncStorage.removeItem('enemyCharacteristics')
        // AsyncStorage.setItem('enemyCharacteristics', JSON.stringify({attack: 0, health: 200}))
        AsyncStorage.getItem('enemyCharacteristics')
            .then(char => {
                if (!char) {
                    AsyncStorage.setItem('enemyCharacteristics', JSON.stringify(this.characteristics))
                }
                this.enemyInit(char)
            })
    }

}

export default new Enemy()