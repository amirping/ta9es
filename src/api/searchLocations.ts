import {useQuery} from '@tanstack/react-query';
import {geoClient} from './client';

const searchLocations = async (searchQuery: string) => {
  const {data} = await geoClient.get('', {
    timeout: 4000,
    params: {
        q: searchQuery,
    },
  });
  return data;
};

export function useSearchLocations(searchQuery: string) {
  return useQuery<any>(['searchLocations', searchQuery], () => searchLocations(searchQuery), {
    retry: true,
    enabled: !!searchQuery,
  });
}