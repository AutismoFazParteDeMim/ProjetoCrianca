import React from "react"
import { StatusBar } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { colors } from "./styles"
import Welcome from "./screens/Welcome"
import Login from "./screens/Login"
import Register from "./screens/Register"
import Settings from "./screens/Settings"
import Profile from "./screens/Profile"
import Rotinas from "./screens/Rotinas"
import Expressoes from "./screens/Expressoes"


const Stack = createNativeStackNavigator()

function Routes() {
    return (
        <NavigationContainer>
            <StatusBar
                animated={true}
                backgroundColor={colors.background}
                barStyle="dark-content"
                translucent={false}
                hidden={false} />

            <Stack.Navigator initialRouteName="Expressoes" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Rotinas" component={Rotinas} />
                <Stack.Screen name="Expressoes" component={Expressoes} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes