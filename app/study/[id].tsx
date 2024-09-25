import { View, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

import commonStyles from '@/styles';
import Header from '@/components/Header';
import { useState } from 'react';
import Colors from '@/constants/Colors';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

export default function Study() {
  const { id } = useLocalSearchParams();
  console.log('study', id);

  const words = [
    { id: 1, head: 'inform', tail: '알리다' },
    { id: 2, head: 'convince', tail: '확신시키다' },
    { id: 3, head: 'anticipate', tail: '예상하다, 기대하다' },
    { id: 4, head: 'particular', tail: '세부사항, 특별한' },
    { id: 5, head: 'persuasive', tail: '설득력이 있는' },
    { id: 6, head: 'initiative', tail: '주도(권), 계획' },
    { id: 7, head: 'optimistic', tail: '낙관적인' },
    { id: 8, head: 'deliberate', tail: '숙고하다, 신중한' },
  ];

  const [testWords, setTestWords] = useState(words);
  const [answerCount, setAnswerCount] = useState(0);
  const [failedWordIds, setFailedWordIds] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBack = () => {
    Alert.alert('학습을 종료하시겠습니까?', '', [
      { text: '확인', onPress: () => router.back() },
      { text: '취소' },
    ]);
  };

  const handleCheck = () => {
    setCurrentIndex((prevState) => prevState + 1);
    setAnswerCount((prevState) => prevState + 1);
  };

  const handleRetest = () => {
    setTestWords(testWords.filter((word) => failedWordIds.includes(word.id)));
    setFailedWordIds([]);
    setCurrentIndex(0);
    setAnswerCount(0);
  };

  const handleWrong = () => {
    setCurrentIndex((prevState) => prevState + 1);
    setFailedWordIds((prevState) => prevState.concat(testWords[currentIndex].id));
  };

  return (
    <View style={commonStyles.container}>
      <Header title="학습하기" leftIconName="chevron-back" leftIconOnPress={handleBack} />

      <View style={styles.countWrapper}>
        <View style={{ ...styles.countBox, backgroundColor: 'green' }}>
          <Text style={styles.countText}>{answerCount}</Text>
        </View>
        <View>
          <Text style={styles.countText}>
            남은단어: {Math.max(0, testWords.length - currentIndex - 1)}
          </Text>
        </View>
        <View style={{ ...styles.countBox, backgroundColor: 'red' }}>
          <Text style={styles.countText}>{failedWordIds.length}</Text>
        </View>
      </View>

      <View style={styles.cardWrapper}>
        <View style={styles.card}>
          <Text style={styles.cardText}>
            {currentIndex <= testWords.length - 1
              ? testWords[currentIndex].head
              : '시험을 완료했습니다 😎'}
          </Text>
        </View>
      </View>

      {testWords.length > currentIndex ? (
        <View style={styles.actionButtonWrapper}>
          <TouchableOpacity
            onPress={handleCheck}
            style={{ ...styles.actionButton, backgroundColor: 'green' }}
          >
            <TabBarIcon name="checkmark" style={{ color: 'white' }} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleWrong}
            style={{ ...styles.actionButton, backgroundColor: 'red' }}
          >
            <TabBarIcon name="close" style={{ color: 'white' }} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.actionButtonWrapper}>
          {failedWordIds.length > 0 ? (
            <TouchableOpacity
              onPress={handleRetest}
              style={{ ...styles.actionButton, backgroundColor: Colors.primary }}
            >
              <Text style={styles.completeButtonText}>틀린 단어 재시험보기 📝</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={handleBack}
              style={{ ...styles.actionButton, backgroundColor: Colors.primary }}
            >
              <Text style={styles.completeButtonText}>학습 완료 🎓</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  countWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  countBox: {
    width: 30,
    height: 30,
    padding: 5,
    borderRadius: 10,
  },
  countText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
  cardWrapper: {
    width: '100%',
    height: 300,
    padding: 10,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: Colors.card,
    borderRadius: 20,
  },
  cardText: {
    fontSize: 32,
    color: Colors.text,
  },
  actionButtonWrapper: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    gap: 10,
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderRadius: 12,
  },
  completeButton: {
    backgroundColor: Colors.primary,
  },
  completeButtonText: {
    fontSize: 16,
    color: 'white',
  },
});
