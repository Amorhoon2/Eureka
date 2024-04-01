import { StyleSheet, View, Text, Image, Pressable } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import TokenUtils from "../../../stores/TokenUtils";
import React, { useState, useEffect } from "react";
import { getHomeOnlyPay } from "../../../apis/HomeApi";



function HomeOnlyPay () {
  const navigation = useNavigation()
  const [token, setToken] = useState('');
  const currentDate = new Date();
  const currentMonth = ('0' + (currentDate.getMonth() + 1)).slice(-2); 
  const currentYear = currentDate.getFullYear().toString()
  const [payAmount, setPayAmout] = useState('')
  const [payHistory, setPayHistory] = useState([])
  
  useEffect(() => {
    const fetchToken = async () => {
      const accessToken = await TokenUtils.getAccessToken();
      setToken(accessToken);
    };

    fetchToken();
  }, []);

  useEffect(() => {
  const fetchHomeOnlyPay = async () => {
    if (!token) return; 

    try {
      const res = await getHomeOnlyPay(token, currentYear+currentMonth);
      setPayAmout(res.data.totalAmt);
      setPayHistory(res.data.list);
    } catch (err) {
      // 에러 처리
      console.log(err.response ? err.response.status : err);
    }
  };

  fetchHomeOnlyPay(); // 토큰이 있는 경우 함수를 호출합니다.
}, [token, currentYear, currentMonth]);


  return (
    <View>
      <View style={styles.container}>
        <View style={styles.midcontainer}>
          <Image style={styles.image} source={require('../../../../assets/HomeIcon/CardPayment.png')}/>
          <View>
            <Text style={styles.font}>이번달 페이 결제 금액</Text>
            <Text style={styles.price}>{payAmount.toLocaleString()}원</Text>
          </View>
          <Pressable onPress={() => navigation.navigate('OnlyPay')}>
            <MaterialCommunityIcons 
              name="chevron-right" size={26} style={styles.nextBtn}/>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default HomeOnlyPay

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    height: 100,
    borderWidth: 2,
    borderColor: '#D7D7D7',
    borderRadius: 20,
    paddingHorizontal: 12,
    shadowColor: '#D7D7D7',
    backgroundColor: '#ffffff'
  },
  midcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80,
    alignItems: 'center',
    padding: 12,
    marginTop: 12,
  },
  image: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
  font : {
    fontSize: 16,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#6797ff',
    alignSelf:'flex-end'
  },
  nextBtn: {
    start: 'end',
  }
})