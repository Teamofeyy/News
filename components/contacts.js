import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { gStyle } from '../Styles/style';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function Contacts() {
  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>О нас</Text>
    </View>
  );
}

const styles = StyleSheet.create({

});
