import {action, makeAutoObservable, observable} from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import hero from './hero'


class Enemy {

    @observable characteristics = {attack: 5, health: 100, maxHealth: 100,}
    @observable image = require('../assets/enemy/golem1.gif')
    @observable world = 1
    @observable healthRegenIndicator = false;
    images = [require('../assets/enemy/golem1.gif'), require('../assets/enemy/golem2.gif'), require('../assets/enemy/golem3.gif')]

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
            this.characteristics.health = 100;
            this.image = this.images.filter((el) => el !== this.image)[[Math.floor(Math.random() * 2)]]
            hero.experience+= 20000;
            hero.levelUp()
            hero.gold+= 1000;
            AsyncStorage.setItem('heroGold', String(hero.gold));
            AsyncStorage.setItem('heroExp', String(hero.experience));
            return true
        }
    }
}

export default new Enemy()
