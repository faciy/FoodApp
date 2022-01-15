import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FCC332',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cercle: {
    width: 400,
    height: 400,
    backgroundColor: 'red',
    borderRadius: 400,
    alignSelf: 'center',
    marginTop: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
});
