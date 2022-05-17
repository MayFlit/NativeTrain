import {action, makeAutoObservable, observable} from "mobx";
import hero from './hero'
import AsyncStorage from "@react-native-async-storage/async-storage";

class Shop {

  @observable shop = 
           [
                {id: 101, name: 'Cassius Staff', attack: 100, price: 5000, rare: 'limegreen', status: "weapons", img: require('../assets/shop/CassiusStaff.png') },
                {id: 102, name: 'Tobias Staff', attack: 200, price: 8000, rare: 'dodgerblue', status: "weapons", img: require('../assets/shop/TobiasStaff.png')},
                {id: 103, name: 'Antero Staff', attack: 300, price: 12000, rare: 'darkorchid', status: "weapons", img: require('../assets/shop/AnteroStaff.png')},
                {id: 104, name: 'Delina Staff', attack: 500, price: 24000, rare: 'darkorange', status: "weapons", img: require('../assets/shop/DelinaStaff.png')},
                {id: 201, name: 'Cassius Robe', defence: 10, price: 2000, rare: 'limegreen', status: "armor", img: require('../assets/shop/CassiusRobe.png')},
                {id: 202, name: 'Tobias Robe', defence: 15, price: 4000, rare: 'dodgerblue', status: "armor", img: require('../assets/shop/TobiasRobe.png')},
                {id: 203, name: 'Antero Robe', defence: 20, price: 6000, rare: 'darkorchid', status: "armor", img: require('../assets/shop/AnteroRobe.png')},
                {id: 204, name: 'Delina Robe', defence: 25, price: 8000, rare: 'darkorange', status: "armor", img: require('../assets/shop/DelinaRobe.png')},
                {id: 301, name: 'Cassius Helmet', defence: 10, price: 2000, rare: 'limegreen', status: "helmet", img: require('../assets/shop/CassiusHelmet.png')},
                {id: 302, name: 'Tobias Helmet', defence: 15, price: 4000, rare: 'dodgerblue', status: "helmet", img: require('../assets/shop/TobiasHelmet.png')},
                {id: 303, name: 'Antero Helmet', defence: 20, price: 6000, rare: 'darkorchid', status: "helmet", img: require('../assets/shop/AnteroHelmet.png')},
                {id: 304, name: 'Delina Helmet', defence: 25, price: 8000, rare: 'darkorange', status: "helmet", img: require('../assets/shop/DelinaHelmet.png')},
                {id: 401, name: 'Cassius Boots', defence: 10, price: 2000, rare: 'limegreen', status: "boots", img: require('../assets/shop/TobiasBoots.png')},
                {id: 402, name: 'Tobias Boots', defence: 15, price: 4000, rare: 'dodgerblue', status: "boots", img: require('../assets/shop/TobiasBoots.png')},
                {id: 403, name: 'Antero Boots', defence: 20, price: 6000, rare: 'darkorchid', status: "boots", img: require('../assets/shop/AnteroBoots.png')},
                {id: 404, name: 'Delina Boots', defence: 25, price: 8000, rare: 'darkorange', status: "boots", img: require('../assets/shop/DelinaBoots.png')},
                {id: 501, name: 'Cassius Ring', defence: 10, price: 2000, rare: 'limegreen', status: "ring", img: require('../assets/shop/CassiusRing.png')},
                {id: 502, name: 'Tobias Ring', defence: 15, price: 4000, rare: 'dodgerblue', status: "ring", img: require('../assets/shop/TobiasRing.png')},
                {id: 503, name: 'Antero Ring', defence: 20, price: 6000, rare: 'darkorchid', status: "ring", img: require('../assets/shop/AnteroRing.png')},
                {id: 504, name: 'Delina Ring', defence: 25, price: 8000, rare: 'darkorange', status: "ring", img: require('../assets/shop/DelinaRing.png')},
                {id: 601, name: 'Cassius Gloves', defence: 10, price: 2000, rare: 'limegreen', status: "gloves", img: require('../assets/shop/CassiusGloves.png')},
                {id: 602, name: 'Tobias Gloves', defence: 15, price: 4000, rare: 'dodgerblue', status: "gloves", img: require('../assets/shop/TobiasGloves.png')},
                {id: 603, name: 'Antero Gloves', defence: 20, price: 6000, rare: 'darkorchid', status: "gloves", img: require('../assets/shop/AnteroGloves.png')},
                {id: 604, name: 'Delina Gloves', defence: 25, price: 8000, rare: 'darkorange', status: "gloves", img: require('../assets/shop/DelinaGloves.png')},
            ]

    constructor() {
        makeAutoObservable(this)
    }

    // Метод для покупки снаряжения
    @action
    buy = (id) => {
        const item = this.shop.find(item => item.id === id && hero.gold >= item.price)
        if (item) {
            if (item.status === 'weapons') {
                hero.equipment.sword = item
            }

            if (item.status === 'armor') {
                hero.equipment.armor = item
            }

            if (item.status === 'helmet') {
                hero.equipment.helmet = item
            }

            if (item.status === 'boots') {
                hero.equipment.boots = item
            }

            if (item.status === 'ring') {
                hero.equipment.ring = item
            }

            if (item.status === 'gloves') {
                hero.equipment.gloves = item
            }

            hero.gold -= item.price

            AsyncStorage.setItem('heroGold', String(hero.gold))
            AsyncStorage.setItem('heroEquipment', JSON.stringify(hero.equipment))}
    }


}


export default new Shop()
