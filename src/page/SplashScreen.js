import React, { useEffect } from "react";
import { View, StyleSheet, StatusBar, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 4000); // 4 segundos até mudar de tela

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {/* Indicador de carregamento simples no lugar da animação */}
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#fff", 
    justifyContent: "center", 
    alignItems: "center" 
  },
});
