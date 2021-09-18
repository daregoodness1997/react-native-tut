import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Contacts = () => {
  return (
    <View>
      <Text>Hi from Contacts</Text>
    </View>
  );
};
const ContactDetails = () => {
  return (
    <View>
      <Text>Hi from ContactDetails</Text>
    </View>
  );
};
const CreateContact = () => {
  return (
    <View>
      <Text>Hi from CreateContact</Text>
    </View>
  );
};
const Settings = () => {
  return (
    <View>
      <Text>Hi from Settings</Text>
    </View>
  );
};

export default function HomeNavigator() {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName="Contacts">
      <HomeStack.Screen name="Contacts" component={Contacts} />
      <HomeStack.Screen name="Contact Details" component={ContactDetails} />
      <HomeStack.Screen name="Create Contact" component={CreateContact} />
      <HomeStack.Screen name="Settings" component={Settings} />
    </HomeStack.Navigator>
  );
}
