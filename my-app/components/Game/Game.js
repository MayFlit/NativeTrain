import {View, Image} from "react-native";
import {GameStyles} from "./GameStyles";

function Game() {

    return (
        <View>
            <Image source={require('../../assets/background_main.jpg')} styles={GameStyles.gameArea}/>
        </View>
    );
}

export default Game;