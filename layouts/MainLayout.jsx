import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>© Copyright holder 2024</Text>
  </View>
);

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 20,
    backgroundColor: '#b3b3b4', 
    flexDirection: 'column',
  },
  content: {
    flex: 1, 
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#d71522', 
  },
});

export default MainLayout;
