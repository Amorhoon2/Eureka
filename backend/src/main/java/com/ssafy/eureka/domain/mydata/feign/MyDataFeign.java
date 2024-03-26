package com.ssafy.eureka.domain.mydata.feign;

import com.ssafy.eureka.common.response.MyDataApiResponse;
import com.ssafy.eureka.domain.mydata.dto.request.MyDataCardHistoryRequest;
import com.ssafy.eureka.domain.mydata.dto.request.MyDataTokenRequest;
import com.ssafy.eureka.domain.mydata.dto.response.MyDataCardHistoryResponse;
import com.ssafy.eureka.domain.mydata.dto.response.MyDataTokenResponse;
import com.ssafy.eureka.domain.mydata.dto.response.MyDataUserCardResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name="myDataFeign", url="http://j10e101.p.ssafy.io:8001/card")
//@FeignClient(name="myDataFeign", url="${feign.url}")
public interface MyDataFeign {
    @PostMapping(path = "/auth/mydata")
    public MyDataApiResponse<MyDataTokenResponse> requestToken(
        @RequestBody MyDataTokenRequest myDataTokenRequest);

    @PostMapping(path = "/user/list")
    public MyDataApiResponse<MyDataUserCardResponse> searchUserCard(
        @RequestHeader("Authorization") String accessToken,
        @RequestParam("cardCompanyId") int cardComapnyId);

    @PostMapping(path = "/card/history")
    public MyDataApiResponse<MyDataCardHistoryResponse> searchCardPayList(
        @RequestHeader("Authorization") String accessToken,
        @RequestBody MyDataCardHistoryRequest myDataCardHistoryRequest);
}