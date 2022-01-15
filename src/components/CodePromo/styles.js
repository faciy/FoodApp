import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: '10%',
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.50)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 30,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  body: {
    height: '90%',
    backgroundColor: 'white',
    padding: 20,
  },
  input: {
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    width: '80%',
  },
});
