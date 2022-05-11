import {action, makeAutoObservable, observable} from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import hero from './hero'


class Enemy2 {

    @observable characteristics = {attack: 10, health: 200, maxHealth: 200,}
    @observable image = require('../assets/enemy/reaper1.gif')
    @observable world = 2
    @observable healthRegenIndicator = false;
    images = [require('../assets/enemy/reaper1.gif'), require('../assets/enemy/reaper2.gif'), require('../assets/enemy/reaper3.gif')]

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
    hit = () => {
        hero.characteristics.health -= this.characteristics.attack
    }


    @action
    die = () => {
        if (this.characteristics.health <= 0) {
            this.characteristics.health = 200;
            this.image = this.images[Math.floor(Math.random() * 3)]
            hero.experience+= 400;
            hero.levelUp()
            hero.gold+= 20;
            AsyncStorage.setItem('heroGold', String(hero.gold));
            AsyncStorage.setItem('heroExp', String(hero.experience));
        }
    }

}

export default new Enemy2()
