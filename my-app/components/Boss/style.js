import {StyleSheet} from 'react-native';

export const BossStyle = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 100,
    },
    enemy: {
        width: 300,
        height: 500,
    },
    text: {
        position: 'absolute',
        top: 150,
        fontSize: 20,
        color: 'red',
    },
    hit: {
        width: 100,
        height: 100,
    },
    hitpoints: {
        backgroundColor: "#e74c3c",
        // boxShadow: "inset 0px 0px 8px 2px #bf3729",
        shadowColor: "#bf3729",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 30,
        shadowRadius: 15,
        elevation: 5,
        position: "relative",
        zIndex: -1,
        color: "white",
        fontSize: 14,
        textAlign: "center",
        width: "100%"
    },
    "hitpoints:after": {
        content: "",
        display: "block",
        width: "100%",
        height: "100%",
        boxShadow: "0px 2px 6px 2px rgba(0, 0, 0, 0.55)"
    },
    currentHitpoints: {
        position: "absolute",
        height: "100%",
        backgroundColor: "#2ecc71",
        // boxShadow: "inset 0px 0px 8px 2px #17924b",
        shadowColor: "#17924b",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 30,
        shadowRadius: 15,
        elevation: 5,
        boxSizing: "border-box",
        transition: "width 0.075s ease-in"
    }
});

