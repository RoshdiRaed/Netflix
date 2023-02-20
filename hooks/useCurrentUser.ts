import useSwr from 'swr'
import { useSession } from 'next-auth/react';

import fetcher from '@/libs/fetcher';

const useCurrentUser = () => {
  const { data: session } = useSession();
  const userEmail = session?.user?.email;
  const { data, error, isLoading, mutate } = useSwr(userEmail ? `/api/users/${userEmail}` : null, fetcher);
  return {
    data,
    error,
    isLoading,
    mutate,
  }
};

export default useCurrentUser;
