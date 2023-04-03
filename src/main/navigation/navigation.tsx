import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from "./navigation.models";
import { DashboardScreen } from "@domain/activity/dashboardScreen";
import { WelcomeScreen } from "@domain/onboarding/welcomeScreen";
import { LoginScreen } from "@domain/auth/loginScreen";
import { auth } from "@lib/firebase";
import { useAuthUser } from "@react-query-firebase/auth";
import { View } from "react-native";
import { HomeTab } from "./routes/homeTabNavigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  const user = useAuthUser(["user"], auth);

  console.log("[Navigation] user?.data?.uid: ", user?.data, user.isLoading);

  const renderNavigation = () => {
    return (
      <>
        {/* Not Authorised Flow */}
        {!user?.data?.uid && NotAuthorisedFlow()}

        {/* Authorised FLow*/}
        {user?.data?.uid && AuthorisedFlow()}
      </>
    );
  };

  if (!user.isLoading) {
    // TODO: Hide the splaash screen
  }

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

function NotAuthorisedFlow() {
  return (
    <>
      <Stack.Screen
        name="Welcome"
        options={{ headerShown: false }}
        component={WelcomeScreen}
      />
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={LoginScreen}
      />
    </>
  );
}

function AuthorisedFlow() {
  return (
    <>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeTab}
      />
    </>
  );
}
