import {action, makeAutoObservable, observable} from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import hero from './hero'


class Boss3 {

    @observable characteristics = {attack: 50, health: 3000,  maxHealth: 3000,}
    @observable image = require('../assets/enemy/angel3.gif')
    @observable world = 3
    @observable boss = true;
    @observable healthRegenIndicator = false;

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
            this.characteristics.health = 3000;
            this.image = this.images[Math.floor(Math.random() * 3)]
            hero.experience+= 2000;
            hero.bossFight()
            hero.levelUp()
            hero.worldUp()
            hero.gold+= 3000;
            AsyncStorage.setItem('heroGold', String(hero.gold));
            AsyncStorage.setItem('heroExp', String(hero.experience));
        }
    }

}

export default new Boss3()
