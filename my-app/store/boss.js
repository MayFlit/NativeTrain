import {action, makeAutoObservable, observable} from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import hero from './hero'


class Boss {

    @observable characteristics = {attack: 20, health: 5000, maxHealth: 5000,}
    @observable image = require('../assets/enemy/angel1.gif')
    @observable world = 1
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
            this.characteristics.health = this.characteristics.maxHealth;
            hero.experience+= 10000;
            hero.bossFight()
            hero.levelUp()
            hero.worldUp()
            hero.gold+= 5000;
            AsyncStorage.setItem('heroGold', String(hero.gold));
            AsyncStorage.setItem('heroExp', String(hero.experience));
            return true
        }
    }

}

export default new Boss()
