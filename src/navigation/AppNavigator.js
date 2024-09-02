import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import PermissionScreen from '../screens/PermissionScreen';
import CredentialDetailsScreen from '../screens/CredentialDetailsScreen';
// import OTPScreen from '../screens/OtpScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
                name="Splash"
                component={SplashScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{ title: 'Welcome' }}
            />
            <Stack.Screen
                name="Permission"
                component={PermissionScreen}
                // options={{ title: 'Permissions' }}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CreateDetails"
                component={CredentialDetailsScreen}
                options={{ headerShown: false }}
            />
            {/* <Stack.Screen
                name="OTP"
                component={OTPScreen}
                options={{ title: 'OTP Verification' }}
            /> */}
        </Stack.Navigator>
    );
};

export default AppNavigator;
