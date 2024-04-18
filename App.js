import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import MainStack from './navigate';

const fonts = () => Font.loadAsync({
  'mt-var': require('./assets/Fonts/Montserrat-VariableFont_wght.ttf')
});

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        SplashScreen.preventAutoHideAsync(); // Prevent the splash screen from hiding
        await fonts(); // Load fonts
        setFontLoaded(true);
      } catch (e) {
        console.warn(e);
      } finally {
        SplashScreen.hideAsync(); // Hide the splash screen
      }
    }

    prepare();
  }, []);

  if (!fontLoaded) {
    return null; // Return null or a loading component if fonts are not loaded
  }

  return (
    <MainStack />
  );
}

const styles = StyleSheet.create({

});