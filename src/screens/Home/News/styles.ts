import {StyleSheet} from 'react-native';
import {theme} from '../../../utils/themes';

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  button: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    opacity: 0.87,
  },
  button1Text: {
    color: '#BB86FC',
  },
  button2Text: {
    color: '#03DAC6',
  },
  button3Text: {
    color: '#CF6679',
  },
  qaContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  item: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
});

export default styles;
