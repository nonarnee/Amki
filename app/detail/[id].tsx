import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';

import commonStyles from '@/styles';
import Colors from '@/constants/Colors';
import Header from '@/components/Header';

export default function Detail() {
  const { id } = useLocalSearchParams();
  console.log(id);

  const handleBack = () => {
    router.back();
  };

  const words = [
    { head: 'inform', tail: '알리다' },
    { head: 'convince', tail: '확신시키다' },
    { head: 'anticipate', tail: '예상하다, 기대하다' },
    { head: 'particular', tail: '세부사항, 특별한' },
    { head: 'persuasive', tail: '설득력이 있는' },
    { head: 'initiative', tail: '주도(권), 계획' },
    { head: 'optimistic', tail: '낙관적인' },
    { head: 'deliberate', tail: '숙고하다, 신중한' },
  ];

  return (
    <View style={commonStyles.container}>
      <Header title="단어 목록" leftIconName="chevron-back" leftIconOnPress={handleBack} />
      <ScrollView style={styles.list}>
        {words.map((word) => (
          <View style={styles.card} key={word.head}>
            <Text style={styles.cardText}>{word.head}</Text>
            <View style={styles.breakLine} />
            <Text style={styles.cardText}>{word.tail}</Text>
          </View>
        ))}
        <View style={{ width: '100%', height: 150, backgroundColor: Colors.background }} />
      </ScrollView>
      <View style={styles.startButtonWrapper}>
        <LinearGradient colors={[Colors.background, 'transparent']} style={styles.buttonGradient} />
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>학습 시작 👩🏻‍💻</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    fontSize: 18,
    color: Colors.primary,
  },
  list: {
    padding: 20,
  },
  card: {
    padding: 15,
    marginTop: 15,
    backgroundColor: Colors.card,
    borderRadius: 8,
  },
  cardText: {
    color: Colors.text,
  },
  breakLine: {
    marginVertical: 8,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  startButtonWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 50,
    backgroundColor: Colors.background,
  },
  buttonGradient: {
    width: '100%',
    height: 20,
  },
  startButton: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: Colors.primary,
    color: Colors.text,
    borderRadius: 16,
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
