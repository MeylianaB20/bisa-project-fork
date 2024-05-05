import { View, Text, ScrollView, SafeAreaView, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation, NavigationContainer  } from '@react-navigation/native';
import SettingsScreen from './settings/settings_screen';
import NotificationsScreen from './notifications/notifications_screen';
import ScheduleScreen from './schedule/schedule_screen';

const Tab = createBottomTabNavigator();

const Home = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Homes" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Schedule" component={ScheduleScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Notifications" component={NotificationsScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

export default Home;

const HomeScreen = () => {
    const navigation = useNavigation();
    userName = 'John Doe';
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ marginHorizontal: 20 }}>
                    <View>
                        <Text style={[styles.interBold, { fontSize: 24 }]}>Hello, {userName}!</Text>
                    </View>
                    <View style={{ paddingBottom: 30 }}>
                        <Text style={styles.grey}>What do you need today?</Text>
                    </View>
                    <View style={{ paddingBottom: 20 }}>
                        <Text style={[styles.interBold, { fontSize: 20 }]}>Categories</Text>
                    </View>
                </View>
                <View style={styles.categoryContainer}>
                    <TouchableOpacity 
                    style={styles.categoryParent} 
                    onPress={() => navigation.navigate('Mentor')}>
                        <View style={[styles.categoryMenu]}>
                            <Image source={homeImages.mentorImg} />
                        </View>
                        <Text style={styles.categoryText}>Mentor</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={styles.categoryParent}
                    onPress={() => navigation.navigate('Event')}>
                        <View style={[styles.categoryMenu]}>
                            <Image source={homeImages.eventImg} />
                        </View>
                        <Text style={styles.categoryText}>Event</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={styles.categoryParent}
                    onPress={() => navigation.navigate('Resource')}>
                        <View style={[styles.categoryMenu]}>
                            <Image source={homeImages.resourceImg} />
                        </View>
                        <Text style={styles.categoryText}>Resource</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={styles.categoryParent}
                    onPress={() => navigation.navigate('Forum')}>
                        <View style={[styles.categoryMenu]}>
                            <Image source={homeImages.forumImg} />
                        </View>
                        <Text style={styles.categoryText}>Forum</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: 'white',
    },
    interBold: {
        fontFamily: 'Inter-Bold',
    },
    grey: {
        color: '#949494',
    },
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    categoryMenu: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 100,
        elevation: 7,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
    },
    categoryParent: {
        alignItems: 'center',
    },
    categoryText: {
        fontFamily: 'Inter-Regular',
        fontSize: 12,
    },
});

const homeImages = {
    mentorImg: require('../../assets/images/Mentor.png'),
    eventImg: require('../../assets/images/Event.png'),
    resourceImg: require('../../assets/images/Resource.png'),
    forumImg: require('../../assets/images/Forum.png'),
};