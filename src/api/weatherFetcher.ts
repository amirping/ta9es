import { Cords } from '@appTypes/cords';
import { setWeatherInfo } from '@core/Store';
import {useQuery} from '@tanstack/react-query';
import {weatherClient} from './client';

const fetchWeatherInfo = async (cords: Cords, unite: 'metric' | 'imperial') => {
  const {data} = await weatherClient.get('', {
    timeout: 4000,
    params: {
        lon: cords.lon,
        lat: cords.lat,
        units: unite,
    },
  });
  // free data include 40 forcast for day 5 days. reduce them into one forcast per day
  data.list = data.list.filter((item: any, index: number) => index % 8 === 0);
  setWeatherInfo(data);
  return data;
};

export function useWeatherFetcher(cords: Cords, unite: 'metric' | 'imperial') {
  return useQuery<any>(['getWeatherInfo', cords, unite], () => fetchWeatherInfo(cords, unite), {
    retry: true,
    enabled: !!cords,
  });
}