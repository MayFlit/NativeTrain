import {StyleSheet} from 'react-native';

export const MainMenuStyle = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#DEE9FD'
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  inner: {
    backgroundColor: '#DEE9F7',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E2ECFD',
    borderWidth: 1
  },
  topShadow: {
    shadowOffset: {
      width: -6,
      height: -6
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: "#FBFFFF"
  },
  bottomShadow: {
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: "#B7C4DD"
  },
  playing: {
    color: "#91A1BD",
    fontWeight: "800"
  },
  artContainer: {
    marginVertical: 32,
    alignItems: "center"
  },
  avaArt: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: '#D7E1F3',
    borderWidth: 10
  },
  avaContainer: {
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    color: '#6C7A93',
    fontWeight: '600'
  },
  artist: {
    fontSize: 14,
    marginTop: 6,
    color: "#91A1BD",
    fontWeight: '500'
  },
  trackContainer: {
    marginTop: 32,
    marginBottom: 64
  },
  time: {
    fontSize: 10,
    color: "#91A1BD",
    fontWeight: '700'
  },
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
})
