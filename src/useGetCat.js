import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

const useGetCat = () => {
  const {
    data, refetch, isLoading,
  } = useQuery({
    queryKey: ['cat'],
    queryFn: async () => {
      const rsp = await Axios.get('https://catfact.ninja/fact');
      return rsp.data;
    },
  });
  const refetchData = () => {
    refetch();
  };

  return { data, refetchData, isLoading };
};

export default useGetCat;
