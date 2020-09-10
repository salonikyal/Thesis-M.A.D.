import React from "react";
import imageDictionary from "../utils/imageDictionary.js";
import { Container, BigText, BigIcon, Description } from "./Styles";

const Loading = (props) => {
  return (
    <Container>
      <BigText>Weather Watch</BigText>
      <BigIcon source={imageDictionary["start"]} />
      <Description>Loading...</Description>
    </Container>
  );
};
export default Loading;
