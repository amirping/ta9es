export interface Store {
    location: string;
    lat: number;
    lon: number;
    unit: "metric" | "imperial";
    setUnit: (unit: "metric" | "imperial") => void;
    setLocation: (location: string) => void;
    setCords: (lat: number, lon: number) => void;
    weatherInfo: any | null;
    setWeatherInfo: (weatherInfo: any) => void;
}
