import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Login from './views/login'

const theme = {
  ...DefaultTheme,
  roundness: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: '#000',
    accent: 'green',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Login />
    </PaperProvider>
  );
}