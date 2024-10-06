import React from 'react';
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import Header from './header';
import Body from './body';
import Footer from './footer';

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#f3f4f6', // Neutral 100
    padding: 20,
    minHeight: '100%',
  },
  container: {
    backgroundColor: '#ffffff', // White background
    padding: 20,
    borderRadius: 5,
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  text: {
    color: '#374151', // Neutral 900
    fontSize: 12,
    fontFamily: 'Helvetica',
    marginBottom: 10,
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
       <Header />
        <Body />
        <Footer />
      </View>
    </Page>
  </Document>
);

export default MyDocument;
