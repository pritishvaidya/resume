import React from 'react';
import { Document, Page, View, Text, StyleSheet, Link, Svg } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    padding: 20,
    fontSize: 12,
    lineHeight: 1.5,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  sectionHeader: {
    fontSize: 18,
    marginBottom: 10,
  },
  itemHeader: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemSub: {
    fontSize: 12,
    marginBottom: 5,
  },
  list: {
    marginLeft: 15,
  },
  listItem: {
    marginBottom: 5,
  },
  contactLink: {
    color: '#1E90FF',
  },
  skillBar: {
    width: '100%',
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    marginBottom: 5,
  },
  skillFill: {
    backgroundColor: '#3F51B5',
    height: 10,
    borderRadius: 5,
  },
});

const Body = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Important Links</Text>

        {/* Website */}
        <View>
          <Text style={styles.itemHeader}>Website</Text>
          <Link style={styles.contactLink} src="https://pritishvaidya.dev">
            Personal Site
          </Link>
        </View>

        {/* Stack Overflow */}
        <View>
          <Text style={styles.itemHeader}>Stackoverflow</Text>
          <Link style={styles.contactLink} src="https://pritishvaidya.xyz/stackoverflow">
            Stackoverflow
          </Link>
        </View>

        {/* Blog */}
        <View>
          <Text style={styles.itemHeader}>Blog</Text>
          <Link style={styles.contactLink} src="https://pritishvaidya.xyz/blog">
            Blog
          </Link>
        </View>

        {/* Email */}
        <View>
          <Text style={styles.itemHeader}>Email</Text>
          <Link style={styles.contactLink} src="mailto:contact@pritishvaidya.dev">
            contact@pritishvaidya.dev
          </Link>
        </View>

        {/* Skills */}
        <Text style={styles.sectionHeader}>Skills</Text>
        <View>
          <Text style={styles.itemHeader}>General</Text>
          {['Web App Development', 'Hybrid App Development', 'Design'].map(skill => (
            <View key={skill} style={styles.skillBar}>
              <View style={{ ...styles.skillFill, width: skill === 'Design' ? '30%' : '100%' }} />
              <Text>{skill}</Text>
            </View>
          ))}
        </View>

        {/* Languages */}
        <View>
          <Text style={styles.itemHeader}>Languages</Text>
          {['Javascript', 'HTML', 'CSS'].map(language => (
            <View key={language} style={styles.skillBar}>
              <View style={{ ...styles.skillFill, width: '100%' }} />
              <Text>{language}</Text>
            </View>
          ))}
        </View>

        {/* Frameworks */}
        <View>
          <Text style={styles.itemHeader}>Frameworks</Text>
          {['React', 'React Native', 'Svelte', 'GraphQL'].map(framework => (
            <Text key={framework}>{framework}</Text>
          ))}
        </View>

        {/* Software */}
        <View>
          <Text style={styles.itemHeader}>Software</Text>
          {['Sentry', 'Coralogix', 'Docker', 'Figma'].map(software => (
            <Text key={software}>{software}</Text>
          ))}
        </View>

        {/* Databases */}
        <View>
          <Text style={styles.itemHeader}>Databases</Text>
          {['Postgresql', 'Mongodb', 'Parse', 'Firebase'].map(database => (
            <Text key={database}>{database}</Text>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Profile</Text>
        <Text>
          With 8+ years of experience in various industries, I help manage teams and build scalable FrontEnd for different companies discussion with stakeholders.
        </Text>
        <Text style={styles.itemHeader}>Other Qualifications</Text>
        <View style={styles.list}>
          {['Web App Development', 'Error Monitoring and Alerting', 'CI / CD'].map(qual => (
            <Text key={qual} style={styles.listItem}>
              - {qual}
            </Text>
          ))}
        </View>

        {/* Experience */}
        <Text style={styles.sectionHeader}>Experience</Text>
        {['Lead FrontEnd Engineer at Razorpay (Apr 2022 - Sept 2024)', 'Senior FrontEnd Engineer at Razorpay (Feb 2021 - Apr 2022)'].map(exp => (
          <View key={exp} style={{ marginBottom: 10 }}>
            <Text style={styles.itemHeader}>{exp}</Text>
            <Text style={styles.itemSub}>
              Description for {exp}
            </Text>
            <View style={styles.list}>
              {/* List items can be populated here based on experience */}
              <Text style={styles.listItem}>- Responsibility 1</Text>
              <Text style={styles.listItem}>- Responsibility 2</Text>
            </View>
          </View>
        ))}

        {/* Education */}
        <Text style={styles.sectionHeader}>Education</Text>
        <View>
          <Text style={styles.itemHeader}>Computer Science</Text>
          <Text style={styles.itemSub}>National Institute of Technology</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default Body;
