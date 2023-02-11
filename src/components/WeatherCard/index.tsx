import styled from "styled-components";
import { useStore } from "@core/Store";
import { uniteSign } from "@core/utils";

export const WeatherCard = ({ forcast }: any) => {
  const { unit } = useStore();
  console.log("forcast", forcast);
  return (
    <Wrapper>
      <MainInfo>
        <img
          src={`http://openweathermap.org/img/wn/${forcast.weather[0].icon}@2x.png`}
          alt="weather icon"
        />
        <MainInfoData>
          <span>
          <Label>Temp:</Label> {parseInt(forcast.main.temp)} {uniteSign(unit)}
          </span>
          <span>
            <Label>Feels Like:</Label> {parseInt(forcast.main.feels_like)} {uniteSign(unit)}
          </span>
          <span>{forcast.weather[0].description}</span>
        </MainInfoData>
      </MainInfo>
      <AddionalInfo>
        <span><Label>Humidity</Label>: {forcast.main.humidity}%</span>
        <span><Label>Wind</Label>: {forcast.wind.speed} {unit === 'metric' ? 'm/s' : 'miles/h'}</span>
        <span><Label>Pressure</Label>: {forcast.main.pressure} hPa</span>
        <span><Label>Clouds</Label>: {forcast.clouds.all}%</span>
        
      </AddionalInfo>
      <DateWeather>Info for: {forcast.dt_txt.split(' ')[0]}</DateWeather>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 0.5em;
  cursor: pointer;
  background: #f0e6ef;
  height: 300px;
  width: 250px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  margin: 0 -2px;
  &:last-child, &:first-child {
    opacity: 0.1;
    margin: 0 -150px;
    height: 280px;
  }
  &:nth-child(2), &:nth-child(4) {
    opacity: 0.8;
    z-index: 1;
  }
  &:nth-child(3) {
    opacity: 1;
    z-index: 2;
    height: 330px;
    transition: all 2s ease;
  }
`;

const AddionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: #023047;
  span {
    font-size: 14px;
  }
`;

const MainInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  color: #023047;
`;

const MainInfoData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Label = styled.span`
  font-size: 0.8em;
  color: gray;
`;

const DateWeather = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  color: #023047;
  text-align: right;
  font-size: 0.8em;
`;
