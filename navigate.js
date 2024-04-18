import React from "react";
import Main from "./components/main";
import Contacts from "./components/contacts";

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <stack.Navigator>
            <stack.Screen 
                name="Main"
                component={Main}
                options={{title: "Главная"}}
                />
            <stack.Screen 
                name="Contact"
                component={Contacts}
                options={{title: "Контакты"}}
                />
        </stack.Navigator>
    </NavigationContainer>;
}


