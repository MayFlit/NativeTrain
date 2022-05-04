import {makeAutoObservable} from "mobx";


class Train {

    count = 0;

    constructor() {
        makeAutoObservable(this)
    }

    increment() {
        this.count++
        console.log(this)
    }


}


export default new Train()