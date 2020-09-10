import React from "react";
import { Day, SmallIcon, SmallText, MiniText } from "./Styles";

export default function Card({ name, icon, temp, hour }) {
  return (
    <Day>
      <MiniText>{name}, {hour}h</MiniText>
	  <SmallIcon source={icon} />
      <SmallText>{temp}°C</SmallText>
    </Day>
  );
}
