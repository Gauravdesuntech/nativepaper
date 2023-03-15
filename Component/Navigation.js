import React from "react";
import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";
import HomePage from "./HomePage";
import CombinePage from "./CombinePage";
const Stack = createStackNavigator();
const MainStackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="CombinePage"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#00B386",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
                headerShown: false,
            }}
        >
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="CombinePage" component={CombinePage} />
        </Stack.Navigator>
    );
};

export default MainStackNavigation;
