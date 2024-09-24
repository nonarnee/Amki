import { router } from 'expo-router';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Header from '@/components/Header';
import Colors from '@/constants/Colors';
import { wordset } from '@/constants/Data';

import commonStyles from '@/styles';

export default function List() {
  const handleSetClick = (id: number) => {
    router.push(`/detail/${id}`);
  };

  return (
    <View style={commonStyles.container}>
      <Header title="세트 목록" />
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
