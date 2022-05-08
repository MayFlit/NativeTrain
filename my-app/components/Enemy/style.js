import {StyleSheet} from 'react-native';

export const EnemyStyle = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: 'red',
        position: 'absolute',
        bottom: 100,
        left: 50
        
    },
    enemy: {
        width: 300,
        height: 500,
        left: 30,
    },
    text: {
        position: 'absolute',
        top: 150,
        fontSize: 20,
        color: 'red',
    },
    hitpoints: {
    width: "100%",
		backgroundColor: "#e74c3c",
		boxShadow: "inset 0px 0px 8px 2px #bf3729",
		position: "relative",
		zIndex: -1,
    color: "white",
		fontSize: "14px",
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
			boxShadow: "inset 0px 0px 8px 2px #17924b",
			boxSizing: "border-box",
			transition: "width 0.075s ease-in"
		}
});

