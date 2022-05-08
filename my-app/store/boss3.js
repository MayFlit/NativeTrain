import {action, makeAutoObservable, observable} from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import hero from './hero'


class Boss {

    @observable characteristics = {attack: 0, health: 3000}
    @observable image = require('../assets/enemy/enemy1-1.png')
    @observable world = 3
    images = [require('../assets/enemy/enemy1-1.png'), require('../assets/enemy/enemy1-2.png'), require('../assets/enemy/enemy1-3.png')]

    constructor() {
        makeAutoObservable(this)
    }


    @action
    die = () => {
        if (this.characteristics.health <= 0) {
            this.characteristics.health = 3000;
            this.image = this.images[Math.floor(Math.random() * 3)]
            hero.experience+= 2000;
            hero.levelSystemFunk();
            hero.gold+= 3000;
            AsyncStorage.setItem('heroGold', String(hero.gold));
            AsyncStorage.setItem('heroExp', String(hero.experience));
        }
    }

}

export default new Boss()
