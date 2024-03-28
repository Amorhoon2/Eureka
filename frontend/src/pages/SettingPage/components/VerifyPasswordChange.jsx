import React, { useState, createRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable, TextInput, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';
import TokenService from '../../../stores/TokenUtils';


const VerifyPasswordChange = ({ navigation }) => {
  const initialRefs = Array(6).fill().map(() => createRef());
  const [inputValues, setInputValues] = useState(Array(6).fill(''));
  const [activeInputIndex, setActiveInputIndex] = useState(0);

  const [buttonBackgrounds, setButtonBackgrounds] = useState(Array(12).fill('#3675FF')); // 12개의 버튼에 대한 배경색 상태 초기화

  const submitPasswordChange = async (password) => {
    const accessToken = await TokenService.getAccessToken(); // TokenUtils를 통해 accessToken 조회
    console.log(accessToken)
    console.log(password)
    if (!accessToken) {
      Alert.alert('', '접근 토큰이 없습니다.');
      return;
    }

    axios.post('https://j10e101.p.ssafy.io/api/auth/user', {password :password}, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => {
        // 요청 성공 시 PasswordPage로 이동
        navigation.navigate('PasswordChange');
        console.log(response.status)
      })
      .catch(error => {
        console.error('비밀번호 변경 요청 실패', error);
        Alert.alert('오류', '비밀번호가 일치하지 않습니다.');

        setInputValues(Array(6).fill(''));
        setActiveInputIndex(0); // 첫 번째 입력 필드로 포커스를 이동
      });
  };

  const handleInputChange = (text, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = text;
    setInputValues(newInputValues);

    if (text && index < 5) {
      setActiveInputIndex(index + 1);
      initialRefs[index + 1].current.focus();
    } else if (!text && index > 0) {
      setActiveInputIndex(index - 1);
      initialRefs[index - 1].current.focus();
    }
  };

  const handleNumberPadPress = (button, index) => {
    let newInputValues = [...inputValues];

    if (button === '삭제') {
      if (inputValues[activeInputIndex] === '' && activeInputIndex > 0) {
        newInputValues[activeInputIndex - 1] = '';
        setActiveInputIndex(activeInputIndex - 1);
      } else {
        newInputValues[activeInputIndex] = '';
      }
    } else {
      newInputValues[activeInputIndex] = button.toString();
      if (activeInputIndex < 5) {
        setActiveInputIndex(activeInputIndex + 1);
      }
    }

    setInputValues(newInputValues);

    // 수정된 부분: 상태 업데이트 함수 호출 직후가 아닌, 새로운 입력값 배열을 기반으로 검사를 실행합니다.
    // 예상되는 새로운 상태를 기반으로 모든 입력이 완료되었는지 확인합니다.
    if (newInputValues.every((value) => value !== '') && newInputValues.length === 6) {
      submitPasswordChange(newInputValues.join(''));
    }

    // 버튼 배경색 업데이트 로직
    const updatedBackgrounds = [...buttonBackgrounds];
    updatedBackgrounds[index] = 'rgba(255,255,255, 0.7)'; // 하얀색으로 변경
    setButtonBackgrounds(updatedBackgrounds);

    setTimeout(() => {
      const resetBackgrounds = [...buttonBackgrounds];
      resetBackgrounds[index] = '#3675FF'; // 원래 색상으로 복원
      setButtonBackgrounds(resetBackgrounds);
    }, 50);
  };


  const renderNumberPad = () => {
    const buttons = [
      1, 2, 3,
      4, 5, 6,
      7, 8, 9,
      '공백', 0, '삭제'
    ];

    return (
      <View style={styles.numberPadContainer}>
        {buttons.map((button, index) => (
          <Pressable
            key={index}
            style={[styles.numberPadButton, { backgroundColor: buttonBackgrounds[index] }]}
            onPress={() => button !== '공백' && handleNumberPadPress(button, index)}>
            <Text style={styles.numberPadText}>{button !== '공백' ? button : ''}</Text>
          </Pressable>
        ))}
      </View>
    );
  };


  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.topBar}>
        <Pressable style={styles.pressable} onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="chevron-left" size={40} color="white" />
        </Pressable>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>비밀번호 확인</Text>
        </View>
      </View>
      <View style={styles.passwordContainer}>
        <View style={styles.promptContainer}>
          <Text style={styles.prompt}>비밀번호를 눌러주세요</Text>
        </View>
        <View style={styles.inputContainer}>
          {inputValues.map((value, index) => (
            <TextInput
              key={index}
              ref={initialRefs[index]}
              style={[styles.input, { backgroundColor: value ? 'white' : 'gray' }]}
              maxLength={1}
              onChangeText={(text) => handleInputChange(text, index)}
              value={value}
              editable={index === activeInputIndex}
              selectionColor={'transparent'}
            />
          ))}
        </View>
      </View>
      <View style={styles.bottomContainer}>
        {renderNumberPad()}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    width: '100%',
    height: '100%',
    marginTop: '10%',
    backgroundColor: '#3675FF',
  },
  topBar: {
    width: '100%',
    height: '5%',
    flexDirection: 'row',
  },
  // 나머지 상단 바 스타일
  pressable: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    // 아이콘 스타일은 이미 완성된 상태입니다.
  },
  titleContainer: {
    width: '80%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',

  },
  passwordContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '35%',
  },
  promptContainer: {
    marginBottom: 20,
  },
  prompt: {
    fontSize: 30,
    color: 'white',
    fontWeight: '600',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: 40,
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'white',
    marginHorizontal: '1%',
    color: 'transparent'
  },
  bottomContainer: {
    width: '100%',
    height: '60%',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  numberPadContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  numberPadButton: {
    width: 110,
    height: 90,
    margin: 5,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blankButton: {
    backgroundColor: 'transparent',
  },
  numberPadText: {
    fontSize: 30,
    color: 'white'
  },
});

export default VerifyPasswordChange;