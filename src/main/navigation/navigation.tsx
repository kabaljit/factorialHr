import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from "./navigation.models";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  const renderNavigation = () => {
    return (
      <>
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
