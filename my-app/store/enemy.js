import {action, makeAutoObservable, observable} from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import hero from './hero'


class Enemy {

    @observable characteristics = {attack: 0, health: 100}
    @observable image = 'enemy-1.jpg'

    constructor() {
        makeAutoObservable(this)
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

    @action
    hit = (dmg) => {
        this.characteristics.health-= dmg;
    }


    @action
    die = () => {
        if (this.characteristics.health <= 0) {
            this.characteristics.health = 100;
            hero.gold+= 10;
            AsyncStorage.setItem('heroGold', String(hero.gold));
        }
    }

}

export default new Enemy()