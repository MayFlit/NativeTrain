import {action, makeAutoObservable, observable} from "mobx";
import hero from './hero'

class Shop {

  @observable shop = {
            weapons: [
                {id: 101, name: 'Cassius Staff', attack: 10, price: 1000, rare: 'limegreen', img: require('../assets/shop/CassiusStaff.png') },
                {id: 102, name: 'Tobias Staff', attack: 20, price: 2000, rare: 'dodgerblue', img: require('../assets/shop/TobiasStaff.png')},
                {id: 103, name: 'Antero Staff', attack: 40, price: 4000, rare: 'darkorchid', img: require('../assets/shop/AnteroStaff.png')},
                {id: 104, name: 'Delina Staff', attack: 80, price: 8000, rare: 'darkorange', img: require('../assets/shop/DelinaStaff.png')},],
            armor: [
                {id: 201, name: 'Cassius Robe', defence: 10, price: 500, rare: 'limegreen', img: require('../assets/shop/CassiusRobe.png')},
                {id: 202, name: 'Tobias Robe', defence: 15, price: 1000, rare: 'dodgerblue', img: require('../assets/shop/TobiasRobe.png')},
                {id: 203, name: 'Antero Robe', defence: 20, price: 1500, rare: 'darkorchid', img: require('../assets/shop/AnteroRobe.png')},
                {id: 204, name: 'Delina Robe', defence: 25, price: 2000, rare: 'darkorange', img: require('../assets/shop/DelinaRobe.png')},],
              helmet: [
                  {id: 301, name: 'Cassius Helmet', defence: 10, price: 500, rare: 'limegreen', img: require('../assets/shop/CassiusHelmet.png')},
                  {id: 302, name: 'Tobias Helmet', defence: 15, price: 1000, rare: 'dodgerblue', img: require('../assets/shop/TobiasHelmet.png')},
                  {id: 303, name: 'Antero Helmet', defence: 20, price: 1500, rare: 'darkorchid', img: require('../assets/shop/AnteroHelmet.png')},
                  {id: 304, name: 'Delina Helmet', defence: 25, price: 2000, rare: 'darkorange', img: require('../assets/shop/DelinaHelmet.png')},],
              boots: [
                  {id: 401, name: 'Cassius Boots', defence: 10, price: 500, rare: 'limegreen', img: require('../assets/shop/TobiasBoots.png')},
                  {id: 402, name: 'Tobias Boots', defence: 15, price: 1000, rare: 'dodgerblue', img: require('../assets/shop/TobiasBoots.png')},
                  {id: 403, name: 'Antero Boots', defence: 20, price: 1500, rare: 'darkorchid', img: require('../assets/shop/AnteroBoots.png')},
                  {id: 404, name: 'Delina Boots', defence: 25, price: 2000, rare: 'darkorange', img: require('../assets/shop/DelinaBoots.png')},],
              ring: [
                  {id: 501, name: 'Cassius Ring', defence: 10, price: 500, rare: 'limegreen', img: require('../assets/shop/CassiusRing.png')},
                  {id: 502, name: 'Tobias Ring', defence: 15, price: 1000, rare: 'dodgerblue', img: require('../assets/shop/TobiasRing.png')},
                  {id: 503, name: 'Antero Ring', defence: 20, price: 1500, rare: 'darkorchid', img: require('../assets/shop/AnteroRing.png')},
                  {id: 504, name: 'Delina Ring', defence: 25, price: 2000, rare: 'darkorange', img: require('../assets/shop/DelinaRing.png')},],
              gloves: [
                  {id: 601, name: 'Cassius Gloves', defence: 10, price: 500, rare: 'limegreen', img: require('../assets/shop/CassiusGloves.png')},
                  {id: 602, name: 'Tobias Gloves', defence: 15, price: 1000, rare: 'dodgerblue', img: require('../assets/shop/TobiasGloves.png')},
                  {id: 603, name: 'Antero Gloves', defence: 20, price: 1500, rare: 'darkorchid', img: require('../assets/shop/AnteroGloves.png')},
                  {id: 604, name: 'Delina Gloves', defence: 25, price: 2000, rare: 'darkorange', img: require('../assets/shop/DelinaGloves.png')},],
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
