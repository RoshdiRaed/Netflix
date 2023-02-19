import useSwr from 'swr'
import fetcher from '@/libs/fetcher';

const useMovieId = (id: string) => {
  const { data, error, isLoading } = useSwr(`/api/movies/${id}`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading
  }
};

export default useMovieId;
