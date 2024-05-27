import React from 'react';
import { ScrollView, Text, TouchableOpacity, Image, StyleSheet, Dimensions, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CourseTab = () => {
    const navigation = useNavigation();

    return (
        <ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('CourseDetail')}>
                <View style={styles.list}>
                    <View style={styles.listDescription}>
                        <View style={{ marginRight: 10 }}>
                            <Image source={images.course} />
                        </View>
                        <View>
                            <View style={{alignItems: 'flex-start'}}>
                                <Text style={styles.listTitle}>Dacode: Season 4</Text>
                                <View style={styles.listDetail}>
                                    <View style={{ width: 20 }}><Image source={images.person} ></Image></View>
                                    <Text style={styles.listCourse}>Devin Luize San</Text>
                                </View>
                                <View style={styles.listDetail}>
                                    <View style={{ width: 20 }}><Image source={images.clock}></Image></View>
                                    <Text style={styles.listCourse}>12 Februari 2024</Text>
                                </View>
                                <View>
                                    <Text style={styles.listPrice}>Rp 195.000</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    list: {
        marginTop: 20,
        marginHorizontal: 24,
        paddingHorizontal: 16,
        width: Dimensions.get("window").width - 48,
        borderWidth: 0.4,
        borderRadius: 10,
        height: 130,
        flexDirection: "row",
        alignItems: "center",
    },
    listDescription: {
        flexDirection: "row",
        alignItems: "center",
    },
    listTitle: {
        fontWeight: "bold",
        fontSize: 16,
        fontFamily: "Inter-Bold",
    },
    listDetail: {
        flexDirection: "row",
        alignItems: "center",
    },
    listCourse: {
        fontFamily: "Inter-Regular",
        fontSize: 12,
        color: "#979797",
    },
    listPrice: {
        fontFamily: "Inter-Bold",
        fontSize: 12,
        color: "#1C61C7",
        marginTop: 10,
    },
});

const images = {
    course: require("../../assets/images/course-sample.png"),
    clock: require("../../assets/images/clock.png"),
    person: require("../../assets/images/person-icon.png"),
};


export default CourseTab;