import React from 'react';
import { StyleSheet, View, Text, Linking, Svg, Path } from '@react-pdf/renderer';

// Define styles
const styles = StyleSheet.create({
  footer: {
    borderTopWidth: 2,
    borderTopColor: '#d1d5db', // Neutral-300 color
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: 'Courier', // Corresponds to font-mono
    fontSize: 10,
    lineHeight: 1.5,
  },
  copyright: {
    marginLeft: 2,
  },
  link: {
    color: '#3b82f6', // Primary-800 color
    textDecoration: 'underline',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialLink: {
    marginLeft: 5,
  },
});

// Footer Component
const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.copyright}>
        <Text>
          © 2024 |{' '}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://pritishvaidya.dev')}
          >
            Pritish Vaidya
          </Text>
        </Text>
      </View>
      <View style={styles.socialContainer}>
        <Text
          style={styles.socialLink}
          onPress={() => Linking.openURL('https://pritishvaidya.xyz/github')}
        >
          <Svg viewBox="0 0 496 512" width="20" height="20">
            <Path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
          </Svg>
        </Text>
        <Text
          style={styles.socialLink}
          onPress={() => Linking.openURL('https://pritishvaidya.xyz/stackoverflow')}
        >
          <Svg viewBox="0 0 24 24" width="20" height="20">
            <Path d="m2 15.542v7.708c0 .414.336.75.75.75h18.5c.414 0 .75-.336.75-.75v-7.708c0-.992-1.5-.993-1.5 0v6.958h-17v-6.958c0-.992-1.5-.992-1.5 0z" />
            <Path d="m6.645 20.146h9.737c.992 0 .993-1.5 0-1.5h-9.737c-.992 0-.993 1.5 0 1.5z" />
            <Path d="m6.641 15.519c10.153 2.079 9.538 1.973 9.686 1.973.897 0 1.03-1.304.15-1.485l-9.534-1.958c-.972-.199-1.275 1.27-.302 1.47z" />
            <Path d="m7.854 10.326c9.121 4.524 8.692 4.421 9.026 4.421.79 0 1.04-1.069.335-1.421l-8.691-4.342c-.885-.444-1.558.898-.67 1.342z" />
            <Path d="m10.072 6.42 7.616 5.861c.774.597 1.712-.575.915-1.188l-7.616-5.861c-.786-.607-1.702.583-.915 1.188z" />
          </Svg>
        </Text>
      </View>
    </View>
  );
};

export default Footer;
