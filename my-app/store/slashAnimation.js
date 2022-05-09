import {action, makeAutoObservable, observable} from "mobx";


class SlashAnimation {



    @observable animationIndicator = false;
    @observable currentImage
    @observable arrOfImages = [require('../assets/Animation/Explosion_1.png'),
                          require('../assets/Animation/Explosion_2.png'),
                          require('../assets/Animation/Explosion_3.png'),
                          require('../assets/Animation/Explosion_4.png'),
                          require('../assets/Animation/Explosion_5.png'),
                          require('../assets/Animation/Explosion_6.png'),
                          require('../assets/Animation/Explosion_7.png'),
                          require('../assets/Animation/Explosion_8.png'),
                          require('../assets/Animation/Explosion_9.png'),
                          require('../assets/Animation/Explosion_10.png'),]


    constructor() {
        makeAutoObservable(this)
    }




    @action
    animate = () => {
        let counter = 0;
        const intervalId = setInterval(() => {
            this.animateAction(this.arrOfImages[counter])
            counter += 1;

            if (counter === this.arrOfImages.length) {
                clearInterval(intervalId)
            }


        }, 30)
    }

    @action
    animateAction = (img) => {
        this.currentImage = img;
    }


}

export default new SlashAnimation()
