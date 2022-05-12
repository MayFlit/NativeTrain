import {action, makeAutoObservable, observable} from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import enemy from "./enemy";
import enemy2 from "./enemy2";
import enemy3 from './enemy3'
import boss from './boss'
import boss2 from "./boss2";
import boss3 from "./boss3";
import animations from "./animations";



class Hero {
    @observable gold = 0;
    @observable equipment = {sword: {id: 100, name: 'Mitra Staff', attack: 5, price: 100, rare: 'lightgray', img: require('../assets/shop/MitraStaff.png')},
                            armor: {id: 200, name: 'Mitra Robe', defence: 5, price: 50, rare: 'lightgray', img: require('../assets/shop/MitraRobe.png')},
                            helmet: {id: 300, name: 'Mitra Helmet', defence: 5, price: 50, rare: 'lightgray', img: require('../assets/shop/MitraHelmet.png')},
                            boots: {id: 400, name: 'Mitra Boots', defence: 5, price: 50, rare: 'lightgray', img: require('../assets/shop/MitraBoots.png')},
                            ring: {id: 500, name: 'Mitra Ring', defence: 5, price: 50, rare: 'lightgray', img: require('../assets/shop/MitraRing.png')},
                            gloves: {id: 600, name: 'Mitra Gloves', defence: 5, price: 50, rare: 'lightgray', img: require('../assets/shop/MitraGloves.png')},
    }
    @observable characteristics = {attack: 20, health: 100, maxHealth: 100}
    @observable experience = 0;
    @observable level = 1;
    @observable world = 1;


    @observable doubleDamageIndicator = false;
    @observable bossIndicator = false;


    @observable lightningOrbCooldown = false;
    @observable doubleDamageCooldown = false;
    @observable healCooldown = false;
    @observable poisonCooldown = false;


    @observable characteristicsAsyncTrigger = false
    @observable goldAsyncTrigger = false
    @observable equipmentAsyncTrigger = false
    @observable expAsyncTrigger = false
    @observable lvlAsyncTrigger = false
    @observable worldAsyncTrigger = false


    constructor() {
        makeAutoObservable(this)
    }




    // Метод возможности нанести урон
    @action
    attackResolution = (health, attack) => {
        if (health > attack) {
            return true;
        }
    }


    // Метод для вычисления уровня героя
    @action
    levelUp = () => {
        if (this.experience >= ((this.level * (this.level - 1) / 2) * 100)) {
            this.experience -= ((this.level * (this.level - 1) / 2) * 100);
            this.level += 1;
            this.characteristics.attack += 5;
            this.characteristics.maxHealth += 20
            AsyncStorage.setItem('heroCharacteristics', JSON.stringify(this.characteristics))
            AsyncStorage.setItem('heroExp', String(this.experience))
            AsyncStorage.setItem('heroLvl', String(this.level))
        }
    }



