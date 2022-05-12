import {action, makeAutoObservable, observable} from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import hero from './hero'


class Enemy3 {
    @observable characteristics = {attack: 15, health: 300, maxHealth: 300,}
    @observable image = require('../assets/enemy/ork1.gif')
    @observable world = 3
    @observable healthRegenIndicator = false;
    images = [require('../assets/enemy/ork1.gif'), require('../assets/enemy/ork2.gif'), require('../assets/enemy/ork3.gif')]

    constructor() {
        makeAutoObservable(this)
    }


    // Метод для высчитывания процентов оставшегося здоровья
    @action
    healthPercentage = () => {
        return this.characteristics.health * 100 / this.characteristics.maxHealth
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
            this.characteristics.health = 300;
            this.image = this.images.filter((el) => el !== this.image)[[Math.floor(Math.random() * 2)]]
            hero.experience+= 100;
            hero.levelUp()
            hero.gold+= 50;
            AsyncStorage.setItem('heroGold', String(hero.gold));
            AsyncStorage.setItem('heroExp', String(hero.experience));
            return true
        }
    }

}

export default new Enemy3()
