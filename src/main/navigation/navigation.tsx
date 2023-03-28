import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from "./navigation.models";
import { DashboardScreen } from "@domain/activity/dashboardScreen";
import { WelcomeScreen } from "@domain/onboarding/welcomeScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  const renderNavigation = () => {
    return (
      <>
        {/* Not Authorised */}
        <Stack.Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={WelcomeScreen}
        />

        {/* Authorised */}
        {/* <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={DashboardScreen}
        /> */}
      </>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {renderNavigation()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
