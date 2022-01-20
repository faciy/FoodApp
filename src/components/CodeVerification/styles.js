import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'OpenSans-SemiBold',
  },
  inputFieldOff: {
    borderWidth: 0,
    borderBottomWidth: 1,
    color: '#7F7F7F',
    fontWeight: 'bold',
  },
  inputFieldOn: {
    borderBottomColor: 'black',
    borderColor: 'grey',
    borderWidth: 2,
  },
  OTPInputView: {
    width: '70%',
    height: '20%',
    backgroundColor: 'transparent',
    alignSelf: 'center',
    marginTop: '10%',
  },
  textSend: {
    fontSize: 15,
    fontFamily: 'OpenSans-ExtraBold',
    color: '#172774',
  },
  btnSend: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2%',
  },
});
