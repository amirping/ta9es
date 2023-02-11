export const uniteSign = (unite: 'metric' | 'imperial') => {
    return unite === 'metric' ? '°C' : '°F';
};