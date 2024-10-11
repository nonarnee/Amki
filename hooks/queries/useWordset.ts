import { useQuery } from '@tanstack/react-query';

import client from '@/lib/client';

export default function useWordset() {
  return useQuery({
    queryKey: ['wordset'],
    queryFn: () => client.get('/wordset/'),
  });
}
