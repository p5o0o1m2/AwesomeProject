import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './screens/Welcome';
import Ex01 from './screens/week02/Ex01';
import Ex02 from './screens/week02/Ex02';
import Ex03 from './screens/week02/Ex03';
import Ex04 from './screens/week02/Ex04';
import Ex05 from './screens/week02/Ex05';
import Ex06 from './screens/week02/Ex06';
import Ex07 from './screens/week02/Ex07';
import Ex08 from './screens/week02/Ex08';
import Ex09 from './screens/week02/Ex09';
import Ex10 from './screens/week02/Ex10';
import Ex11 from './screens/week02/Ex11';
import Ex12 from './screens/week02/Ex12';
import Travel from './screens/week3/Travel';
import Resort from './screens/week4/Resort';
import Health from './screens/week5/Health';
import Home from './screens/week6/Home';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './navigations/HomeStack';
import BottomTab from './navigations/BottomTab';

export default function App() {
  return (
    // <Home />
    <NavigationContainer>
      <BottomTab />

    </NavigationContainer>
  );
}

