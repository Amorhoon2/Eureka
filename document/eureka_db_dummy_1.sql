use eureka_db;

#1-2. card_company dummy
INSERT INTO card_company(company_name, org_code, card_brand, image_path)
VALUES  ("KB국민카드", "KB1N5V9I3W", "11", ""),
        ("삼성카드", "S1P9V6G2T4", "51", ""),
        ("NH농협카드", "NH3O8Z7L3N", "91", ""),
        ("신한카드", "SH1D5T3K9S", "41", ""),
        ("현대카드", "HD9P5Q7L2T", "61", ""),
        ("하나카드", "HN1C2M3S5K", "21", ""),
        ("우리카드", "WR9R2L4Z5A", "W1", ""),
        ("IBK기업은행카드", "IB1C3M5Q7P", "3K", ""),
        ("롯데카드", "RD3L5Q8P7S", "71", "")
;


#2-2. large_category dummy
insert into large_category(category_name)
values ("모든가맹점"), ("대중교통"), ("주유"), ("마트"), ("편의점"), ("통신"), ("온라인쇼핑"), ("쇼핑"), ("배달앱"), ("음식점"), ("주점"), ("카페"), ("디저트"), ("뷰티/피트니스"),
       ("공과금"), ("병원/약국"), ("애완동물"), ("교육"), ("자동차"), ("레저/스포츠"), ("영화"), ("문화/여가"), ("간편결제"), ("항공"), ("여행/숙박"), ("기타")
;

