import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PermissionScreen = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleAgree = () => {
    // Handle the "I agree" button press
    navigation.navigate('CreateDetails'); // Replace 'NextScreen' with your actual next screen name
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.headerText}>We need a few permissions!</Text>
        <View style={styles.permissionContainer}>
          {/* Permission Items */}
          <View style={styles.permissionItem}>
            <Icon name="location-on" size={40} color="#000" style={styles.iconStyle} />
            <View style={styles.permissionTextContainer}>
              <Text style={styles.permissionTitle}>Location</Text>
              <Text style={styles.permissionDescription}>
                Location data will be collected, transmitted and stored in our secured moneyview server (https://app-moneyview.whizdm.com) for checking serviceability, fraud prevention, expedition of KYC and to provide better offers.
              </Text>
            </View>
          </View>

          <View style={styles.permissionItem}>
            <Icon name="sms" size={40} color="#000" style={styles.iconStyle} />
            <View style={styles.permissionTextContainer}>
              <Text style={styles.permissionTitle}>SMS</Text>
              <Text style={styles.permissionDescription}>
                SMS data from phone will be collected, transmitted and stored in our secured moneyview server (https://app-moneyview.whizdm.com) to assess creditworthiness, understand cash flow patterns and for fraud prevention. This data may be collected when the app is closed or not in use.
              </Text>
            </View>
          </View>

          <View style={styles.permissionItem}>
            <Icon name="apps" size={40} color="#000" style={styles.iconStyle} />
            <View style={styles.permissionTextContainer}>
              <Text style={styles.permissionTitle}>Installed apps</Text>
              <Text style={styles.permissionDescription}>
                Metadata on Installed apps will be collected, transmitted and stored in our secured moneyview server (https://app-moneyview.whizdm.com) to assess creditworthiness and for analytical purposes. This data may be collected when the app is closed or not in use.
              </Text>
            </View>
          </View>

          <View style={styles.permissionItem}>
            <Icon name="perm-device-information" size={40} color="#000" style={styles.iconStyle} />
            <View style={styles.permissionTextContainer}>
              <Text style={styles.permissionTitle}>Device information</Text>
              <Text style={styles.permissionDescription}>
                This information is collected, transmitted and stored in our secured moneyview server (https://app-moneyview.whizdm.com). This is required for hassle-free registration and fraud prevention.
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.footerInfo}>
          All your information is 100% safe and secure <Text style={styles.linkText}>Know more</Text>
        </Text>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setIsChecked(!isChecked)}
        >
          <Icon
            name={isChecked ? 'check-box' : 'check-box-outline-blank'}
            size={24}
            color={isChecked ? '#006400' : '#666'}
          />
          <Text style={styles.checkboxText}>
            By continuing, I accept the{' '}
            <Text style={styles.linkText}>Privacy policy</Text> &{' '}
            <Text style={styles.linkText}>Terms of Service</Text> of moneyview.
          </Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.disagreeButton}>
            <Text style={styles.disagreeButtonText}>I disagree</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.agreeButton,
              { backgroundColor: isChecked ? '#006400' : '#A9A9A9' },
            ]}
            onPress={handleAgree}
            disabled={!isChecked}
          >
            <Text style={styles.agreeButtonText}>I agree</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// Styles remain the same
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollViewContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  permissionContainer: {
    flex: 1,
    marginTop: 20,
  },
  permissionItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  iconStyle: {
    marginRight: 15,
  },
  permissionTextContainer: {
    flex: 1,
  },
  permissionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  permissionDescription: {
    fontSize: 14,
    color: '#666',
  },
  footerInfo: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginVertical: 10,
  },
  bottomContainer: {
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 10,
    flex: 1,
  },
  linkText: {
    color: '#006400',
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  disagreeButton: {
    borderColor: '#006400',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: '#FFF',
  },
  disagreeButtonText: {
    color: '#006400', // Ensure the text is visible
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  agreeButton: {
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  agreeButtonText: {
    color: '#FFF', // Ensure the text is visible
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default PermissionScreen;
