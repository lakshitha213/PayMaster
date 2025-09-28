import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './src/SplashScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <SplashScreen onFinish={() => setIsLoading(false)} />;
  }

  return (
    <View style={styles.container}>
      
        Welcome to the App 🚀
     
    </View>
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
