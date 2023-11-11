import React from "react";
import Index_Home from "../screens/Home/Index_Home";
import Login_Admi from "../screens/LoginAdmi/Login_Admi";
import { createStackNavigator } from '@react-navigation/stack';
import Login_Personal from "../screens/LoginPersonal/Login_Personal";
import { View } from "react-native";
import Menu_Admi from "../screens/LoginAdmi/Menu_Admi";

const Stack = createStackNavigator();

const NavigationStack = () => {
    return(
        
        <Stack.Navigator>
            <Stack.Screen name="Index_Home" component={Index_Home} />
            <Stack.Screen name="Login_Admi" component={Login_Admi} />
            <Stack.Screen name="Login_Personal" component={Login_Personal} />
            <Stack.Screen name="Menu_Admi" component={Menu_Admi} />
        </Stack.Navigator>
       
    );

}


export default NavigationStack