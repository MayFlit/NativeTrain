import {action, makeAutoObservable, observable} from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import hero from './hero'


class Enemy3 {
    @observable characteristics = {attack: 15, health: 300}
    @observable image = require('../assets/enemy/enemy1-1.png')
    @observable world = 3
    images = [require('../assets/enemy/enemy1-1.png'), require('../assets/enemy/enemy1-2.png'), require('../assets/enemy/enemy1-3.png')]

    constructor() {
        makeAutoObservable(this)
    }


    @action
    hit = () => {
        hero.characteristics.health -= this.characteristics.attack
    }

    @action
    die = () => {
        if (this.characteristics.health <= 0) {
            this.characteristics.health = 300;
            this.image = this.images[Math.floor(Math.random() * 3)]
            hero.experience+= 100;
            hero.levelUp()
            hero.gold+= 50;
            AsyncStorage.setItem('heroGold', String(hero.gold));
            AsyncStorage.setItem('heroExp', String(hero.experience));
        }
    }

}

export default new Enemy3()
