import {action, makeAutoObservable, observable} from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import hero from './hero'


class Boss {

    @observable characteristics = {attack: 20, health: 500, maxHealth: 500,}
    @observable image = require('../assets/enemy/enemy1-1.png')
    @observable world = 1
    @observable boss = true;
    @observable healthRegenIndicator = false;
    images = [require('../assets/enemy/enemy1-1.png'), require('../assets/enemy/enemy1-2.png'), require('../assets/enemy/enemy1-3.png')]

    constructor() {
        makeAutoObservable(this)
    }



    // Метод регенераци здоровья
    @action
    healthRegen = () => {
        if (!this.healthRegenIndicator) {
            this.healthRegenIndicatorAction()
            const intervalId = setInterval(() => {
                if (this.characteristics.health < this.characteristics.maxHealth) {
                    this.healthRegenAction()
                    this.healthRegenMaxAction()
                }

                if (this.characteristics.health >= this.characteristics.maxHealth) {
                    clearInterval(intervalId)
                    this.healthRegenIndicatorAction()
                }

            }, 1000)
        }
    }


    @action
    healthRegenIndicatorAction = () => {
        this.healthRegenIndicator = !this.healthRegenIndicator
    }

    @action
    healthRegenAction = () => {
        this.characteristics.health += 10;
    }

    @action
    healthRegenMaxAction = () => {
        if (this.characteristics.health > this.characteristics.maxHealth) {
            this.characteristics.health = this.characteristics.maxHealth
        }
    }


    @action
    healthUp = () => {
        this.characteristics.health = this.characteristics.maxHealth
    }

    @action
    hit = () => {
        hero.characteristics.health -= this.characteristics.attack
    }


    @action
    die = () => {
        if (this.characteristics.health <= 0) {
            this.characteristics.health = 500;
            this.image = this.images[Math.floor(Math.random() * 3)]
            hero.experience+= 200;
            hero.bossFight()
            hero.levelUp()
            hero.worldUp()
            hero.gold+= 100;
            AsyncStorage.setItem('heroGold', String(hero.gold));
            AsyncStorage.setItem('heroExp', String(hero.experience));
        }
    }

}

export default new Boss()
