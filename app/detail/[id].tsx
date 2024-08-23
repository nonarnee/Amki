import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Detail() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>DETAIL</Text>
    </View>
  );
}
