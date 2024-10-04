import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';

import Header from '@/components/Header';
import Colors from '@/constants/Colors';

import commonStyles from '@/styles';

export default function Detail() {
  const { id } = useLocalSearchParams();
  console.log('detail', id);

  const handleBack = () => {
    router.back();
  };

  const handleStart = () => {
    router.push(`/study/${id}`);
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

  const words1 = `
    (1, 'inform', '알리다'),
    (1, 'convince', '확신시키다'),
    (1, 'anticipate', '예상하다, 기대하다'),
    (1, 'particular', '세부사항, 특별한'),
    (1, 'persuasive', '설득력이 있는'),
    (1, 'initiative', '주도(권), 계획'),
    (1, 'optimistic', '낙관적인'),
    (1, 'deliberate', '숙고하다, 신중한');
  `;

  const words2 = `
    (2, 'information', '정보'),
    (2, 'approval', '승인'),
    (2, 'equipment', '장비'),
    (2, 'processing', '처리'),
    (2, 'interest', '관심,흥미'),
    (2, 'machinery', '기계류'),
    (2, 'negligence', '부주의'),
    (2, 'luggage/baggage', '수하물'),
    (2, 'manufacture', '제조'),
    (2, 'stationery', '문구류'),
    (2, 'furniture', '가구');
  `;

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
        <LinearGradient
          colors={['rgba(18,18,18,0)', Colors.background]}
          style={styles.buttonGradient}
        />
        <TouchableOpacity onPress={handleStart} style={styles.startButton}>
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
    position: 'absolute',
    top: -20,
    left: 20,
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
    zIndex: 1,
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
