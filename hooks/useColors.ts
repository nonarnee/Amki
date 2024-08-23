import { useColorScheme } from 'react-native';

export default function useColors() {
  const colorScheme = useColorScheme();

  if (colorScheme === 'dark') {
    return {
      primary: '#BB86FC',
      background: '#121212',
      card: '#37474F',
      text: '#B2DFDB',
      border: '#CFD8DC',
      notification: '#FF8A65',
    };
  }

  return {
    primary: '#0A74DA',
    background: '#FFFFFF',
    card: '#E0F7FA',
    text: '#00796B',
    border: '#B0BEC5',
    notification: '#FF7043',
  };
}
