import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// ✅ Define props type
type SplashScreenProps = {
  onFinish: () => void;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <LinearGradient
      colors={["#1e293b", "#0f172a"]}
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo.png")} // ✅ adjust path
          style={styles.logo}
          resizeMode="contain"
        />

        {/* 🔄 Loading Circle */}
        <ActivityIndicator size="large" color="#60a5fa" style={styles.spinner} />
      </View>

      <Text style={styles.loadingText}>Loading...</Text>
    </LinearGradient>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75,
  },
  spinner: {
    marginTop: 10,
  },
  loadingText: {
    position: "absolute",
    bottom: 40,
    color: "#9ca3af", // gray-400
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.5,
  },
});
