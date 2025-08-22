import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; // Para ícones de carro, manutenção, etc.

export default function Dashboard() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Sistema de Gestão de Parques 🚗</Text>

      {/* Resumo da Frota */}
      <Text style={styles.sectionTitle}>Resumo da Frota</Text>
      <View style={styles.cardContainer}>
        <View style={[styles.card, {backgroundColor: '#16a34a'}]}>
          <FontAwesome5 name="car-side" size={24} color="#fff" style={{marginBottom: 5}} />
          <Text style={styles.cardTitle}>Veículos Ativos</Text>
          <Text style={styles.cardValue}>45</Text>
        </View>
        <View style={[styles.card, {backgroundColor: '#f59e0b'}]}>
          <FontAwesome5 name="tools" size={24} color="#fff" style={{marginBottom: 5}} />
          <Text style={styles.cardTitle}>Manutenção</Text>
          <Text style={styles.cardValue}>5</Text>
        </View>
        <View style={[styles.card, {backgroundColor: '#dc2626'}]}>
          <FontAwesome5 name="ban" size={24} color="#fff" style={{marginBottom: 5}} />
          <Text style={styles.cardTitle}>Indisponíveis</Text>
          <Text style={styles.cardValue}>3</Text>
        </View>
      </View>

      {/* Reservas */}
      <Text style={styles.sectionTitle}>Reservas</Text>
      <View style={styles.cardContainer}>
        <View style={[styles.card, {backgroundColor: '#2563eb'}]}>
          <FontAwesome5 name="calendar-day" size={24} color="#fff" style={{marginBottom: 5}} />
          <Text style={styles.cardTitle}>Hoje</Text>
          <Text style={styles.cardValue}>8</Text>
        </View>
        <View style={[styles.card, {backgroundColor: '#2563eb'}]}>
          <FontAwesome5 name="calendar-alt" size={24} color="#fff" style={{marginBottom: 5}} />
          <Text style={styles.cardTitle}>Próximas</Text>
          <Text style={styles.cardValue}>12</Text>
        </View>
      </View>

      {/* Motoristas */}
      <Text style={styles.sectionTitle}>Motoristas</Text>
      <View style={styles.cardContainer}>
        <View style={[styles.card, {backgroundColor: '#10b981'}]}>
          <FontAwesome5 name="user-check" size={24} color="#fff" style={{marginBottom: 5}} />
          <Text style={styles.cardTitle}>Ativos</Text>
          <Text style={styles.cardValue}>20</Text>
        </View>
        <View style={[styles.card, {backgroundColor: '#ef4444'}]}>
          <FontAwesome5 name="user-times" size={24} color="#fff" style={{marginBottom: 5}} />
          <Text style={styles.cardTitle}>Indisponíveis</Text>
          <Text style={styles.cardValue}>2</Text>
        </View>
      </View>

      {/* Ações Rápidas */}
      <Text style={styles.sectionTitle}>Ações Rápidas</Text>
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Adicionar Veículo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Registrar Manutenção</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Gerenciar Motoristas</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e3a8a",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fefefe",
    marginVertical: 10,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  card: {
    flex: 1,
    borderRadius: 12,
    padding: 15,
    marginHorizontal: 5,
    alignItems: "center",
  },
  cardTitle: {
    color: "#fefefe",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
    textAlign: "center",
  },
  cardValue: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  actionContainer: {
    marginTop: 10,
  },
  actionButton: {
    backgroundColor: "#f97316",
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: "center",
  },
  actionText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
