import {action, makeAutoObservable, observable} from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";


class Hero {

    @observable characteristics = {attack: 20, health: 100}

    constructor() {
        makeAutoObservable(this)
    }

    @action
    increment = () => {
        this.characteristics.attack++
    }


    @action
    heroInit = (char) => {
        this.characteristics = JSON.parse(char)
    }


    @action.bound
    init = () => {
        AsyncStorage.getItem('HeroCharacteristics')
            .then(char => {
                if (!char) {
                    AsyncStorage.setItem('HeroCharacteristics', JSON.stringify(this.characteristics))
                }
                this.heroInit(char)
            })
    }

}

export default new Hero()