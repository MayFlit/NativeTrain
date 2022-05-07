import {action, makeAutoObservable, observable} from "mobx";
import hero from './hero'
import AsyncStorage from "@react-native-async-storage/async-storage";

class Shop {

  @observable shop = {weapons: [
                {id: 101, name: 'Bone Sword', attack: 10, price: 1000},
                {id: 102, name: 'Steel Sword', attack: 20, price: 2000},
                {id: 103, name: 'Golden Sword', attack: 40, price: 4000},
                {id: 104, name: 'Diamond Sword', attack: 80, price: 8000},
                {id: 105, name: 'Damasked Sword', attack: 160, price: 16000}],
            armor: [
                {id: 201, name: 'Bone Armor', defence: 10, price: 500},
                {id: 202, name: 'Steel Armor', defence: 15, price: 1000},
                {id: 203, name: 'Golden Armor', defence: 20, price: 1500},
                {id: 204, name: 'Diamond Armor', defence: 25, price: 2000},
                {id: 205, name: 'Damasked Armor', defence: 30, price: 2500},
            ]
    }

    constructor() {
        makeAutoObservable(this)
    }

    // Метод для покупки снаряжения
    @action
    buy = (id) => {
        const weapon = this.shop.weapons.find(wep => wep.id === id && hero.gold >= wep.price)
        if (weapon) {
            hero.equipment.sword = weapon;
            hero.gold -= weapon.price
            // AsyncStorage
        }

        const armor = this.shop.armor.find(arm => arm.id === id && hero.gold >= arm.price)
        if (armor) {
            hero.equipment.armor = armor;
            hero.gold -= armor.price
            // AsyncStorage
        }
    }


}


export default new Shop()
