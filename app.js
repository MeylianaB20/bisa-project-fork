import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { registerRootComponent } from "expo";
import HomeTabs from "./tabs/HomeTabs";
import * as Font from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import MentorScreen from "./screens/MentorScreen";
import EventScreen from "./screens/EventScreen";
import ResourceScreen from "./screens/ResourceScreen";
import ForumScreen from "./screens/ForumScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [isReady, setIsReady] = useState(false);

  function handleUser(type, newValue) {
    setUser((prev) => ({
      ...prev,
      [type]: newValue,
    }));
  }

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
        "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
        "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
        "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
        "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
        "Inter-ExtraLight": require("./assets/fonts/Inter-ExtraLight.ttf"),
        "Inter-Thin": require("./assets/fonts/Inter-Thin.ttf"),
        "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
        "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
      });
      setIsReady(true);
    };

    loadFont();
  }, []);

  if (isReady) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login">
            {(props) => (
              <LoginScreen {...props} user={user} handleUser={handleUser} />
            )}
          </Stack.Screen>
          <Stack.Screen name="HomeTabs" component={HomeTabs} />
          <Stack.Screen name="Mentor" component={MentorScreen} />
          <Stack.Screen name="Event" component={EventScreen} />
          <Stack.Screen name="Resource" component={ResourceScreen} />
          <Stack.Screen name="Forum" component={ForumScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
}

registerRootComponent(App);
