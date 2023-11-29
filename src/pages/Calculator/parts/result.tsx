import { StyleSheet, Text, View } from 'react-native';
import RenderImage from '../../../components/RenderImage';

export default function ResultCalculator() {
  return (
    <View style={styles.container}>
      <RenderImage image='result' />
      <Text>Apresentar resultado aqui</Text>
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
