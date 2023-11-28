import { StyleSheet, View } from 'react-native';
import RenderImage from '../../components/Logo';
import FormCalculator from './parts/form';

export default function Calculator() {
  return (
    <View style={styles.container}>
      <RenderImage image='logo' />
      <FormCalculator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
