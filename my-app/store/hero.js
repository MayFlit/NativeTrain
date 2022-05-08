import {action, computed, makeAutoObservable, observable} from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import enemy from "./enemy";
import enemy2 from "./enemy2";
import enemy3 from './enemy3'
import boss from './boss'


class Hero {
    @observable characteristics = {attack: 20, health: 100, maxHealth: 100}
    @observable gold = 0;
    @observable equipment = {sword: {id: 100, name: 'Wooden Sword', attack: 5, price: 100},
                            armor: {id: 200, name: 'Wooden Armor', defence: 5, price: 50},}
    @observable experience = 0;
    @observable level = 1;
    @observable world = 1;


    @observable doubleDamageIndicator = false;
    @observable bossIndicator = false;


    @observable slashCooldown = false;
    @observable doubleDamageCooldown = false;
    @observable healCooldown = false;
    @observable bleedCooldown = false;

    @observable levelSystem = [{level: 2 ,exp: 100}, {level: 3 ,exp: 300}, {level: 4 ,exp: 500}, {level: 5 ,exp: 1000}, {level: 6 ,exp: 10000},]


    constructor() {
        makeAutoObservable(this)
    }




    //Пробная функция для отслеживания уровня
    @action
    levelSystemFunk = () => {
        for (let i = 0; i < this.levelSystem.length; i++) {
            if (this.experience >= this.levelSystem[i].exp) {
                this.level = this.levelSystem[i].level
            }
        }
    }


    // @computed
    // get levelSystemFunk() {
    //     console.log('asdas')
    //     for (let i = 0; i < this.levelSystem.length; i++) {
    //         if (this.experience >= this.levelSystem[i].exp) {
    //             return this.levelSystem[i].level
    //         }
    //     }
    // }






    // Тестовый метод для проверки разных миров
    @action
    worldUp = () => {
        this.world += 1;
    }


    // Базовая атака героя
    @action
    hit = () => {
        const arrOfEnemy = [enemy, enemy2, enemy3, boss]

        arrOfEnemy.forEach((enemy) => {
            if ((enemy.world === this.world && !this.bossIndicator)
                || (enemy.world = this.world && this.bossIndicator)) {
                enemy.characteristics.health -= this.characteristics.attack + this.equipment.sword.attack
                enemy.die()
            }
        })
    }


    // Slash навык
    @action
    slash = () => {
        const arrOfEnemy = [enemy, enemy2, enemy3]

        arrOfEnemy.forEach((enemy) => {
            if ((enemy.world === this.world && !this.bossIndicator)
                || (enemy.world = this.world && this.bossIndicator)) {
                enemy.characteristics.health -= (this.characteristics.attack + this.equipment.sword.attack) * 10
                enemy.die()

                this.slashCooldown = true;
                setTimeout(() => {
                    this.slashCooldownAction()
                }, 3000)
            }
        })
    }

    @action
    slashCooldownAction = () => {
        this.slashCooldown = false;
    }




    // Bleed навык
    @action
    bleed = () => {
        const arrOfEnemy = [enemy, enemy2, enemy3]
        let counter = 0;

        arrOfEnemy.forEach((enemy) => {
            if ((enemy.world === this.world && !this.bossIndicator)
                || (enemy.world = this.world && this.bossIndicator)) {
                const intervalId = setInterval(() => {
                    this.bleedAction(enemy);
                    counter += 1;

                    if (counter === 10) {
                        clearInterval(intervalId);
                    }
                }, 500)


                this.bleedCooldown = true;
                setTimeout(() => {
                    this.bleedCooldownAction()
                }, 3000)

            }
        })
    }


    @action
    bleedAction = (enemy) => {
        enemy.characteristics.health -= 50
        enemy.die()
    }



    @action
    bleedCooldownAction = () => {
        this.bleedCooldown = false;
    }




    // Heal навык
    @action
    heal = () => {
        if (this.characteristics.health + 100 < this.characteristics.maxHealth) {
            this.characteristics.health += 100;

            this.healCooldown = true;
            setTimeout(() => {
                this.healCooldownAction()
            }, 3000)

        } else {
            this.characteristics.health = this.characteristics.maxHealth
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
        const arrOfEnemy = [enemy, enemy2, enemy3]

        arrOfEnemy.forEach((enemy) => {
            if ((enemy.world === this.world && !this.bossIndicator)
                || (enemy.world = this.world && this.bossIndicator)) {
                enemy.characteristics.health -= (this.characteristics.attack + this.equipment.sword.attack) * 2
                enemy.die()
            }
        })
    }



    // Инициализация характеристик персонажа
    @action.bound
    initChar = () => {
        // AsyncStorage.removeItem('heroCharacteristics')
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



    // Инициализация уровня героя
    // @action.bound
    // initLevel = () => {
    //     AsyncStorage.getItem('heroLevel')
    //         .then(level => {
    //             if (!level) {
    //                 AsyncStorage.setItem('heroLevel', String(this.level))
    //             }
    //             this.initWorldAction(+level)
    //         })
    // }
    //
    //
    // @action
    // initWorldAction = (level) => {
    //     this.level = level
    // }



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