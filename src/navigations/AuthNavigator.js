import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Login = () => {
  return (
    <View>
      <Text>Hi from Login</Text>
    </View>
  );
};
const SignUp = () => {
  return (
    <View>
      <Text>Hi from Sign Up</Text>
    </View>
  );
};

export default function AuthNavigator() {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Sign Up" component={SignUp} />
    </AuthStack.Navigator>
  );
}
