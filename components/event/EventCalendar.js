import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Calendar } from "react-native-calendars";

const EventCalendar = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, "0");
    const month = now.getMonth().toString().padStart(2, "0");
    const year = now.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;
    setCurrentDate(formattedDate);
  }, []);

  return (
    <View style={styles.container}>
      <Calendar
        current={currentDate}
        markedDates={{ [currentDate]: { marked: true, selected: true } }}
        disableAllTouchEventsForDisabledDays={true}
        onDayPress={(day) => {
          setCurrentDate(day.dateString);
          console.log("day changed", day);
        }}
        onMonthChange={(month) => {
          console.log("month changed", month);
        }}
        enableSwipeMonths={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 335,
    height: 360,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#fff",
  },
});

export default EventCalendar;
