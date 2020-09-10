import React from "react";
import useWeather from "./utils/useWeather";
import Loading from "./components/Loading";
import Weather from "./components/Weather";
import { Container, Text } from "./components/Styles";
import { Button,Alert  } from 'react-native';

export default function App() {
  const weather = useWeather();
 
  return (
    <Container>      
	  	{!weather ? <Loading /> : <Weather forecast={weather} />}
	</Container>
  );
}