    // Метод регенераци здоровья
    @action
    healthRegen = () => {
        setInterval(() => {
            if (this.characteristics.health < this.characteristics.maxHealth) {
                this.healthRegenAction()
                this.healthRegenMaxAction()

            }
        }, 1000)
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



    // Метод переноса персонажа между игровыми уровнями
    @action
    worldUp = () => {
        if (this.world < 3) {
            this.world += 1;
            AsyncStorage.setItem('heroWorld', String(this.world))
        }
    }



    // Система триггера кнопки вызова босса
    @action
    bossFight = () => {
        this.bossIndicator = !this.bossIndicator;
    }


    @action
    bossTrigger = (world, lvl) => {
        if ((world === 1 && lvl >= 10)
        ||  (world === 2 && lvl >= 20)
        ||  (world === 3 && lvl >= 30)) {
            return true
        }
    }



    // Базовая атака героя
    @action
    hit = () => {
        const arrOfEnemy = [enemy, enemy2, enemy3, boss, boss2, boss3]

        arrOfEnemy.forEach((enemy) => {
            if ((enemy.world === this.world && !this.bossIndicator && !enemy.boss)
                || (enemy.world === this.world && this.bossIndicator && enemy.boss)) {

                if (this.attackResolution(this.characteristics.health, enemy.characteristics.attack)) {
                    enemy.characteristics.health -= this.characteristics.attack + this.equipment.sword.attack
                    enemy.healthRegen()
                    enemy.hit()
                    enemy.die()


                    animations.hit()
                    setTimeout(() => {
                        animations.hit()
                    }, 1000)
                } else {
                    if (enemy.boss) {
                        this.bossFight()
                        enemy.healthUp()
                    }
                }

            }
        })
    }




    // Lightning Bolt навык
    @action
    lightningOrb = () => {
        const arrOfEnemy = [enemy, enemy2, enemy3, boss, boss2, boss3]

        arrOfEnemy.forEach((enemy) => {
            if ((enemy.world === this.world && !this.bossIndicator && !enemy.boss)
                || (enemy.world === this.world && this.bossIndicator && enemy.boss)) {

                if (this.attackResolution(this.characteristics.health, enemy.characteristics.attack)) {
                    enemy.characteristics.health -= (this.characteristics.attack + this.equipment.sword.attack) * 10

                    enemy.healthRegen()
                    enemy.hit()
                    enemy.die()


                    animations.lightningOrb()
                    setTimeout(() => {
                        animations.lightningOrb()
                    }, 1000)


                    this.lightningOrbCooldown = true;
                    setTimeout(() => {
                        this.lightningOrbCooldownAction()
                    }, 3000)

                } else {
                    if (enemy.boss) {
                        this.bossFight()
                        enemy.healthUp()
                    }
                }


            }
        })
    }


    @action
    lightningOrbCooldownAction = () => {
        this.lightningOrbCooldown = false;
    }





    // Poison навык
    @action
    poison = () => {
        const arrOfEnemy = [enemy, enemy2, enemy3, boss, boss2, boss3]
        let counter = 0;


        arrOfEnemy.forEach((enemy) => {
            if ((enemy.world === this.world && !this.bossIndicator && !enemy.boss)
                || (enemy.world === this.world && this.bossIndicator && enemy.boss)) {

                if (this.attackResolution(this.characteristics.health, enemy.characteristics.attack)) {
                    enemy.hit()

                    const intervalId = setInterval(() => {
                        const died = this.poisonAction(enemy);
                        counter += 1;

                        if (counter === 10 || died) {
                            clearInterval(intervalId);
                        }
                    }, 500)


                    animations.poison()
                    setTimeout(() => {
                        animations.poison()
                    }, 700)


                    this.poisonCooldown = true;
                    setTimeout(() => {
                        this.poisonCooldownAction()
                    }, 3000)

                } else {
                    if (enemy.boss) {
                        this.bossFight()
                        enemy.healthUp()
                    }
                }
            }
        })
    }


    @action
    poisonAction = (enemy) => {
        enemy.characteristics.health -= enemy.characteristics.attack / 3
        enemy.healthRegen()
        const died = enemy.die()

        return died
    }



    @action
    poisonCooldownAction = () => {
        this.poisonCooldown = false;
    }




    // Heal навык
    @action
    heal = () => {
        if (this.characteristics.health + 100 < this.characteristics.maxHealth) {
            this.characteristics.health += 100;


            animations.heal()
            setTimeout(() => {
                animations.heal()
            }, 1000)


            this.healCooldown = true;
            setTimeout(() => {
                this.healCooldownAction()
            }, 3000)

        } else {
            this.characteristics.health = this.characteristics.maxHealth


            animations.heal()
            setTimeout(() => {
                animations.heal()
            }, 1000)


            this.healCooldown = true;
            setTimeout(() => {
                this.healCooldownAction()
            }, 3000)
        }
    }



    @action
    healCooldownAction = () => {
        this.healCooldown = false;
    }




    // DoubleDamage навык
    @action
    doubleDamage = () => {
        this.doubleDamageIndicator = true;
        this.doubleDamageCooldown = true;

        setTimeout(() => {
            this.doubleDamageAction()
        }, 3000)

        setTimeout(() => {
            this.doubleDamageCooldownAction()
        }, 3000)
    }


    @action
    doubleDamageAction = () => {
        this.doubleDamageIndicator = false;
    }


    @action
    doubleDamageCooldownAction = () => {
        this.doubleDamageCooldown = false;
    }





    // Двойная атака героя для навыка Double Damage
    @action
    doubleHit = () => {
        const arrOfEnemy = [enemy, enemy2, enemy3, boss, boss2, boss3]

        arrOfEnemy.forEach((enemy) => {
            if ((enemy.world === this.world && !this.bossIndicator && !enemy.boss)
                || (enemy.world === this.world && this.bossIndicator && enemy.boss)) {

                if (this.attackResolution(this.characteristics.health, enemy.characteristics.attack)) {
                    enemy.characteristics.health -= (this.characteristics.attack + this.equipment.sword.attack) * 2

                    enemy.healthRegen()
                    enemy.hit()
                    enemy.die()

                    animations.doubleHit()
                    setTimeout(() => {
                        animations.doubleHit()
                    }, 1000)

                } else {
                    if (enemy.boss) {
                        this.bossFight()
                        enemy.healthUp()
                    }
                }
            }
        })
    }




    // Инициализация характеристик персонажа
    @action.bound
    initChar = () => {
        AsyncStorage.getItem('heroCharacteristics')
            .then(char => {
                if (!char) {
                    AsyncStorage.setItem('heroCharacteristics', JSON.stringify(this.characteristics))
                }

                if (char) {
                    this.initCharAction(char)
                }
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
        // AsyncStorage.removeItem('heroExp')
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



    // Инициализация уровня героя
    @action.bound
    initLevel = () => {
        AsyncStorage.getItem('heroLvl')
            .then(level => {
                if (!level) {
                    AsyncStorage.setItem('heroLvl', String(this.level))
                }
                this.initLevelAction(+level)
            })
    }


    @action
    initLevelAction = (level) => {
        this.level = level
    }



    // Инициализация текущего игрового мира
    @action.bound
    initWorld = () => {
        AsyncStorage.getItem('heroWorld')
            .then(world => {
                if (!world) {
                    AsyncStorage.setItem('heroWorld', String(this.world))
                }
                this.initWorldAction(+world)
            })
    }


    @action
    initWorldAction = (world) => {
        this.world = world
    }


}

export default new Hero()