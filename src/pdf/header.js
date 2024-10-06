import React from 'react';
import { StyleSheet, View, Text } from '@react-pdf/renderer';

// Define styles
const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 2,
    borderBottomColor: '#d1d5db', // Neutral-300 color
    paddingBottom: 12,
    paddingTop: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#1e3a8a', // Primary-900 color
    fontSize: 24, // Corresponds to text-3xl
    fontFamily: 'Courier', // Corresponds to font-mono
    fontWeight: 'bold',
    letterSpacing: 0.05, // Adjust for tracking-wide
    lineHeight: 1.2,
    whiteSpace: 'pre-wrap',
  },
  subtitle: {
    fontSize: 16, // Corresponds to text-lg
    color: '#3b82f6', // Primary-600 color
    fontWeight: 'light',
    lineHeight: 1.5,
    letterSpacing: 0.1, // Adjust for tracking-widest
  },
});

// Header Component
const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>
          PRITISH
          {'\n'}VAIDYA
        </Text>
        <Text style={styles.subtitle}>
          FrontEnd Developer
        </Text>
      </View>
    </View>
  );
};

export default Header;
