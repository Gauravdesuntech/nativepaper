import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import TextInputs from './Component/TextInputs';

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
      <View>
        <TextInputs/>
      </View>
     
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
