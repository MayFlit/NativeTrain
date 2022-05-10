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
    @observable characteristics = {attack: 20, health: 100, maxHealth: 100}
    @observable gold = 0;
    @observable equipment = {sword: {id: 100, name: 'Wooden Sword', attack: 5, price: 100},
                            armor: {id: 200, name: 'Wooden Armor', defence: 5, price: 50},}
    @observable experience = 0;
    @observable level = 1;
    @observable world = 1;


    @observable doubleDamageIndicator = false;
    @observable bossIndicator = false;


    @observable lightningOrbCooldown = false;
    @observable doubleDamageCooldown = false;
    @observable healCooldown = false;
    @observable poisonCooldown = false;

    constructor() {
        makeAutoObservable(this)
    }




    // Метод для вычисления уровня героя
    @action
    levelUp = () => {
        if (this.experience >= ((this.level * (this.level - 1) / 2) * 100)) {
            this.experience -= ((this.level * (this.level - 1) / 2) * 100);
            this.level += 1;
            this.characteristics.attack += 5;
            this.characteristics.health += 20
            AsyncStorage.setItem('heroCharacteristics', JSON.stringify(this.characteristics))
            AsyncStorage.setItem('heroExp', String(this.experience))
            AsyncStorage.setItem('heroLvl', String(this.level))
        }
    }



    // Метод переноса персонажа между игровыми уровнями
    @action
    worldUp = () => {
        this.world += 1;
    }



    // Базовая атака героя
    @action
    hit = () => {
        const arrOfEnemy = [enemy, enemy2, enemy3, boss, boss2, boss3]

        arrOfEnemy.forEach((enemy) => {
            if ((enemy.world === this.world && !this.bossIndicator && !enemy.boss)
                || (enemy.world === this.world && this.bossIndicator && enemy.boss)) {
                enemy.characteristics.health -= this.characteristics.attack + this.equipment.sword.attack
                enemy.die()


                animations.hit()
                setTimeout(() => {
                    animations.hit()
                }, 1000)

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
                enemy.characteristics.health -= (this.characteristics.attack + this.equipment.sword.attack) * 10
                enemy.die()


                animations.lightningOrb()
                setTimeout(() => {
                    animations.lightningOrb()
                }, 1000)


                this.lightningOrbCooldown = true;
                setTimeout(() => {
                    this.lightningOrbCooldownAction()
                }, 3000)
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
                const intervalId = setInterval(() => {
                    this.poisonAction(enemy);
                    counter += 1;

                    if (counter === 10) {
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

            }
        })
    }


    @action
    poisonAction = (enemy) => {
        enemy.characteristics.health -= 50
        enemy.die()
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
                enemy.characteristics.health -= (this.characteristics.attack + this.equipment.sword.attack) * 2
                enemy.die()


                animations.doubleHit()
                setTimeout(() => {
                    animations.doubleHit()
                }, 1000)
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
        // AsyncStorage.removeItem('heroLvl')
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