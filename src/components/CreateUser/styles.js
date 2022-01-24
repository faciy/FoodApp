import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: 'center',
    height: 400,
  },
  food: {
    fontSize: 40,
    top: 20,
    color: 'white',
    fontFamily: 'OpenSans-ExtraBold',
    letterSpacing: 5,
  },
  facebookBtn: {
    width: '50%',
    height: '10%',
    backgroundColor: '#0652DD',
    top: 130,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  textContinued: {
    fontSize: 15,
    color: 'white',
    top: 100,
    fontFamily: 'OpenSans-Light',
  },
  facebook: {
    fontSize: 15,
    color: 'white',
    fontWeight: '700',
    left: 10,
  },
  logoFb: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
  body: {
    flex: 1,
    alignItems: 'center',
  },
  textRegister: {
    fontSize: 25,
    fontFamily: 'OpenSans-ExtraBold',
    color: '#23A082',
    // opacity: 1,
  },
  textConnexion: {
    fontSize: 15,
    fontFamily: 'OpenSans-ExtraBold',
    color: '#23A082',
  },
  exist: {
    fontFamily: 'OpenSans-Italic',
  },
  registerBtn: {
    marginTop: 50,
  },
  connexion: {
    marginTop: 30,
    flexDirection: 'row',
  },
  conditions: {
    marginTop: '40%',
    padding: 20,
  },
});
