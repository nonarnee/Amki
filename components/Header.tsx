import type { ComponentProps } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import Colors from '@/constants/Colors';

interface Props {
  title: string;
  leftIconName?: ComponentProps<typeof Ionicons>['name'];
  leftIconOnPress?: () => void;
}

export default function Header({ title, leftIconName, leftIconOnPress }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ ...styles.header, paddingTop: insets.top }}>
      {leftIconName && leftIconOnPress && (
        <TouchableOpacity
          onPress={leftIconOnPress}
          style={{ ...styles.backWrapper, top: insets.top }}
        >
          <TabBarIcon name={leftIconName} style={{ color: Colors.primary }} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: Colors.card,
  },
  backWrapper: {
    position: 'absolute',
    top: 0,
    left: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
  },
});