#3-2. small_category dummy
INSERT INTO eureka_db.small_category (category_name, large_category_id)
VALUES  ('스타벅스', 12),
        ('커피빈', 12),
        ('구글플레이스토어', 26),
        ('앱스토어', 26),
        ('인터파크 티켓', 22),
        ('올리브영', 14),
        ('미용실', 14),
        ('GS25', 5),
        ('CU편의점', 5),
        ('넷플릭스', 22),
        ('유튜브프리미엄', 26),
        ('배달의 민족', 9),
        ('요기요', 9),
        ('SKT', 6),
        ('KT', 6),
        ('LG U+', 6),
        ('Liiv M', 6),
        ('CGV', 21),
        ('에버랜드', 22),
        ('롯데월드', 22),
        ('KB PAY', 23),
        ('해외 가맹점', 26),
        ('공항라운지 더라운지멤버스', 24),
        ('버스.지하철', 2),
        ('이동통신요금', 6),
        ('아웃백', 10),
        ('VIPS', 10),
        ('교보문고', 22),
        ('국세.지방세', 15),
        ('GS칼텍스', 3),
        ('스피드메이트 엔진오일교환', 19),
        ('롯데백화점', 8),
        ('현대백화점', 8),
        ('신세계백화점', 8),
        ('버스', 2),
        ('지하철', 2),
        ('해피포인트', 26),
        ('다이소', 8),
        ('택시', 2),
        ('박승철헤어스투디오', 14),
        ('동물병원', 16),
        ('해외이용', 26),
        ('라이프샵 여행 해외패키지', 25),
        ('대중교통', 2),
        ('이동통신 자동납부', 6),
        ('GS홈쇼핑', 7),
        ('CJ홈쇼핑', 7),
        ('G마켓', 7),
        ('옥션', 7),
        ('이마트', 4),
        ('롯데마트', 4),
        ('홈플러스', 4),
        ('sk에너지', 3),
        ('패스트푸드', 10),
        ('네이버페이', 23),
        ('카카오페이', 23),
        ('SSG페이', 23),
        ('텐바이텐', 8),
        ('안경점', 26),
        ('YES24(온라인)', 22),
        ('교보문고(온라인)', 22),
        ('커피/제과아이스크림 업종', 12),
        ('대형마트', 4),
        ('Live M', 6),
        ('롯데시네마', 21),
        ('전가맹점', 24),
        ('문리계·외국어학원', 18),
        ('서점업종', 26),
        ('세탁소', 26),
        ('정육점', 26),
        ('슈퍼마켓', 26),
        ('반찬가게', 26),
        ('야체과일가게', 26),
        ('번개장터(번개페이)', 26),
        ('PC방 업종', 26),
        ('국가바우처', 26),
        ('병원', 16),
        ('키즈카페', 18),
        ('문화센터', 18),
        ('학습지', 18),
        ('커피전문점', 12),
        ('제과/아이스크림 업종', 13),
        ('TGIF', 10),
        ('세븐스프링스', 10),
        ('메가박스', 21),
        ('서울랜드', 22),
        ('방슬철헤어스투디오', 14),
        ('제주항공', 24),
        ('멜론', 22),
        ('YouTube Premium', 22),
        ('문구점', 26),
        ('독서실', 18),
        ('맥도날드', 10),
        ('버거킹', 10),
        ('롯데리아', 10),
        ('KFC', 10),
        ('쉐이크쉑', 10),
        ('커피업종', 12),
        ('편의점', 5),
        ('모바일게임', 26),
        ('배달음식', 9),
        ('국내외 가맹점', 1),
        ('음식점', 10),
        ('온라인서점', 7),
        ('올원페이', 23),
        ('삼성페이', 23),
        ('투썸플레이스', 12),
        ('랄라블라', 14),
        ('시내버스', 2),
        ('고속버스', 2),
        ('렌터카', 2),
        ('LGU+', 6),
        ('이디야', 12),
        ('CU', 5),
        ('E1 LPG 충전소', 3),
        ('E1 충전소', 19),
        ('박준뷰티랩', 14),
        ('박승철 헤어스투디오', 14),
        ('대전오월드', 22),
        ('광주 패밀리랜드', 22),
        ('경주랜드', 22),
        ('롯데 자이언츠', 22),
        ('롯데ON', 8),
        ('롯데슈퍼', 8),
        ('토이저러스', 8),
        ('나뚜루', 10),
        ('보네스뻬', 10),
        ('엔젤리너스', 12),
        ('광주패밀리랜드', 22),
        ('T.G.I.FRiDAY\'S', 10),
        ('엔젤리너스커피', 12),
        ('쿠팡', 7),
        ('티몬', 7),
        ('위메프', 7),
        ('11번가', 7),
        ('세븐일레븐', 5),
        ('롯데홈쇼핑', 7),
        ('경주월드', 22),
        ('보네스뻬브레드', 10),
        ('SK주유소', 3),
        ('해외', 25),
        ('AIA생명', 16),
        ('T.G.I.F', 10),
        ('엔제리너스커피', 10),
        ('파리바게뜨', 13),
        ('던킨도너츠', 13),
        ('대전 오월드', 22),
        ('0', 1),
        ('이마트24', 5),
        ('이디야커피', 12),
        ('블루보틀', 12),
        ('파리바게트', 13),
        ('뚜레쥬르', 13),
        ('놀이공원', 22),
        ('워터파크', 22),
        ('주유', 1),
        ('S-OIL', 3),
        ('경기관람', 22),
        ('아웃백스테이크하우스', 10),
        ('무비존', 21),
        ('닥터카서비스', 19),
        ('AK몰', 7),
        ('티켓몬스터', 7),
        ('SK에너지', 3),
        ('에이치디현대오일뱅크', 3),
        ('S-Oil', 3),
        ('인테이크몰', 7),
        ('농협 하나로마트·클럽', 4),
        ('스피드메이트', 19),
        ('주차장', 19),
        ('메가마트', 4),
        ('탑마트', 4),
        ('이마트 트레이더스', 4),
        ('롯데 VIC마켓', 4),
        ('골프', 20),
        ('에어부산', 24),
        ('티머니 GO', 2),
        ('갤러리아 백화점', 8),
        ('미니스톱', 5),
        ('카페베네', 12),
        ('전기차 충전', 19),
        ('하이패스', 19),
        ('제주 JDC 면세점', 8),
        ('KTX', 2),
        ('SSG닷컴', 7),
        ('어린이집', 18),
        ('학원', 18),
        ('YES24', 22),
        ('알라딘', 22),
        ('배달의민족', 9),
        ('무신사', 7),
        ('지그재그', 7),
        ('우리페이', 23),
        ('쿠팡이츠', 9),
        ('B마트', 9),
        ('마켓컬리', 9),
        ('TOEIC', 18),
        ('OPIc', 18),
        ('HSK', 18),
        ('TEPS', 18),
        ('TOEFL', 18),
        ('인터파크티켓', 22),
        ('YES24티켓', 22),
        ('티켓링크', 22),
        ('멜론티켓', 22),
        ('군마트', 4),
        ('YBM시사', 18),
        ('PAYCO', 23),
        ('해외 미술관', 22),
        ('해외 박물관', 22),
        ('YBM 어학시험', 18),
        ('교촌치킨', 10),
        ('BBQ치킨', 10),
        ('처갓집양념치킨', 10),
        ('네네치킨', 10),
        ('굽네치킨', 10),
        ('페리카나', 10),
        ('호식이두마리치킨', 10),
        ('BHC치킨', 10),
        ('멕시카나치킨', 10),
        ('또래오래치킨', 10),
        ('도미노피자', 10),
        ('미스터피자', 10),
        ('피자헛', 10),
        ('파파존스', 10),
        ('안경/렌즈', 26),
        ('구글 Play스토어', 22),
        ('애플 APP Store', 22),
        ('유튜브 프리미엄', 22),
        ('베스킨라빈스', 13),
        ('CU 편의점', 5),
        ('파고다', 18),
        ('해커스어학원', 18),
        ('마을버스', 2),
        ('광역버스', 2),
        ('파스쿠찌', 12),
        ('공항버스', 2),
        ('공항철도', 2),
        ('하나원큐페이', 23),
        ('삼성펭이', 23),
        ('쿠페이', 23),
        ('LG페이', 23),
        ('L페이', 23),
        ('페이코', 23),
        ('롯데 빅마켓', 8),
        ('SSM GS슈퍼', 8),
        ('이마트에브리데이', 8),
        ('홈플러스익스프레스', 8),
        ('신세계', 8),
        ('넥플릭스', 22),
        ('웨이브', 22),
        ('티빙', 22),
        ('디즈니플러스', 22),
        ('SK주유소(충전소)', 3),
        ('인터파크 영화 예매', 7),
        ('캐리비안베이', 22),
        ('해외가맹점', 26),
        ('대한항공', 24),
        ('주유소(충전소)', 3),
        ('전화요금', 6),
        ('인터넷이용료', 6),
        ('케이블TV', 6),
        ('휘트니스센터', 14),
        ('해외 배송대행 업체', 26),
        ('G 마켓', 7),
        ('피트니스', 14),
        ('정수기 렌탈', 26),
        ('해외 이용', 26),
        ('면세점', 26),
        ('국내 가맹점', 26),
        ('네이버 플러스 멤버십', 8),
        ('쿠팡 로켓와우 멤버십', 8),
        ('쿠팡플레이', 7),
        ('쿠팡외 모든가맹점', 1),
        ('해외이용금액', 26),
        ('패밀리레스토랑', 10),
        ('정기결제', 26),
        ('지니', 7),
        ('야놀자', 25),
        ('여기어때', 25),
        ('데일리호텔', 25),
        ('CJ오쇼핑', 7),
        ('한쿡', 10),
        ('더플레이스', 10),
        ('제일제면소', 10),
        ('CJ푸드월드', 10),
        ('더방(THE BA:NG)', 10),
        ('계절밥상', 10),
        ('CJ올리브영', 14),
        ('올원페이(NH앱카드)', 23),
        ('에이블리', 7),
        ('머스트잇', 7),
        ('트렌비', 7),
        ('발란', 7),
        ('솔드아웃', 7),
        ('크림', 7),
        ('번개장터', 7),
        ('중고나라', 7),
        ('이디아', 12),
        ('디지털구독', 22),
        ('테마파크', 22),
        ('인터파크', 7),
        ('농협몰', 7),
        ('인터파크도서', 22),
        ('반디앤루니스', 22),
        ('영풍문고', 22),
        ('토익', 18),
        ('텝스', 18),
        ('JPT', 18),
        ('KPE', 18),
        ('농협주유소', 3),
        ('롭스', 14),
        ('아파트관리비', 15),
        ('도시가스비', 15),
        ('전기료', 15),
        ('생명보험', 26),
        ('유튜브', 22),
        ('지니뮤직', 22),
        ('디즈니 플러스', 22),
        ('즉시결제', 1),
        ('할리스커피', 12),
        ('폴바셋', 12),
        ('쿠팡 로켓와우', 22),
        ('백화점', 8),
        ('헤어', 14),
        ('네이버플러스 멤버십', 22),
        ('현대오일뱅크', 3),
        ('왓챠', 22),
        ('아시아나항공', 24),
        ('자동차보험', 19),
        ('손해보험', 16),
        ('네이버플러스', 7),
        ('배달통', 5),
        ('FLO', 22),
        ('대리운전', 19),
        ('통행료', 26),
        ('스타벅스 드라이브스루', 12),
        ('엔진오일 교환', 19),
        ('버스/지하철', 2),
        ('신한플레이', 23),
        ('T.G.I Friday`s', 10),
        ('렌탈', 26),
        ('애슐리', 10),
        ('매드포갈릭', 10),
        ('토다이', 10),
        ('불고기브라더스', 10),
        ('탐앤탐스', 12),
        ('경주코오롱호텔', 25),
        ('전기차충전', 26),
        ('엔제리너스', 12),
        ('SSGPAY', 23),
        ('할리스', 12),
        ('이월드', 22),
        ('통도환타지아', 22),
        ('관리비', 15),
        ('도시가스', 15),
        ('아울렛', 8),
        ('LOHB\'s', 8),
        ('시코르', 8),
        ('에쓰오일', 3),
        ('치킨', 10),
        ('피자', 10),
        ('네이버쇼핑', 7),
        ('SSG.COM', 7),
        ('현대Hmall', 7),
        ('GS SHOP', 7),
        ('CJmall', 7),
        ('스마일페이', 23),
        ('SK페이', 23),
        ('마켓컬리 컬리패스', 7),
        ('유투브프리미엄', 22),
        ('리디북스', 22),
        ('wavve', 22),
        ('NC백화점', 8),
        ('NC아울렛', 8),
        ('아파트 관리비', 15),
        ('전기세', 15),
        ('가스비', 15),
        ('종합병원', 16),
        ('일반병원', 16),
        ('한방병원', 16),
        ('요양병원', 16),
        ('치과', 16),
        ('내과', 16),
        ('신경정신과', 16),
        ('외과', 16),
        ('안과', 16),
        ('성형외과', 16),
        ('s-oil', 3),
        ('세탁특공대', 26),
        ('크린토피아', 26),
        ('세탁업종', 26),
        ('기타', 26);

#4-2. card dummy
#5-2. card_benefit dummy
#6-2. card_benefit_detail dummy
#7-2. user dummy
#8-2. user_card dummy
#9-2. partnership_store dummy
#10-2. pay_history dummy
#11-2. consumption_static dummy
#12-2. consumption_large_static dummy
#13-2. consumption_detail_history dummy
#14-2. discount_static dummy
#15-2. discount_detail dummy
#16-2. discount_detail_history dummy