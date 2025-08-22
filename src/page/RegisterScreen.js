import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from "react-native";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (email && username && password) {
      navigation.replace("Dashboard");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1e3a8a" />
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#cbd5e1"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Username"
        placeholderTextColor="#cbd5e1"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#cbd5e1"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.primaryButton} onPress={handleRegister} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.goBack()} activeOpacity={0.7}>
        <Text style={styles.secondaryText}>Voltar para Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e3a8a",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fefefe",
    textAlign: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 12,
    padding: 14,
    marginBottom: 15,
    color: "#fefefe",
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  primaryButton: {
    width: "100%",
    backgroundColor: "#f97316",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
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
