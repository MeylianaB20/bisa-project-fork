import { useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";
import Ads from "./Ads";
import Indicator from "./Indicator";

const Banner = () => {
  const bannerWidth = 331;
  const totalBanners = 3;
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.layout}>
      <Ads
        bannerWidth={bannerWidth}
        totalBanners={totalBanners}
        scrollX={scrollX}
      />
      <Indicator
        bannerWidth={bannerWidth}
        totalBanners={totalBanners}
        scrollX={scrollX}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    marginTop: 10,
  },
});

export default Banner;
