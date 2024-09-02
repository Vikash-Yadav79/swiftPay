// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import Checkbox from '@react-native-community/checkbox';

// const CredentialDetailsScreen = ({ navigation }) => {
//     const [mobileNumber, setMobileNumber] = useState('');
//     const [email, setEmail] = useState('');
//     const [consent1, setConsent1] = useState(false);
//     const [consent2, setConsent2] = useState(false);
//     const [isContinueActive, setIsContinueActive] = useState(false);

//     const handleCheckboxChange = (newConsent1, newConsent2) => {
//         setConsent1(newConsent1 !== undefined ? newConsent1 : consent1);
//         setConsent2(newConsent2 !== undefined ? newConsent2 : consent2);
//         if ((newConsent1 || consent1) && (newConsent2 || consent2)) {
//             setIsContinueActive(true);
//         } else {
//             setIsContinueActive(false);
//         }
//     };

//     const handleMobileNumberChange = (value) => {
//         const numericValue = value.replace(/[^0-9]/g, '');
//         setMobileNumber(numericValue);
//     };

//     const handleContinue = () => {
//         navigation.navigate('OTP');
//     };

//     return (
//         <View style={styles.container}>
//             <ScrollView contentContainerStyle={styles.scrollViewContent}>
//                 <Text style={styles.heading}>Welcome!</Text>

//                 {/* Mobile Number Input */}
//                 <View style={styles.inputContainer}>
//                     <TextInput
//                         style={styles.input}
//                         placeholder="+91 Enter your mobile number"
//                         keyboardType="numeric"
//                         value={mobileNumber}
//                         onChangeText={handleMobileNumberChange}
//                         maxLength={10} // Assuming 10 digits for Indian mobile numbers
//                     />
//                 </View>

//                 {/* Email Input */}
//                 <View style={styles.inputContainer}>
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Email ID"
//                         value={email}
//                         onChangeText={setEmail}
//                     />
//                 </View>

//                 {/* Checkbox for WhatsApp Updates */}
//                 <View style={styles.checkboxContainer}>
//                     <Checkbox
//                         value={consent1}
//                         onValueChange={(newValue) => handleCheckboxChange(newValue, undefined)}
//                         boxType='square'
//                         tintColors={{ true: '#006400', false: '#666' }}
//                         style={styles.checkbox}
//                     />
//                     <Text style={styles.checkboxText}>Send me updates over WhatsApp</Text>
//                 </View>
//             </ScrollView>

//             {/* Terms and Conditions Checkbox */}
//             <View style={styles.bottomContainer}>
//                 <View style={styles.checkboxContainer}>
//                     <Checkbox
//                         value={consent2}
//                         onValueChange={(newValue) => handleCheckboxChange(undefined, newValue)}
//                         boxType='square'
//                         tintColors={{ true: '#006400', false: '#666' }}
//                         style={styles.checkbox}
//                     />
//                     <Text style={styles.checkboxText}>
//                         I accept the <Text style={styles.linkText}>Terms of Service</Text> & <Text style={styles.linkText}>Privacy policy</Text>, which includes permission to securely share my data/documents with verified <Text style={styles.linkText}>partners</Text> to process my application.
//                     </Text>
//                 </View>

//                 {/* Continue Button */}
//                 <TouchableOpacity
//                     style={[
//                         styles.button,
//                         { backgroundColor: isContinueActive ? '#006400' : '#A9A9A9' },
//                     ]}
//                     disabled={!isContinueActive}
//                     onPress={handleContinue}
//                 >
//                     <Text style={styles.buttonText}>Continue</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         paddingHorizontal: 20,
//     },
//     scrollViewContent: {
//         flexGrow: 1,
//     },
//     heading: {
//         fontSize: 32,
//         fontWeight: 'bold',
//         color: '#000',
//         marginTop: 50, // Added marginTop to move the welcome text down
//         marginBottom: 30, // Increased marginBottom for more space after the heading
//         textAlign: 'center', // Center align the heading
//     },
//     inputContainer: {
//         marginBottom: 20, // Increased space between input boxes for better readability
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: '#ddd',
//         borderRadius: 10,
//         padding: 15,
//         fontSize: 16,
//         backgroundColor: '#F9F9F9',
//     },
//     checkboxContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 20,
//     },
//     checkbox: {
//         marginRight: 10,
//     },
//     checkboxText: {
//         flex: 1,
//         fontSize: 14,
//         color: '#000',
//     },
//     linkText: {
//         color: '#006400',
//         textDecorationLine: 'underline',
//     },
//     bottomContainer: {
//         paddingHorizontal: 20,
//         paddingBottom: 20,
//     },
//     button: {
//         paddingVertical: 15,
//         borderRadius: 25, // Rounded button for a modern look
//         alignItems: 'center',
//         marginTop: 20,
//     },
//     buttonText: {
//         color: '#fff',
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
// });

// export default CredentialDetailsScreen;







