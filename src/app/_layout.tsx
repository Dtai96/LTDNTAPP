import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import HomeScreen from './index';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return <HomeScreen />;
}