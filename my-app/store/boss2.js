import {action, makeAutoObservable, observable} from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import hero from './hero'


class Boss2 {

    @observable characteristics = {attack: 40, health: 1000,  maxHealth: 1000,}
    @observable image = require('../assets/enemy/angel2.gif')
    @observable world = 2
    @observable boss = true;
    @observable healthRegenIndicator = false;

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
            this.characteristics.health = 1000;
            hero.experience+= 1000;
            hero.bossFight()
            hero.levelUp()
            hero.worldUp()
            hero.gold+= 1000;
            AsyncStorage.setItem('heroGold', String(hero.gold));
            AsyncStorage.setItem('heroExp', String(hero.experience));
            return true
        }
    }

}

export default new Boss2()
