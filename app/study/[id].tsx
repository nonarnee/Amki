import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Study() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>STUDY</Text>
    </View>
  );
}
