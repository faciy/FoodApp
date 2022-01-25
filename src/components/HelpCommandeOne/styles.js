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
  bodyBackground: {
    backgroundColor: 'red',
  },
  content: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  touchable: {
    backgroundColor: '#181829',
    height: 50,
  },
  title: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  message: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  icon: {
    height: 24,
    width: 24,
  },
  button: {
    padding: 16,
  },
});
