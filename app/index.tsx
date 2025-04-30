import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { configureFonts, MD3LightTheme, Provider as PaperProvider } from 'react-native-paper';
import { MD3Type } from 'react-native-paper/lib/typescript/types';
import LogInScreen from './screens/login';
import SignUpScreen from './screens/signup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Galdeano: require('../assets/fonts/Galdeano-Regular.ttf'),
  });

  const defaultTheme = {
    ...MD3LightTheme,
  };

  const [theme, setTheme] = React.useState(defaultTheme);

  useEffect(() => {
    if (loaded) {
      const fontConfig: Record<string, MD3Type> = {
        customVariant: {
          fontFamily: 'Galdeano',
          fontWeight: '400',
          letterSpacing: 0.5,
          lineHeight: 22,
          fontSize: 20,
        },
      };

      const updatedTheme = {
        ...MD3LightTheme,
        fonts: configureFonts({ config: fontConfig }),
      };

      setTheme(updatedTheme);
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <PaperProvider theme={theme}>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen name="login" component={LogInScreen} options={{ headerShown: false }} />
          <Stack.Screen name="signup" component={SignUpScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </PaperProvider>
  );
}