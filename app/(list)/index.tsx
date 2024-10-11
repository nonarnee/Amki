import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { router } from 'expo-router';

import Header from '@/components/Header';
import Colors from '@/constants/Colors';
import { wordset } from '@/constants/Data';
import useWordset from '@/hooks/queries/useWordset';
import client from '@/lib/client';

import commonStyles from '@/styles';

export default function List() {
  // const [data, setData] = useState();

  const { data, isFetching, isError, error } = useWordset();
  console.log('worset api', data);
  console.log('isFetching', isFetching);
  console.log('isError', isError);
  console.log('wordset error', error);

  const handleSetClick = (id: number) => {
    router.push(`/detail/${id}`);
  };

  // async function getWordSet() {
  //   try {
  //     const res = await client.get('https://localhost:3000/api/wordset');
  //     setData(res?.data);
  //   } catch (error) {
  //     console.error(JSON.stringify(error));
  //   }
  // }

  // useEffect(() => {
  //   getWordSet();
  // }, []);
  // console.log('data', data);

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
