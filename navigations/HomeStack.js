import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Ex01 from "../screens/week02/Ex01";
import Ex02 from "../screens/week02/Ex02";
import Home from '../screens/week6/Home';
import Ex03 from '../screens/week02/Ex03';
import Ex04 from '../screens/week02/Ex04';
import Ex05 from '../screens/week02/Ex05';
import Ex06 from '../screens/week02/Ex06';
import Ex07 from '../screens/week02/Ex07';
import Ex08 from '../screens/week02/Ex08';
import Ex09 from '../screens/week02/Ex09';
import Ex10 from '../screens/week02/Ex10';
import Ex11 from '../screens/week02/Ex11';
import Ex12 from '../screens/week02/Ex12';
import Travel from '../screens/week3/Travel';
import Resort from '../screens/week4/Resort';
import Health from '../screens/week5/Health';

const Stack = createStackNavigator();
export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: "Home",headerShown:false }}
            />
            <Stack.Screen
                name="Ex01"
                component={Ex01}
                options={{ title: "Exercise 1" }}
            />
            <Stack.Screen
                name="Ex02"
                component={Ex02}
                options={{ title: "Exercise 2" }}
            />
            <Stack.Screen
                name="Ex03"
                component={Ex03}
                options={{ title: "Exercise 3" }}
            />
            <Stack.Screen
                name="Ex04"
                component={Ex04}
                options={{ title: "Exercise 4" }}
            />
            <Stack.Screen
                name="Ex05"
                component={Ex05}
                options={{ title: "Exercise 5" }}
            />
            <Stack.Screen
                name="Ex06"
                component={Ex06}
                options={{ title: "Exercise 6" }}
            />
            <Stack.Screen
                name="Ex07"
                component={Ex07}
                options={{ title: "Exercise 7" }}
            />
            <Stack.Screen
                name="Ex08"
                component={Ex08}
                options={{ title: "Exercise 8" }}
            />
            <Stack.Screen
                name="Ex09"
                component={Ex09}
                options={{ title: "Exercise 9" }}
            />
            <Stack.Screen
                name="Ex10"
                component={Ex10}
                options={{ title: "Exercise 10" }}
            />
            <Stack.Screen
                name="Ex11"
                component={Ex11}
                options={{ title: "Exercise 11" }}
            />
            <Stack.Screen
                name="Ex12"
                component={Ex12}
                options={{ title: "Exercise 12" }}
            />
            <Stack.Screen
                name="Travel"
                component={Travel}
                options={{ title: "Travel" }}
            />
            <Stack.Screen
                name="Resort"
                component={Resort}
                options={{ title: "Resort" }}
            />
            <Stack.Screen
                name="Health"
                component={Health}
                options={{ title: "Health" }}
            />
        </Stack.Navigator>

    );

} 

