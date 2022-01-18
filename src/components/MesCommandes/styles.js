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
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    height: 150,
    // width: '90%',
    marginTop: 20,
    borderRadius: 10,
    borderColor: '#f1f2f6',
    borderWidth: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  img: {
    borderRadius: 10,
  },
  text: {
    lineHeight: 20,
  },
});
