import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { configureFonts, MD3LightTheme, Provider as PaperProvider } from 'react-native-paper';
import { MD3Type } from 'react-native-paper/lib/typescript/types';
import LogInScreen from './screens/login';
import SignUpScreen from './screens/signup';

const Stack = createStackNavigator();
export default function App() {
  const [loaded] = useFonts({
    Galdeano: require('../assets/fonts/Galdeano-Regular.ttf'),
  });
  var theme;

  useEffect(() => {
    if (loaded) {
      const fontConfig:Record<string, MD3Type> = {
        customVariant: {
          fontFamily: 'Galdeano',
          fontWeight: '400',
          letterSpacing: 0.5,
          lineHeight: 22,
          fontSize: 20,
        }
      };
      
      theme = {
        ...MD3LightTheme,
        fonts: configureFonts({config: fontConfig}),
      };
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <Stack.Navigator initialRouteName="login">
          <Stack.Screen name="login" component={LogInScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="signup" component={SignUpScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </PaperProvider>
    );
}