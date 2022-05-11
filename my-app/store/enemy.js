import {action, makeAutoObservable, observable} from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import hero from './hero'


class Enemy {

    @observable characteristics = {attack: 5, health: 100}
    @observable image = require('../assets/enemy/golem1.gif')
    @observable world = 1
    images = [require('../assets/enemy/golem1.gif'), require('../assets/enemy/golem1.gif'), require('../assets/enemy/golem1.gif')]

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
