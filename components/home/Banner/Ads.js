import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Animated,
  Dimensions,
} from "react-native";

const Ads = ({ bannerWidth, totalBanners, scrollX }) => {
  return (
    <ScrollView
      horizontal
      style={styles.scrollContainer}
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      snapToInterval={bannerWidth + Dimensions.get("window").width * 0.15}
      snapToAlignment="start"
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
      )}
    >
      {Array.from({ length: totalBanners }).map((_, index) => (
        <View key={index} style={styles.box}>
          <Image
            source={require("../../../assets/images/ads.png")}
            style={styles.image}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    width: "100%",
  },

  box: {
    paddingLeft: Dimensions.get("window").width * 0.08,
    paddingRight: 30,
    height: 168.84,
    overflow: "hidden",
  },
});

export default Ads;
