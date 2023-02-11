import { useStore } from '@core/Store';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


export const WeatherChart = () => {
    const { weatherInfo } = useStore();
    const labels = weatherInfo?.list?.map((item: any) => item.dt_txt.split(' ')[0]) || [];
    const options = {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Forcast of the next 5 days',
          },
        },
      };
    const data = {
    labels,
    datasets: [
        {
            label: 'Weather temperature',
            data: labels.map((date: string) => weatherInfo.list.filter((item: any) => item.dt_txt.split(' ')[0] === date)[0].main.temp),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
    ],
    };
    return (
        <Wrapper>
            <Line options={options} data={data} />
        </Wrapper>
    );
};

  const Wrapper = styled.section`
    background: #023047;
    color: white;
    width: 100%;
    flex-grow: 1;
    padding: 1em 1.5em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-height: 40%;
`;