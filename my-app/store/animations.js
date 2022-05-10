import {action, makeAutoObservable, observable} from "mobx";


class Animations {
    @observable lightningOrbIndicator = false;
    @observable lightningOrbImage = require('../assets/Boom5.gif')


    constructor() {
        makeAutoObservable(this)
    }



    @action
    lightningOrb = () => {
        this.lightningOrbIndicator = !this.lightningOrbIndicator;
    }

}

export default new Animations()
