import React from "react";
import Index_Home from "../screens/Home/Index_Home";
import Login_Admi from "../screens/LoginAdmi/Login_Admi";
import { createStackNavigator } from '@react-navigation/stack';
import Login_Personal from "../screens/LoginPersonal/Login_Personal";
import { View } from "react-native";
import Menu_Admi from "../screens/LoginAdmi/MenuAdmi/Menu_Admi";
import OpcUsuarios from "../screens/LoginAdmi/MenuAdmi/Usuarios/OpcUsuarios";
import Nuevo_Usuario from "../screens/LoginAdmi/MenuAdmi/Usuarios/Nuevo_Usuario";
import OpcEquipos from "../screens/LoginAdmi/MenuAdmi/Equipos/OpcEquipos";
import Nuevo_Equipo from "../screens/LoginAdmi/MenuAdmi/Equipos/Nuevo_Equipo";
import Menu_Personal from "../screens/LoginPersonal/MenuPersonal/Menu_Personal";
import Nuevo_Prestamo from "../screens/LoginPersonal/MenuPersonal/Nuevo_Prestamo";

const Stack = createStackNavigator();

const NavigationStack = () => {
    return(
        
        <Stack.Navigator>
            <Stack.Screen name="Index_Home" component={Index_Home} 
             options={{
                headerShown: false
            }}
            />
            <Stack.Screen name="Login_Admi" component={Login_Admi} 
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen name="Login_Personal" component={Login_Personal} 
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen name="Menu_Admi" component={Menu_Admi} 
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen name="OpcUsuarios" component={OpcUsuarios} 
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen name="Nuevo_Usuario" component={Nuevo_Usuario} 
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen name="OpcEquipos" component={OpcEquipos} 
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen name="Nuevo_Equipo" component={Nuevo_Equipo} 
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen name="Menu_Personal" component={Menu_Personal} 
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen name="Nuevo_Prestamo" component={Nuevo_Prestamo} 
            options={{
                headerShown: false
            }}
            />
        </Stack.Navigator>
       
    );

}


export default NavigationStack