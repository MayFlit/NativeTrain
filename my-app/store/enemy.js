import {action, makeAutoObservable, observable} from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import hero from './hero'


class Enemy {

    @observable characteristics = {attack: 0, health: 100}
    @observable image = require('../assets/enemy1-1.png')
                images = [require('../assets/enemy1-1.png'), require('../assets/enemy1-2.png'), require('../assets/enemy1-3.png')]

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
    hit = () => {
        this.characteristics.health-= hero.characteristics.attack + hero.equipment.weapon.attack;
    }


    @action
    die = () => {
        if (this.characteristics.health <= 0) {
            this.characteristics.health = 100;
            this.image = this.images[Math.floor(Math.random() * 3)]
            hero.experience+= 20;
            hero.levelSystemFunk();
            hero.gold+= 10;
            AsyncStorage.setItem('heroGold', String(hero.gold));
            AsyncStorage.setItem('heroExp', String(hero.experience));

        }
    }

}

export default new Enemy()
