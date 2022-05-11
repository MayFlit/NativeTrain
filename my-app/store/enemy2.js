import {action, makeAutoObservable, observable} from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import hero from './hero'


class Enemy2 {

    @observable characteristics = {attack: 10, health: 200}
    @observable image = require('../assets/enemy/enemy1-1.png')
    @observable world = 2
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
            this.characteristics.health = 200;
            this.image = this.images[Math.floor(Math.random() * 3)]
            hero.experience+= 40;
            hero.levelUp()
            hero.gold+= 20;
            AsyncStorage.setItem('heroGold', String(hero.gold));
            AsyncStorage.setItem('heroExp', String(hero.experience));
        }
    }

}

export default new Enemy2()
