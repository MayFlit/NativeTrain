import {action, computed, makeAutoObservable, observable} from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";


class Hero {

    @observable characteristics = {attack: 20, health: 100}
    @observable gold = 0;
    @observable equipment = {sword: {name: 'Wooden Sword', attack: 5}}
    @observable experience = 0;
    @observable level = 1;
                levelSystem = [{level: 2 ,exp: 100}, {level: 3 ,exp: 300}, {level: 4 ,exp: 500}, {level: 5 ,exp: 1000}, {level: 6 ,exp: 10000}]


    constructor() {
        makeAutoObservable(this)
    }



    // Пробная функция для отслеживания уровня
    @action
    levelSystemFunk = () => {
        for (let i = 0; i < this.levelSystem.length; i++) {
            if (this.experience >= this.levelSystem[i].exp) {
                this.level = this.levelSystem[i].level
            }
        }
    }


    // Инициализация характеристик персонажа
    @action.bound
    initChar = () => {
        AsyncStorage.getItem('heroCharacteristics')
            .then(char => {
                if (!char) {
                    AsyncStorage.setItem('heroCharacteristics', JSON.stringify(this.characteristics))
                }
                this.initCharAction(char)
            })
    }

    @action
    initCharAction = (char) => {
        this.characteristics = JSON.parse(char)
    }

    // Инициализация золота
    @action.bound
    initGold = () => {
        AsyncStorage.getItem('heroGold')
            .then(gold => {
                if (!gold) {
                    AsyncStorage.setItem('heroGold', String(this.gold))
                }
                this.initGoldAction(+gold)
            })
    }

    @action
    initGoldAction = (gold) => {
        this.gold = gold
    }


    // Инициализация снаряжения
    @action.bound
    initEquip = () => {
        AsyncStorage.getItem('heroEquipment')
            .then(equip => {
                if (!equip) {
                    AsyncStorage.setItem('heroEquipment', JSON.stringify(this.equipment))
                }
                this.initEquipAction(equip)
            })
    }

    @action
    initEquipAction = (equip) => {
        this.equipment = JSON.parse(equip)
    }


    // Инициализация очков опыта
    @action.bound
    initExp = () => {
        AsyncStorage.getItem('heroExp')
            .then(exp => {
                if (!exp) {
                    AsyncStorage.setItem('heroExp', String(this.experience))
                }
                this.initExpAction(+exp)
            })
    }


    @action
    initExpAction = (exp) => {
        this.experience = exp
    }

}

export default new Hero()