package com.ssafy.card.Auth.service.implementation;

import com.ssafy.card.Auth.dto.request.MyDataRequestDto;
import com.ssafy.card.Auth.dto.request.PayRequestDto;
import com.ssafy.card.Auth.dto.response.JwtTokenResponseDto;
import com.ssafy.card.Auth.service.AuthService;
import com.ssafy.card.JWT.JwtUtil;
import com.ssafy.card.User.entity.UserCardEntity;
import com.ssafy.card.User.entity.UserEntity;
import com.ssafy.card.User.repository.UserCardRepository;
import com.ssafy.card.User.repository.UserRepository;
import com.ssafy.card.common.CustomException;
import com.ssafy.card.common.ErrorCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final UserCardRepository userCardRepository;
    private final JwtUtil jwtUtil;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public JwtTokenResponseDto issueMyDataToken(MyDataRequestDto dto) {

//        String phoneNumber = bCryptPasswordEncoder.encode(dto.getPhoneNumber());
        String phoneNumber = dto.getPhoneNumber();
        String birth = dto.getBirth();
        String name = dto.getName();
        UserEntity userEntity = userRepository.findByPhoneNumber(phoneNumber);

        if(userEntity == null) throw new CustomException(ErrorCode.USER_NOT_FOUND);
        if(!userEntity.getBirth().equals(birth)) throw new CustomException(ErrorCode.INVALID_USER_BIRTH);
        if(!userEntity.getName().equals(name)) throw new CustomException(ErrorCode.INVALID_USER_NAME);

        String access = jwtUtil.createJwt("access", name, null, 2400000L);
        String refresh = jwtUtil.createJwt("refresh", name, null,86400000L);

        return new JwtTokenResponseDto("Bearer ", access, refresh);

    }

    @Override
    public JwtTokenResponseDto issuePayToken(PayRequestDto dto) {

        String cardNumber = dto.getCardNumber();
        String cvc = dto.getCvc();
        String password = dto.getPassword();

        Optional<UserCardEntity> userCardEntity = userCardRepository.findByCardNumber(cardNumber);

        if(!userCardEntity.isPresent()) throw  new CustomException(ErrorCode.NOT_FOUND_CARD);
        if(!userCardEntity.get().getCardCvc().equals(cvc)) throw new CustomException(ErrorCode.NOT_FOUND_CARD);

        String twoPass = userCardEntity.get().getCardPassword().substring(0, 2);
        if(!twoPass.equals(password)) throw new CustomException(ErrorCode.NOT_FOUND_CARD);

        String access = jwtUtil.createJwt("access", cardNumber, null, 2400000L);

        userCardEntity.get().setToken(access);
        userCardRepository.save(userCardEntity.get());

        return new JwtTokenResponseDto("Bearer ", access, null);
    }
}