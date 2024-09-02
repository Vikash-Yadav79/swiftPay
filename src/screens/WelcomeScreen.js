import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const WelcomeScreen = ({ navigation }) => {
  // Static content
  const mainHeader = 'Mann hai';
  const subHeader = 'toh money hai';
  const imageUrl = 'https://gumlet-images.assettype.com/afaqs/2023-04/9ddafc35-9862-489f-bf2a-b08824d644bd/RK_MV__1_.jpg?auto=format,compress&fmt=webp&format=webp&w=1200&h=900&dpr=1.0';
  const features = [
    { icon: 'credit-card', title: 'Personal loan', description: 'Up to Rs 10L' },
    { icon: 'pie-chart', title: 'Pro Saver A/c', description: '9% Assured Returns' },
    { icon: 'line-chart', title: 'Credit Tracker', description: 'Free Credit Report' },
  ];
  const footerText = 'For a tenure of 3 to 60 months';

  return (
    <View style={styles.container}>
      {/* Main Header and Subheader */}
      <View style={styles.headerContainer}>
        <Text style={styles.mainHeader}>{mainHeader}</Text>
        <Text style={styles.subHeader}>{subHeader}</Text>
      </View>

      {/* Circular Image with Icons */}
      <View style={styles.imageContainer}>
        <View style={styles.iconContainer}>
          <Icon name="credit-card" size={25} color="#fff" style={styles.iconLeft} />
          <Icon name="line-chart" size={25} color="#fff" style={styles.iconRight} />
          <Icon name="pie-chart" size={25} color="#fff" style={styles.iconTop} />
          <Icon name="book" size={25} color="#fff" style={styles.iconBottom} />
        </View>
        <Image
          source={{ uri: imageUrl }}
          style={styles.mainImage}
          resizeMode="contain"
        />
      </View>

      {/* Feature Icons and Descriptions */}
      <View style={styles.featuresContainer}>
        {features.map((feature, index) => (
          <View key={index} style={styles.featureItem}>
            <Icon name={feature.icon} size={30} color="#4A4A4A" />
            <Text style={styles.featureText}>{feature.title}</Text>
            <Text style={styles.subText}>{feature.description}</Text>
          </View>
        ))}
      </View>

      {/* Footer Text */}
      <Text style={styles.footerText}>{footerText}</Text>

      {/* Get Started Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Permission')}
      >
        <Text style={styles.buttonText}>Get started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  mainHeader: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  subHeader: {
    fontSize: 24,
    color: '#4A4A4A',
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#f5d3e2', // Background color from the screenshot
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    position: 'relative',
  },
  mainImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  iconContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconTop: {
    position: 'absolute',
    top: 10,
  },
  iconLeft: {
    position: 'absolute',
    left: 10,
  },
  iconRight: {
    position: 'absolute',
    right: 10,
  },
  iconBottom: {
    position: 'absolute',
    bottom: 10,
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
  },
  featureItem: {
    alignItems: 'center',
    flex: 1,
  },
  featureText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  subText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#004d40',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
