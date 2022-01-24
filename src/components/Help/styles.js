import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  header: {
    height: '8%',
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0, 0, 0, 0.50)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 30,
    padding: 20,
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    height: '92%',
    backgroundColor: 'white',
    padding: 20,
  },
  input: {
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    width: '80%',
  },
  card: {
    backgroundColor: 'white',
    width: '100%',
    height: '55%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.50)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 20,
  },
});
