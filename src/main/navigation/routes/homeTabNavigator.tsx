import { DashboardScreen } from "@domain/activity/dashboardScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { tokens } from "@theme/tokens";
import { useCallback } from "react";
import { CategoriesScreen } from "@domain/category/categoriesScreen";

const Tab = createBottomTabNavigator();

export function HomeTab() {
  const renderTabBarIcon = useCallback(
    ({
      focused,
      color,
      size,
      route,
    }: {
      focused: boolean;
      color: string;
      size: number;
      route: RouteProp<ParamListBase, string>;
    }) => {
      let iconName;
      if (route.name === "Dashboard") {
        iconName = focused ? "md-stats-chart-sharp" : "ios-stats-chart";
      } else if (route.name === "Portfolio") {
        iconName = focused ? "briefcase-sharp" : "briefcase";
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    []
  );

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: (props) => renderTabBarIcon({ ...props, route }),
        tabBarActiveTintColor: tokens.palette.cyan[0],
        tabBarInactiveTintColor: "#B7B7B7",
      })}
      initialRouteName="Profile"
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Portfolio" component={CategoriesScreen} />
    </Tab.Navigator>
  );
}
