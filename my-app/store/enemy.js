import {action, makeAutoObservable, observable} from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import hero from './hero'


class Enemy {

    @observable characteristics = {attack: 0, health: 100}
    @observable image = require('../assets/enemy/enemy1-1.png')
    @observable world = 1
    images = [require('../assets/enemy/enemy1-1.png'), require('../assets/enemy/enemy1-2.png'), require('../assets/enemy/enemy1-3.png')]

    constructor() {
        makeAutoObservable(this)
    }


    @action
    die = () => {
        if (this.characteristics.health <= 0) {
            this.characteristics.health = 100;
            this.image = this.images[Math.floor(Math.random() * 3)]
            hero.experience+= 20;
            hero.levelUp()
            hero.gold+= 10;
            AsyncStorage.setItem('heroGold', String(hero.gold));
            AsyncStorage.setItem('heroExp', String(hero.experience));
        }
    }

}

export default new Enemy()
