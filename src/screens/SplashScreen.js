import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Welcome');
    }, 3000); // Navigate after 3 seconds
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Company Name in Header */}
      <View style={styles.topPlaceholder}>
        <Text style={styles.companyName}>SwiftPay</Text>
      </View>

      {/* Circular Image with Background */}
      <View style={styles.imageContainer}>
        <View style={styles.circleBackground}>
          <Image
            source={{ uri: 'https://gumlet-images.assettype.com/afaqs/2023-04/9ddafc35-9862-489f-bf2a-b08824d644bd/RK_MV__1_.jpg?auto=format,compress&fmt=webp&format=webp&w=1200&h=900&dpr=1.0' }} // Image URL
            style={styles.mainImage}
            resizeMode="contain"
          />
          {/* Floating circles */}
          <View style={styles.floatingCircleOne} />
          <View style={styles.floatingCircleTwo} />
        </View>
      </View>

      {/* Footer Icon and Text */}
      <View style={styles.footerContainer}>
        <Icon name="lock" size={20} color="#666" style={styles.footerIcon} />
        <Text style={styles.footerText}>
          Bank grade security with{'\n'}256-bit data encryption
        </Text>
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  topPlaceholder: {
    position: 'absolute',
    top: 60,
    width: width * 0.7,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E0', // Gray placeholder color
    borderRadius: 10,
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000', // Black text for the company name
  },
  imageContainer: {
    marginTop: 60,
    alignItems: 'center',
  },
  circleBackground: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#FFEBEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  floatingCircleOne: {
    position: 'absolute',
    top: 10,
    right: -10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#F8BBD0', // Light pink floating circle
  },
  floatingCircleTwo: {
    position: 'absolute',
    bottom: -10,
    left: -10,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#F8BBD0', // Light pink floating circle
  },
  footerContainer: {
    position: 'absolute',
    bottom: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerIcon: {
    marginRight: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default SplashScreen;
