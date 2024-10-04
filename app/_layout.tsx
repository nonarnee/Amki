import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useReactQueryDevTools } from '@dev-plugins/react-query';
import { Stack } from 'expo-router';

import queryClient from '@/lib/queryClient';

export default function RootLayout() {
  useReactQueryDevTools(queryClient);
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="(list)" options={{ headerShown: false }} />
        <Stack.Screen name="detail/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="study/[id]" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>
  );
}
