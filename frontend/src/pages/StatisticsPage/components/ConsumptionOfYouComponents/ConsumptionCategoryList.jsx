import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

function ConsumptionCategoryList() {
  const categories = useSelector((state) => state.staticList.twovalue)
  const totalConsumption = categories[categories.length - 1].totalConsumption;

  const categoryImages = {
    모든가맹점: require("../../../../../assets/CategoryIcon/0.png"),
    대중교통: require("../../../../../assets/CategoryIcon/1.png"),
    주유: require("../../../../../assets/CategoryIcon/2.png"),
    마트: require("../../../../../assets/CategoryIcon/3.png"),
    편의점: require("../../../../../assets/CategoryIcon/4.png"),
    통신: require("../../../../../assets/CategoryIcon/5.png"),
    온라인쇼핑: require("../../../../../assets/CategoryIcon/6.png"),
    쇼핑: require("../../../../../assets/CategoryIcon/7.png"),
    배달앱: require("../../../../../assets/CategoryIcon/8.png"),
    음식점: require("../../../../../assets/CategoryIcon/9.png"),
    주점: require("../../../../../assets/CategoryIcon/10.png"),
    카페: require("../../../../../assets/CategoryIcon/11.png"),
    디저트: require("../../../../../assets/CategoryIcon/12.png"),
    "뷰티/피트니스": require("../../../../../assets/CategoryIcon/13.png"),
    공과금: require("../../../../../assets/CategoryIcon/14.png"),
    "병원/약국": require("../../../../../assets/CategoryIcon/15.png"),
    애완동물: require("../../../../../assets/CategoryIcon/16.png"),
    교육: require("../../../../../assets/CategoryIcon/17.png"),
    자동차: require("../../../../../assets/CategoryIcon/18.png"),
    "레저/스포츠": require("../../../../../assets/CategoryIcon/19.png"),
    영화: require("../../../../../assets/CategoryIcon/20.png"),
    "문화/여가": require("../../../../../assets/CategoryIcon/21.png"),
    간편결제: require("../../../../../assets/CategoryIcon/22.png"),
    항공: require("../../../../../assets/CategoryIcon/23.png"),
    "여행/숙박": require("../../../../../assets/CategoryIcon/24.png"),
    기타: require("../../../../../assets/CategoryIcon/25.png"),
  };

  return (
    <View style={styles.container}>
      {categories.slice(0, -1).map((category) => ( // 마지막 totalConsumption 항목 제외
        <View key={category.categoryId} style={styles.categoryContainer}>
          <Image
            source={categoryImages[category.categoryName] || require("../../../../../assets/burger.png")} // 해당 카테고리에 맞는 이미지 또는 기본 이미지
            style={styles.image}
          />
<View style={styles.contentContainer}>
  <View style={styles.itemContainer}>
    <Text style={styles.categoryName}>{category.categoryName}</Text>
  </View>
  <View style={styles.itemContainer}>
    <Text style={styles.categoryPercent}>{((category.consumption / totalConsumption) * 100).toFixed(2)}%</Text>
  </View>
  <View style={styles.itemContainer}>
    <Text style={styles.categoryConsumption}>{category.consumption.toLocaleString()}원</Text>
  </View>
</View>

        </View>
      ))}
    </View>
  );
}

export default ConsumptionCategoryList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  categoryContainer: {
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 10,
    alignItems: "center",
  },
  image: {
    height: 50,
    width: 50,
  },
  contentContainer: {
    marginLeft: 15,
    flexDirection: "row",
    alignItems: "center", // 세로 정렬을 위해 추가
  },
  itemContainer: {
    flex: 1, // 모든 itemContainer가 동일한 비율을 차지하도록 설정
    justifyContent: "center", // 세로 중앙 정렬
  },
  categoryName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
  categoryPercent: {
    color: "grey",
    fontSize: 12,
    marginRight: 30,
    marginTop: 5,
  },
  categoryConsumption: {
    fontSize: 16,
    fontWeight: "semibold",
    color: "black",
  },
});
