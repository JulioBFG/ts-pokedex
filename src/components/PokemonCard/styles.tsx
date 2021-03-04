import styled from 'styled-components';


export const Card = styled.div`
  display: grid;
  width: 250px;
  height: 350px;
  background-color: #52688F;
  border-radius: 10px;
`;

export const PokemonAvatar = styled.div`
  margin: 30px auto;
  border-radius: 100px;
  width: 150px;
  height: 150px;
  background-color: #ffffff;
  box-shadow:  5px 5px 7px #46587a, -5px -5px 7px #5e78a4;
`;

export const StatsContent = styled.div`
  background-color: #ffffff; 
  border-radius: 10px;
  width: 230px;
  height: 100px;
  margin: auto;
  box-shadow:  5px 5px 7px #46587a, -5px -5px 7px #5e78a4;
`;