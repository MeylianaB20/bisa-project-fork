import { View, StyleSheet, Animated } from "react-native";

const Indicator = ({ bannerWidth, totalBanners, scrollX }) => {
  return (
    <View style={styles.pointerContainer}>
      {Array.from({ length: totalBanners }).map((_, index) => {
        const inputRange = [
          (bannerWidth + 20) * (index - 1),
          (bannerWidth + 20) * index,
          (bannerWidth + 20) * (index + 1),
        ];

        const pointerColor = scrollX.interpolate({
          inputRange,
          outputRange: ["#ABABAB", "black", "#ABABAB"],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={index}
            style={[styles.pointer, { backgroundColor: pointerColor }]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  pointerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 10,
  },

  pointer: {
    marginLeft: 5,
    width: 9.1,
    height: 9.51,
    borderRadius: 10,
    backgroundColor: "#ABABAB",
  },
});

export default Indicator;
