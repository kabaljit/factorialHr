import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type NavigationProp<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;

export type RootStackParamList = {
  Home: undefined;
  Welcome: undefined;
  Login: undefined;
  AddActivity: undefined;
};
