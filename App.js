import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaProvider>
    <Header backgroundColor = {'Teal'}
    centerComponent = {{
      text: "Monkey Chunky",
       style: 
       { color: '#fff', fontSize: 20 }}} 
    />
    </SafeAreaProvider>
  );
}