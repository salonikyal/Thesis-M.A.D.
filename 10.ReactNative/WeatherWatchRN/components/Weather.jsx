import React, { useState}  from "react";
import { isSameDay, format } from "date-fns";
import imageDictionary from "../utils/imageDictionary.js";
import Card from "./Card";
import {View, StyleSheet, Alert, Button, Text} from 'react-native';
import Modal from 'react-native-modal';
import CityForm from "./CityForm";
import {
    ContainerLoad,
    CurrentDay,
	ChngCity,
    City,
    BigText,
	SmallText,
	CText,
	DataText,
    BigIcon,
	MediumIcon,
	SmallIcon,
    Temp,
    Description,
    Week,
	Extra,
	ModalView,
} from "./Styles";

const Weather = ({ forecast: { name, list, timezone } }) => {
	
	const [isModalVisible, setIsModalVisible] = useState(false);
	
	const toggleModal = () => {
		setIsModalVisible(!isModalVisible);
	};

    const currentWeather = list.filter((day) => {
        const now = new Date().getTime() + Math.abs(timezone * 1000);
        const currentDate = new Date(day.dt * 1000);
        return isSameDay(now, currentDate);
    });

    const daysByHour = list.map((day) => {
        const dt = new Date(day.dt * 1000);
        return {
            date: dt,
            hour: dt.getHours(),
            name: format(dt, "EEEE"),
            temp: Math.round(day.main.temp),
            icon:
                imageDictionary[day.weather[0].icon] || imageDictionary["02d"],
        };
    });
		
    return (
        currentWeather.length > 0 && (
            <ContainerLoad>
                <CurrentDay>
                    <ChngCity onPress={toggleModal} >
						Change City
					</ChngCity> 
					 <Modal
						isVisible={isModalVisible}
						animationOut={'slideOutUp'}
						animationIn={'slideInDown'}>
						<ModalView>
						  <CityForm/>
						  <View>
							<Button onPress={toggleModal} title="Submit"/> 
						  </View>
						</ModalView>
					  </Modal>
					<City> {name} </City>
                    <BigText>Today</BigText>
                    <MediumIcon
                        source={
                            imageDictionary[
                                currentWeather[0].weather[0].icon
                            ] || imageDictionary["02d"]
                        }
                    />
                    <Temp>{Math.round(currentWeather[0].main.temp)}°C</Temp>
                    <Description>
                        {currentWeather[0].weather[0].description}
                    </Description>
                </CurrentDay>
                <Week horizontal={true} showsHorizontalScrollIndicator={false}>
                    {daysByHour.map((day, index) => (
                        <Card
                            key={index}
                            icon={day.icon}
                            name={day.name.substring(0, 3)}
                            hour={day.hour}
							temp={day.temp}
                        />
                    ))}
                </Week>	
				<Extra>
					<CText>Wind Speed</CText>
					<CText>Humidity</CText>
					<CText>Feels Like</CText>
				</Extra>	
				<Extra>
					<DataText>{currentWeather[0].wind.speed} m/s</DataText>
					<DataText>{currentWeather[0].main.humidity} %</DataText>
					<DataText>{Math.round(currentWeather[0].main.feels_like)} °C</DataText>
				</Extra>
            </ContainerLoad>
        )

			
		
    );
};
export default Weather;
