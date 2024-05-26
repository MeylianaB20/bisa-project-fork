import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

// SelectableText Component
const SelectableText = ({ text, isSelected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      {isSelected && <View style={styles.indicator} />}
      <View style={{ marginHorizontal: 10 }}>
        <View
          style={[
            styles.textContainer,
            isSelected ? styles.selected : styles.notSelected,
          ]}
        ></View>
        <Text style={isSelected ? styles.selectedText : styles.notSelectedText}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

// Parent Component
const DiscussionSelections = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePress = (index) => {
    setSelectedIndex(index);
  };

  const options = [
    "Trending",
    "Popularity",
    "Featured",
    "Recommended",
    "My Thread",
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{ backgroundColor: "white", marginHorizontal: 10 }}>
        <View style={styles.discussionsChoiceContainer}>
          {options.map((option, index) => (
            <SelectableText
              key={index}
              text={option}
              isSelected={selectedIndex === index}
              onPress={() => handlePress(index)}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  discussionsChoiceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  touchable: {
    marginHorizontal: 5,
  },

  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderRadius: 0,
  },

  selectedText: {
    color: "black",
  },

  notSelectedText: {
    color: "rgba(0,0,0,0.3)",
  },

  selected: {
    borderColor: "#1C61C7",
    borderBottomWidth: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },

  notSelected: {
    marginVertical: -1,
    borderBottomWidth: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderColor: "transparent",
  },
});

export default DiscussionSelections;
