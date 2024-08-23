import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Colors from '@/constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { wordset } from '@/constants/Data';
import { router } from 'expo-router';

export default function List() {
  const insets = useSafeAreaInsets();

  const handleSetClick = (id: number) => {
    router.push(`/detail/${id}`);
  };

  return (
    <View style={styles.container}>
      <View style={{ ...styles.header, paddingTop: insets.top }}>
        <Text style={styles.title}>세트 목록</Text>
        <TouchableOpacity>
          <Text style={styles.add}>추가 +</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.list}>
        {wordset.map((set) => (
          <TouchableOpacity onPress={() => handleSetClick(set.id)} style={styles.set} key={set.id}>
            <Text style={styles.cardText}>{set.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: Colors.card,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
  },
  add: {
    fontSize: 18,
    color: Colors.primary,
  },
  list: {
    padding: 20,
  },
  set: {
    padding: 20,
    marginTop: 20,
    backgroundColor: Colors.card,
    borderRadius: 8,
  },
  cardText: {
    color: Colors.text,
  },
});
