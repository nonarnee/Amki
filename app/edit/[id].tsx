import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Edit() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>EDIT</Text>
    </View>
  );
}
