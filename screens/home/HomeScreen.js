import { ScrollView, SafeAreaView, StyleSheet } from "react-native";
import Header from "../../components/home/Header";
import Banner from "../../components/home/Banner/Banner";
import Category from "../../components/home/Category/Category";

const HomeScreen = ({route}) => {
  const email = route.params.email;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header email={email}/>
        <Banner />
        <Category />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "white",
  },
});

export default HomeScreen;
