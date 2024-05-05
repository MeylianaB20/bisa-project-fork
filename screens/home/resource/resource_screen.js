import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation, NavigationContainer } from '@react-navigation/native';

const ResourceScreen = () => {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={{ marginTop: 40, marginHorizontal: 20 }}>
                    <Image source={resourceImages.arrowBack} style={{ height: 30 }} />
                </View>
            </TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.text}>Resource</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height * 0.9,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default ResourceScreen;

const resourceImages = {
    arrowBack: require('../../../assets/images/arrow-back.png'),
};