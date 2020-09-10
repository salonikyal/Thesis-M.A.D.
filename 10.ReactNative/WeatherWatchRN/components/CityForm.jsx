import React, {useState} from "react";
import imageDictionary from "../utils/imageDictionary.js";
import {SmallText,TextInput} from "./Styles";
import {View} from 'react-native';

const CityForm = () => {
	const [value, setValue] = useState(0);
  return (
   <View>		
		<View>
			<TextInput placeholder="Enter a city..." />
		</View>		
	</View>
  );
};

export default CityForm;
