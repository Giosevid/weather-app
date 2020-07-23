import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  bgContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#A0A0A0',
  },
  userContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  userTitle: {
    marginVertical: 10,
  },
  userText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
