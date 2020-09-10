import styled from "styled-components/native";

export const ContainerLoad = styled.ScrollView`
  flex: 1;
  background-color: #1CACE6;
  width: 100%;
`;
export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1CACE6;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const CurrentDay = styled.View`
  position: relative;
  align-items: center;
   margin-top: 60px;
`;
export const ChngCity = styled.Text`
  font-size: 18px;
  font-weight: 200;
  text-decoration-line: underline;
  color: #033950;
  padding-bottom: 20px;
  margin-right: 10px;
  align-self: flex-end;
`;
export const City = styled.Text`
  font-size: 24px;
  font-weight: 300;
  color: white;
  padding-bottom: 20px;
`;
export const BigText = styled.Text`
  font-size: 35px;
  font-weight: 100;
  color: white;
  padding-bottom: 20px;
`;

export const BigIcon = styled.Image`
  width: 168px;
  height: 168px;
  padding-bottom: 40px;
`;

export const Temp = styled.Text`
  font-size: 80px;
  font-weight: 100;
  color: #bae8e8;
`;
export const Description = styled.Text`
  font-size: 24px;
  font-weight: 100;
  color: #bae8e8;
  padding-top: 20px;
  text-transform: capitalize;
`;

export const Week = styled.ScrollView`
  width: 100%;
  background: #066B95;
  position: relative;
  margin-top: 40px;
  margin-bottom: 40px
  padding: 20px;
`;

export const Extra = styled.View`
	bottom:0;
  width: 100%;
  position: relative;
  background: #1CACE6;
  flexDirection: row;
   justify-content: center;
  align-items: center;
`;

export const Day = styled.View`
  width: 75px;
  justify-content: center;
  align-items: center;
`;

export const MediumIcon = styled.Image`
  width: 80px;
  height: 80px;
`;
export const SmallIcon = styled.Image`
  width: 35px;
  height: 35px;
  margin: 10px;
`;
export const SmallText = styled.Text`
  font-size: 20px;
  font-weight: 200;
  color: white;
`;
export const MiniText = styled.Text`
  font-size: 12px;
  font-weight: 100;
  color: white;
`;
export const CText = styled.Text`
  font-size: 16px;
  font-weight: 100;
  color: lightgrey;
  padding-left: 10px;
  padding-right: 10px;
`;
export const DataText = styled.Text`
  font-size: 20px;
  font-weight: 200;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
`;
export const ModalView = styled.View`
	flex: 0.5;
	background-color: #066B95;
	align-items: center;
	justify-content: center;
	border-color: #fff;
	border-width: 2px;
	border-radius:8px;
`;
export const TextInput = styled.TextInput`
	height:60px;
	width: 300px;
	padding:4px;
	margin-bottom:30px;	
	background-color: white;
	font-size: 16px; 
	border-color: #1CACE6;
	border-width: 3px;
	border-radius:8px;
`;
