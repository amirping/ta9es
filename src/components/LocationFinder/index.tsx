import { useSearchLocations } from "@api/searchLocations";
import { useStore } from "@core/Store";
import {
  Autocomplete,
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
} from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

export const LocationFinder = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { data, isError, isLoading, isFetched, isSuccess, isFetching } =
    useSearchLocations(searchQuery);
  const { setLocation, setCords, location } = useStore();
  return (
    <Wrapper>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        getOptionLabel={(option: any) =>
          `${option.name}, ${option.state}, ${option.country}`
        }
        options={data || []}
        sx={{ width: 300 }}
        loading={(isSuccess && isLoading) || isFetching}
        inputValue={searchQuery}
        onChange={(event, newValue: any) => {
          if (newValue) {
            setLocation(newValue.name);
            setCords(newValue.lat, newValue.lon);
          }
        }}
        onInputChange={(event, newInputValue) => {
          setSearchQuery(newInputValue);
        }}
        placeholder={location}
        renderInput={(params) => (
          <TextField {...params} label="Search for a city" />
        )}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #cdc7e5;
  color: white;
  width: 100%;
  padding: 0.5em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #b3b3b3;
`;