import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Modal, Dimensions } from 'react-native';
import Checkbox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const CredentialDetailsScreen = () => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [consent1, setConsent1] = useState(false);
    const [consent2, setConsent2] = useState(false);
    const [isContinueActive, setIsContinueActive] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [otp, setOtp] = useState('');
    const [resendTimer, setResendTimer] = useState(0);

    const handleCheckboxChange = (newConsent1, newConsent2) => {
        setConsent1(newConsent1 !== undefined ? newConsent1 : consent1);
        setConsent2(newConsent2 !== undefined ? newConsent2 : consent2);
        if ((newConsent1 || consent1) && (newConsent2 || consent2)) {
            setIsContinueActive(true);
        } else {
            setIsContinueActive(false);
        }
    };

    const handleMobileNumberChange = (value) => {
        const numericValue = value.replace(/[^0-9]/g, '');
        setMobileNumber(numericValue);
    };

    const handleContinue = () => {
        setModalVisible(true); // Show the OTP modal
    };

    const handleVerifyOtp = () => {
        if (otp === '1234') { // Example OTP check
            alert('OTP Verified!');
            setModalVisible(false); // Close the modal after verification
        } else {
            alert('Invalid OTP. Please try again.');
        }
    };

    const handleResendOtp = () => {
        setResendTimer(60); // Start a 60-second timer
        // Add logic here to resend the OTP
        alert('OTP Resent!');
    };

    useEffect(() => {
        let interval = null;
        if (resendTimer > 0) {
            interval = setInterval(() => {
                setResendTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else if (resendTimer === 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [resendTimer]);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Text style={styles.heading}>Welcome!</Text>

                {/* Mobile Number Input */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="+91 Enter your mobile number"
                        keyboardType="numeric"
                        value={mobileNumber}
                        onChangeText={handleMobileNumberChange}
                        maxLength={10} // Assuming 10 digits for Indian mobile numbers
                    />
                </View>

                {/* Email Input */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email ID"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                {/* Checkbox for WhatsApp Updates */}
                <View style={styles.checkboxContainer}>
                    <Checkbox
                        value={consent1}
                        onValueChange={(newValue) => handleCheckboxChange(newValue, undefined)}
                        boxType='square'
                        tintColors={{ true: '#006400', false: '#666' }}
                        style={styles.checkbox}
                    />
                    <Text style={styles.checkboxText}>Send me updates over WhatsApp</Text>
                </View>
            </ScrollView>

            {/* Terms and Conditions Checkbox */}
            <View style={styles.bottomContainer}>
                <View style={styles.checkboxContainer}>
                    <Checkbox
                        value={consent2}
                        onValueChange={(newValue) => handleCheckboxChange(undefined, newValue)}
                        boxType='square'
                        tintColors={{ true: '#006400', false: '#666' }}
                        style={styles.checkbox}
                    />
                    <Text style={styles.checkboxText}>
                        I accept the <Text style={styles.linkText}>Terms of Service</Text> & <Text style={styles.linkText}>Privacy policy</Text>, which includes permission to securely share my data/documents with verified <Text style={styles.linkText}>partners</Text> to process my application.
                    </Text>
                </View>

                {/* Continue Button */}
                <TouchableOpacity
                    style={[
                        styles.button,
                        { backgroundColor: isContinueActive ? '#006400' : '#A9A9A9' },
                    ]}
                    disabled={!isContinueActive}
                    onPress={handleContinue}
                >
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </View>

            {/* OTP Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Icon name="lock" size={50} color="#006400" style={styles.iconStyle} />
                        <Text style={styles.modalTitle}>Enter OTP</Text>
                        <Text style={styles.modalText}>We've sent a 4-digit OTP to your registered mobile number.</Text>

                        <TextInput
                            style={styles.otpInput}
                            placeholder="----" // Placeholder with dashes to indicate the OTP length
                            placeholderTextColor="#ddd" // Placeholder color for better visibility
                            keyboardType="numeric"
                            maxLength={4}
                            value={otp}
                            onChangeText={setOtp}
                        />

                        <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyOtp}>
                            <Text style={styles.verifyButtonText}>Verify OTP</Text>
                        </TouchableOpacity>

                        <View style={styles.resendContainer}>
                            <TouchableOpacity
                                disabled={resendTimer > 0}
                                onPress={handleResendOtp}
                            >
                                <Text style={[styles.resendText, resendTimer > 0 && styles.disabledText]}>
                                    Resend OTP
                                </Text>
                            </TouchableOpacity>
                            {resendTimer > 0 && <Text style={styles.timerText}>({resendTimer}s)</Text>}
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    heading: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 50, // Added marginTop to move the welcome text down
        marginBottom: 30, // Increased marginBottom for more space after the heading
        textAlign: 'center', // Center align the heading
    },
    inputContainer: {
        marginBottom: 20, // Increased space between input boxes for better readability
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 15,
        fontSize: 16,
        backgroundColor: '#F9F9F9',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkbox: {
        marginRight: 10,
    },
    checkboxText: {
        flex: 1,
        fontSize: 14,
        color: '#000',
    },
    linkText: {
        color: '#006400',
        textDecorationLine: 'underline',
    },
    bottomContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    button: {
        paddingVertical: 15,
        borderRadius: 25, // Rounded button for a modern look
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        width: width * 0.8,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        elevation: 5,
    },
    iconStyle: {
        marginBottom: 20,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#006400',
        marginBottom: 10,
    },
    modalText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
    otpInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 15,
        fontSize: 18,
        width: '100%',
        textAlign: 'center',
        marginBottom: 20,
    },

    verifyButton: {
        backgroundColor: '#006400',
        paddingVertical: 15,
        paddingHorizontal: 15, // Adjust padding to match the input's left/right margins
        width: '100%', // Ensure button width matches the input
        borderRadius: 10, // Match the input's border radius
        alignItems: 'center',
        marginBottom: 10, // Less margin bottom to align with input spacing
    },
    verifyButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    resendContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5, // Reduced marginTop for tighter spacing
    },
    resendText: {
        fontSize: 16,
        color: '#006400',
    },
    disabledText: {
        color: '#999',
    },
    timerText: {
        fontSize: 16,
        color: '#006400',
        marginLeft: 5,
    },

});

export default CredentialDetailsScreen;
