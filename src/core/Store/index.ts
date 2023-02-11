import {create} from 'zustand';
import { Store } from '@appTypes/index';

export const useStore = create<Store>((set, get) => ({
    location: 'Tunis, Tunis, TN',
    lat: 36.81897,
    lon: 10.16579,
    unit: 'metric',
    setUnit: (unit:  "metric" | "imperial") => set({ unit }),
    setLocation: (location: string) => set({ location }),
    setCords: (lat: number, lon: number) => set({ lat, lon }),
    weatherInfo: null,
    setWeatherInfo: (weatherInfo: any) => set({ weatherInfo }),
}));

export const setWeatherInfo = (weatherInfo: any) => {
    useStore.getState().setWeatherInfo(weatherInfo);
}