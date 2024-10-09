import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ValueProps {
  label: string;
  value: string;
}

const Value: React.FC<ValueProps> = ({ label, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#2c2c2c',
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  value: {
    fontSize: 16,
    color: '#ffffff',
  },
});

export default Value;