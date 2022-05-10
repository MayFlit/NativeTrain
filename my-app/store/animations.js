import {action, makeAutoObservable, observable} from "mobx";


class Animations {
    @observable hitIndicator = false
    @observable doubleHitIndicator = false
    @observable lightningOrbIndicator = false;
    @observable poisonIndicator = false;
    @observable healIndicator = false;


    @observable lightningOrbImage = require('../assets/Boom5.gif')
    @observable poisonImage = require('../assets/poison.gif')
    @observable healImage = require('../assets/heal.gif')
    @observable hitImage = require('../assets/hit.gif')
    @observable doubleHitImage = require('../assets/doubleHit.gif')





    constructor() {
        makeAutoObservable(this)
    }



    @action
    lightningOrb = () => {
        this.lightningOrbIndicator = !this.lightningOrbIndicator;
    }

    @action
    poison = () => {
        this.poisonIndicator = !this.poisonIndicator;
    }

    @action
    heal = () => {
        this.healIndicator = !this.healIndicator;
    }

    @action
    hit = () => {
        this.hitIndicator = !this.hitIndicator
    }

    @action
    doubleHit = () => {
        this.doubleHitIndicator = !this.doubleHitIndicator
    }

}

export default new Animations()
