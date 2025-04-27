import {
  useSizes,
  sizes,
  gap,
  getScreenHeight,
} from '@doj/react-native-responsive-kit';
import { Text, View, StyleSheet } from 'react-native';

const result = getScreenHeight();

export default function App() {
  const { rs } = useSizes();
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: sizes.rs(50) }}>Result: {result}</Text>
      <Text style={{ fontSize: sizes.fontSizes.xl2 }}>Result: {result}</Text>
      <Text style={{ fontSize: 50 }}>Result2: {result}</Text>
      <Text style={{ fontSize: rs() }}>Result2: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    ...gap('xl'),
  },
});
