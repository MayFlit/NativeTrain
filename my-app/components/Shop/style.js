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
    alignSelf: 'center',
    marginBottom: 20
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
    fontSize: 16
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
    boxShadow: "1px -4px 23px 2px rgba(34, 60, 80, 0.2) inset",
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
    fontSize: "20px",
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
    height: "65px",
    width: "27%",
    textAlign: "center",
    marginTop: "20px"
  },
  exit: {
    width:50,
    height:50
  }
});
