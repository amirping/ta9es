import { useStore } from "@core/Store";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import styled from "styled-components";

export const UserPreference = () => {
  const { unit, setUnit } = useStore();
  return (
    <Wrapper>
      <Title>Ta9es</Title>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              defaultChecked
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setUnit(event.target.checked? 'imperial' : 'metric');
              }}
            />
          }
          label={`Unit : ${unit}`}
        />
      </FormGroup>
    </Wrapper>
  );
};

const Wrapper = styled.section`
    background: #023047;
    color: white;
    width: 100%;
    padding: 1em 1.5em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.span`
    color: white;
    font-size: 1.5em;
`;
