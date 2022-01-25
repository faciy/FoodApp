import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    // backgroundColor: 'red',
    height: '30%',
  },
  body: {
    backgroundColor: 'white',
    // flex: 4,
    height: '70%',
  },
  helpView: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 40,
    justifyContent: 'space-around',
  },
});
