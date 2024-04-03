import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  StatusBar,
  ScrollView,
  Pressable,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import TokenUtils from "../../../stores/TokenUtils";
import { getCompareMycardAndRecommendCard } from "../../../apis/ProductApi";

const { width } = Dimensions.get("window");

const benefits = [
  { id: 1, content: "할인 혜택", amount: "5,000원" },
  { id: 2, content: "적립 혜택", amount: "10,000원" },
  { id: 3, content: "기타 혜택", amount: "3,000원" },
];

function CompareCard() {
  const navigation = useNavigation();
  const [token, setToken] = useState("");
  const [cards, setCards] = useState([]);
  const selectCard = useSelector(
    (state) => state.productList.selectPayCardInfo
  );
  const selectCardBenefit = useSelector(
    (state) => state.productList.payCardBenefit
  );

  useEffect(() => {
    const fetchToken = async () => {
      const accessToken = await TokenUtils.getRefreshToken();
      setToken(accessToken);
    };
    fetchToken();
  }, []);

  useEffect(() => {
    if (token && selectCard) {
      const selectCardUserCardId = selectCard.userCardId;
      getCompareMycardAndRecommendCard(
        token,
        selectCardUserCardId,
        (res) => {
          const cardsData = Array.isArray(res.data) ? res.data : [res.data];
          setCards(cardsData);
          console.log(res.data, "확인");
        },
        (err) => {
          console.log(err, "IfUseRecommendCard err");
        }
      );
    }
  }, [token, selectCard]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Pressable
        onPress={() => navigation.navigate("ProductPage1")}
        style={{ alignSelf: "flex-start" }}
      >
        <MaterialCommunityIcons
          name="chevron-left"
          size={40}
          style={styles.nextBtn}
        />
      </Pressable>

      <View style={styles.topcontainer}>
        <View style={styles.maintextContainer}>
          <Text style={styles.maintext}>삼성카드 | 신용</Text>
          <Text style={styles.cardName}>{selectCard.cardName}</Text>
        </View>

        <Image source={{ uri: selectCard.imagePath }} style={styles.image} />
      </View>

      <View style={styles.top}>
        <Text style={styles.maintext}>현재카드 이번달 혜택</Text>
        <Text style={styles.benefitAmount}>
          {selectCardBenefit.totalDiscount.toLocaleString()}원
        </Text>
      </View>

      {/* map으로 꺼내오기 */}
      <View style={styles.midContainer}>
        <View style={styles.midUpTitle}>
          <Text style={{ fontSize: 15, fontWeight: "600" }}>
            내 카드 대신 추천카드를 썼다면?
          </Text>
        </View>

        <View style={styles.midUp}>
          <View style={styles.twoCardCompare}>
            <View style={styles.myCard}>
              <Text style={{ fontSize: 10 }}>내 카드</Text>
              {cards[0] ? (
                <Image
                  source={{ uri: cards[0].myImagePath }}
                  style={styles.image2}
                />
              ) : (
                <Image source={require("../../../../assets/card.png")} />
              )}
            </View>

            <MaterialCommunityIcons
              name="arrow-right-thin"
              size={24}
              style={styles.arrowIcon}
            />

            <View style={styles.otherCard}>
              <Text style={{ fontSize: 10 }}>추천 카드</Text>
              {cards[0] ? (
                <Image
                  source={{ uri: cards[0].recommendImagePath }}
                  style={styles.image2}
                />
              ) : (
                <Image source={require("../../../../assets/card.png")} />
              )}
            </View>
          </View>

          <View style={styles.compareInfo}>
            <View style={styles.cardInfoContainer}>
              <View style={styles.infoBox}>
                <Text style={styles.infoTitle}>연회비</Text>
                {cards[0] ? (
                  <Text style={styles.infoAmount}>
                    {cards[0].myAnnualFee}원
                  </Text>
                ) : (
                  <Text>1,212원</Text>
                )}
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.infoTitle}>월 할인</Text>
                <Text style={styles.infoAmount}>10,000원</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.infoTitle}>전월 실적</Text>
                {cards[0] ? (
                  <Text style={styles.infoAmount}>
                    {cards[0].myPreviousPerformance.toLocaleString()}원
                  </Text>
                ) : (
                  <Text>1,500원</Text>
                )}
              </View>
            </View>

            <View style={styles.cardInfoContainer}>
              <View style={styles.infoBox}>
                <Text style={styles.infoTitle}>연회비</Text>
                {cards[0] ? (
                  <Text style={styles.infoAmount}>
                    {cards[0].recommendAnnualFee}원
                  </Text>
                ) : (
                  <Text>1,212원</Text>
                )}
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.infoTitle}>월 할인</Text>
                <Text style={styles.infoAmount}>20,000원</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.infoTitle}>전월 실적</Text>
                {cards[0] ? (
                  <Text style={styles.infoAmount}>
                    {cards[0].recommendPreviousPerformance.toLocaleString()}원
                  </Text>
                ) : (
                  <Text>1,500원</Text>
                )}
              </View>
            </View>
          </View>
        </View>

        <View style={styles.midBottom}>
          <View style={styles.midUpTitle}>
            <Text style={{ fontSize: 15, fontWeight: "400" }}>
              혜택 별 할인 예상금액
            </Text>
          </View>
          <View style={styles.separator}></View>

          <View style={styles.benefitList}>
            {benefits.map((benefit) => (
              <View key={benefit.id} style={styles.benefitItem}>
                <Text style={styles.benefitContent}>* {benefit.content}</Text>
                <Text style={styles.benefitAmount}>{benefit.amount}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.bottom}>
          <View style={styles.separator} />
          <View style={styles.resultContainer}>
            <Text>*합계</Text>
            <Text>결과</Text>
          </View>
        </View>

        <View style={styles.totalContainer}>
          <Text style={{ fontSize: 20, fontWeight: "400" }}>
            총 10000원 이득!
          </Text>
        </View>

        <View style={styles.bottomContainer}>
          <Pressable style={styles.plusBtn}>
            <Text style={{ fontSize: 15, fontWeight: "600", color: "white" }}>
              혜택 더보기
            </Text>
          </Pressable>

          <Pressable style={styles.applyBtn}>
            <Text style={{ fontSize: 15, fontWeight: "600", color: "white" }}>
              온라인 신청하기
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

export default CompareCard;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight + 50,
  },
  topcontainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 80,
    width: 50,
    marginRight: 10,
    marginLeft: 100,
  },
  maintextContainer: {
    flexDirection: "column",
    marginRight: 40,
    marginTop: 15,
  },
  maintext: {
    fontSize: 17,
    fontWeight: "400",
  },
  cardName: {
    fontSize: 20,
    fontWeight: "600",
  },
  midContainer: {
    justifyContent: "center",
    flex: 3,
    maxWidth: width - 20,
    backgroundColor: "#e5e5e5",
    borderRadius: 5,
    minHeight: 1000,
    marginHorizontal: 15,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  plusBtn: {
    borderRadius: 10,
    width: 150,
    height: 60,
    backgroundColor: "#b4b4b4",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  applyBtn: {
    borderRadius: 10,
    width: 150,
    height: 60,
    backgroundColor: "#6b84ff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  nextBtn: {
    color: "#b0b0b0",
    marginLeft: 15,
  },
  maintext: {
    fontSize: 15,
    fontWeight: "200",
  },
  benefitAmount: {
    fontSize: 15,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 15,
    padding: 10,
    marginLeft: 18,
    marginRight: 45,
    justifyContent: "space-between",
    width: 380,
    height: 50,
    backgroundColor: "#e5e5e5",
    borderRadius: 5,
  },
  midUp: {
    flex: 1,
    alignItems: "center",
    marginBottom: -180,
  },
  midBottom: {
    flex: 1,
  },
  bottom: {
    flex: 1,
  },
  separator: {
    height: 1,
    width: "95%",
    backgroundColor: "grey",
    marginLeft: 10,
  },
  midUpTitle: {
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 5,
  },
  twoCardCompare: {
    flexDirection: "row",
    maxWidth: "80%",
    marginTop: 15,
  },
  image2: {
    width: 60,
    height: 90,
    marginTop: 5,
  },
  myCard: {
    marginRight: 60,
    alignItems: "center",
  },
  otherCard: {
    marginLeft: 60,
    marginRight: 10,
    alignItems: "center",
  },
  arrowIcon: {
    alignSelf: "center",
  },
  compareInfo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  cardInfoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 30,
  },

  infoBox: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginTop: 5,
    width: 140,
  },

  infoTitle: {
    fontSize: 11,
    fontWeight: "400",
  },
  infoAmount: {
    fontSize: 14,
    fontWeight: "400",
  },
  benefitList: {
    marginBottom: -100,
  },
  benefitItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    paddingHorizontal: 15,
  },
  resultContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    paddingHorizontal: 15,
    marginTop: 15,
    marginBottom: -100,
  },
  totalContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});
