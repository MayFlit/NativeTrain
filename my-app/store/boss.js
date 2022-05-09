import {action, makeAutoObservable, observable} from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import hero from './hero'


class Boss {

    @observable characteristics = {attack: 0, health: 500}
    @observable image = require('../assets/enemy/enemy1-1.png')
    @observable world = 1
    @observable boss = true;
    images = [require('../assets/enemy/enemy1-1.png'), require('../assets/enemy/enemy1-2.png'), require('../assets/enemy/enemy1-3.png')]

    constructor() {
        makeAutoObservable(this)
    }


    @action
    die = () => {
        if (this.characteristics.health <= 0) {
            this.characteristics.health = 500;
            this.image = this.images[Math.floor(Math.random() * 3)]
            hero.experience+= 200;
            hero.levelUp()
            hero.gold+= 100;
            AsyncStorage.setItem('heroGold', String(hero.gold));
            AsyncStorage.setItem('heroExp', String(hero.experience));
        }
    }

}

export default new Boss()
