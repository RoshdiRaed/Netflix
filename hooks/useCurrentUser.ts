import useSwr from 'swr'
import { useSession } from 'next-auth/react';

import fetcher from '@/libs/fetcher';

const useCurrentUser = () => {
  const { data: session } = useSession();
  const { data, error, isLoading, mutate } = useSwr(`/api/users/${session?.user?.email}`, fetcher);
  return {
    data,
    error,
    isLoading,
    mutate,
  }
};

export default useCurrentUser;
