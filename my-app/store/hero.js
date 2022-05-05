import {action, makeAutoObservable, observable} from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";


class Hero {

    @observable characteristics = {attack: 20, health: 100}
    @observable gold = 0;
    @observable equipment = {sword: {name: 'Wooden Sword', attack: 5}}



    constructor() {
        makeAutoObservable(this)
    }


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





}

export default new Hero()