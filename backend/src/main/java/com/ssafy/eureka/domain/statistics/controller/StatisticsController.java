package com.ssafy.eureka.domain.statistics.controller;

import com.ssafy.eureka.domain.statistics.service.StatisticService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@Slf4j
@Tag(name = "통계 API", description = "소비내역, 할인내역 통계")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/static")
public class StatisticsController {

    private final StatisticService statisticsService;

    @Operation(summary = "월간 총 소비, 할인 금액 조회")
    @GetMapping("/{yyyyMM}")
    public ResponseEntity<?> getTotalStatistics(@AuthenticationPrincipal UserDetails userDetails,
                                                @PathVariable("yyyyMM") String yyyyMM){
        log.debug("총 소비, 할인 금액 조회, userId : " + userDetails.getUsername() + ", 날짜 : " + yyyyMM);
        return ResponseEntity.ok(statisticsService.totalStatistics(userDetails.getUsername(), yyyyMM));
    }

    @Operation(summary = "월간 카테고리별 총 소비 통계")
    @GetMapping("/{yyyyMM}/consumption")
    public ResponseEntity<?> getTotalConsumptionStatistics(@AuthenticationPrincipal UserDetails userDetails,
                                                  @PathVariable("yyyyMM") String yyyyMM) {
        log.debug("카테고리별 총 소비통계, userId : " + userDetails.getUsername() + ", 날짜 : " + yyyyMM);
        return ResponseEntity.ok(statisticsService.consumptionStatisticsResponse(userDetails.getUsername(), yyyyMM));
    }

    @Operation(summary = "월간 카테고리별 총 할인 통계")
    @GetMapping("/{yyyyMM}/discount")
    public ResponseEntity<?> getTotalDiscountStatistics(@AuthenticationPrincipal UserDetails userDetails,
                                                  @PathVariable("yyyyMM") String yyyyMM) {
        log.debug("카테고리별 총 할인통계, userId : " + userDetails.getUsername() + ", 날짜 : " + yyyyMM);
        return ResponseEntity.ok(statisticsService.discountStatisticsResponse(userDetails.getUsername(), yyyyMM));
    }

}
