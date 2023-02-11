import styled from "styled-components";
import GlobalStyle from "@core/global";
import { UserPreference } from "@components/UserPreference";
import { LocationFinder } from "@components/LocationFinder";
import { WeatherCard } from "@components/WeatherCard";
import { useWeatherFetcher } from "@api/weatherFetcher";
import { useStore } from "@core/Store";
import { useEffect, useState } from "react";
import { WeatherChart } from "@components/WeatherChart";

function App() {
  const { lat, lon, unit } = useStore();
  const [visibleData, setVisibleData] = useState([])
  const { data, isError, isLoading, isFetching, isFetched, isSuccess } = useWeatherFetcher(
    { lat, lon },
    unit
  );

  useEffect(() => {
    if (data && isFetched && isSuccess) {
      setVisibleData(data.list)
    }
  }, [data, isFetched, isSuccess])

  const moveLeft = () => {
    setVisibleData([...visibleData.slice(1), visibleData[0]])
  };

  const moveRight = () => {
    setVisibleData([visibleData[visibleData.length - 1], ...visibleData.slice(0, visibleData.length - 1)])
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...check console</div>;
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <UserPreference />
        <LocationFinder />
        <WeatherNavigation>
          <WeatherButton onClick={moveLeft}>Left</WeatherButton>
          <CardRow>
            {visibleData.map((forcast: any, index: number) => (
              <WeatherCard
                key={index}
                forcast={forcast}
                fetching={isFetching || isLoading}
              />
            ))}
          </CardRow>
          <WeatherButton onClick={moveRight}>Right</WeatherButton>
        </WeatherNavigation>
        <WeatherChart/>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  padding: none;
  margin: none;
  background: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1em;
  overflow-x: hidden;
  transition: all 1s ease;
`;

const WeatherNavigation = styled.div`
  background: #cdc7e5;
  color: white;
  width: 100%;
  padding: 0.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const WeatherButton = styled.div`
  background: #cdc7e5;
  height: 300px;
  color: white;
  border: 1px solid white;
  padding: 0.5em;
  border-radius: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default App;
