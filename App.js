import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider, Text } from 'react-native-paper';
import CombinePage from './Component/CombinePage';
import Icons from './Component/Icons';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigation from './Component/Navigation';



const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
      <MainStackNavigation/>
      </NavigationContainer>
    </PaperProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
