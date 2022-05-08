import {action, makeAutoObservable, observable} from "mobx";
import hero from './hero'
import AsyncStorage from "@react-native-async-storage/async-storage";

class Shop {

  @observable shop = {weapons: [
                {id: 101, name: 'Knife', attack: 10, price: 1000, img: require('../assets/shop/knife.png') },
                {id: 102, name: 'Hammer', attack: 20, price: 2000,img: require('../assets/shop/hammer.png')},
                {id: 103, name: 'Axe', attack: 40, price: 4000,  img: require('../assets/shop/axe.png')},
                {id: 104, name: 'Sword', attack: 80, price: 8000, img: require('../assets/shop/sword.png')},
                {id: 105, name: 'Gun', attack: 160, price: 16000, img: require('../assets/shop/gun.png')}],
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
