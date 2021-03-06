import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons, AntDesign} from "@expo/vector-icons";
import Home from "./components/Home";
import color from "./components/colors";
import {StatusBar, Text} from "react-native";
import Left from "./components/TopBar/Left";
import Right from "./components/TopBar/Right";
import Profile from "./components/Profile";

import {Provider} from "react-redux";
import {store} from "./components/Store";

const Tab = createBottomTabNavigator();

function MyTabs() {
	return (
		<Tab.Navigator
			initialRouteName='homepage'
			screenOptions={{
				tabBarActiveTintColor: "black",
				headerShown: true,
			}}>
			<Tab.Screen
				name='property list'
				component={Home}
				options={{
					tabBarLabel: "",
					title: "",
					tabBarIcon: ({color, size}) => (
						<AntDesign name='home' size={size} color={color} />
					),
					headerLeft: () => <Left title='gudsurvey' />,
					headerRight: () => <Right />,
					headerShown: true,
				}}
			/>

			<Tab.Screen
				name='Profile'
				component={Profile}
				options={{
					title: "",
					tabBarLabel: "",
					tabBarIcon: ({color, size}) => (
						<AntDesign name='questioncircleo' size={size} color={color} />
					),
					headerLeft: () => <Left title='Profile' />,
					headerShown: true,
				}}
			/>
		</Tab.Navigator>
	);
}

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<StatusBar backgroundColor='gray' />
				<MyTabs />
			</NavigationContainer>
		</Provider>
	);
}
