import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { registerRootComponent } from 'expo';
import Home from './screens/home/home_screen';
import * as Font from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';
import MentorScreen from './screens/home/mentor/mentor_screen';
import EventScreen from './screens/home/event/event_screen';
import ResourceScreen from './screens/home/resource/resource_screen';
import ForumScreen from './screens/home/forum/forum_screen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const loadFont = async () => {
            await Font.loadAsync({
                'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
                'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
                'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
                'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
                'Inter-Light': require('./assets/fonts/Inter-Light.ttf'),
                'Inter-ExtraLight': require('./assets/fonts/Inter-ExtraLight.ttf'),
                'Inter-Thin': require('./assets/fonts/Inter-Thin.ttf'),
                'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
                'Inter-ExtraBold': require('./assets/fonts/Inter-ExtraBold.ttf'),
            });
            setIsReady(true);
        };

        loadFont();
    }, []);

    if (isReady) {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                    <Stack.Screen name="Mentor" component={MentorScreen} options={{headerShown: false}}/>
                    <Stack.Screen name="Event" component={EventScreen} options={{headerShown: false}}/>
                    <Stack.Screen name="Resource" component={ResourceScreen} options={{headerShown: false}}/>
                    <Stack.Screen name="Forum" component={ForumScreen} options={{headerShown: false}}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    } else {
        return <View>
            <Text>Loading...</Text>
        </View>
    }

};

registerRootComponent(App);
