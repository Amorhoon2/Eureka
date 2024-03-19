import { StyleSheet, ScrollView, View, StatusBar, Platform, Dimensions } from "react-native";
import MainNotice from "./components/MainNotice";
import CurrentBenefit from "./components/CurrentBenefit";
import IfUseRecommendCard from "./components/IfUseRecommendCard";

const screenHeight = Dimensions.get('window').height;

function ProductPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.mainnotice}><MainNotice /></View>
      <View style={styles.currentbenefit}><CurrentBenefit /></View>
      <View style={styles.ifuserecommend}><IfUseRecommendCard /></View>
    </ScrollView>
  );
}

export default ProductPage;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: "#F7F7F7",
  },
  mainnotice: {
    flex: 2,
  },
  currentbenefit: {
    flex: 0.5,
    minHeight: 20,
  },
  ifuserecommend: {
    flex: 2,
    minHeight: 300,
  }
});