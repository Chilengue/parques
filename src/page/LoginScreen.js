import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen({ navigation }) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "SEU_ANDROID_CLIENT_ID.apps.googleusercontent.com",
    iosClientId: "SEU_IOS_CLIENT_ID.apps.googleusercontent.com",
    expoClientId: "SEU_WEB_CLIENT_ID.apps.googleusercontent.com"
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      console.log("✅ Token Google:", authentication.accessToken);
      navigation.replace("Dashboard");
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1e3a8a" />

      <Text style={styles.title}>Sistema de Gestão de Parques Automóveis</Text>
      <Text style={styles.subtitle}>Faça login para continuar</Text>

      <TouchableOpacity
        style={styles.googleButton}
        disabled={!request}
        onPress={() => promptAsync()}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Entrar com Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.navigate("Register")}
        activeOpacity={0.7}
      >
        <Text style={styles.secondaryText}>Criar conta com Email</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e3a8a", // azul escuro profissional
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fefefe",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#cbd5e1",
    marginBottom: 40,
    textAlign: "center",
  },
  googleButton: {
    width: "100%",
    backgroundColor: "#f97316", // laranja para destaque
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  secondaryButton: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "rgba(255,255,255,0.1)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  secondaryText: {
    color: "#fefefe",
    fontSize: 15,
    fontWeight: "500",
  },
});
