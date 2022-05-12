import {Dimensions, StyleSheet} from 'react-native';

export const ShopStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    backgroundColor: '#ecc792',
  },
  listTab: {
    flexDirection: 'row',
    flexWrap: "wrap",
    alignSelf: 'center',
    marginBottom: 20,
    justifyContent: "center"
  },
  btnTab: {
    width: Dimensions.get('window').width / 3.5,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#ecc792',
    padding: 10,
    justifyContent: 'center'
  },
  textTab: {
    // fontSize: 16,
    width: 30,
    height: 30
  },
  btnTabActive: {
    backgroundColor: '#b17042',
  },
  textTabActive: {
    color: '#fff'
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    shadowColor: "rgba(34, 60, 80, 0.2)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20
  },
  img: {
    padding: 10,
  },
  itemImg: {
    width: 30,
    height: 30,
    padding: 38
  },
  itemBg: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    fontSize: 20,
    height: 100,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: "#3c902f",
    borderRadius: "7px",
    border: "4px solid #a1e272",
    padding: 10,
    height: 65,
    width: "27%",
    textAlign: "center",
    marginTop: 20
  },
  exit: {
    width:30,
    height:30
  }
});
