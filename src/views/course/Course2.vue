<template>
  <div class="container-fluid" v-if="items.getgmgcourseinfo">
    <!-- 1. 갈맷길 2코스 시작 -->
    <!-- 1-1. 갈맷길 코스 번호 -->
    <div class="boogi">
      <div class="courseNo">
        <!-- 갈맷길 {{ items.getgmgcourseinfo.item[0].course_nm }} 2, 3 -->
        <h1>갈맷길 {{ items.getgmgcourseinfo.item[2].course_nm }}</h1>
      </div>
      <div class="boogiImg">
        <img src="@/assets/img/galmaetgil/course_main_boogi.png"
             class="img-fluid"
             alt="부기">
      </div>
    </div>

    <div class=" justify-content-center m-1 p-1" style="float: none; margin: 0 auto;">
      <!-- 1-2. 갈맷길 구간 및 시설 안내 -->
      <div class="aaaa container-fluid">
        <!-- 상세페이지 네비게이션 -->
        <a href="#2-1">{{ items.getgmgcourseinfo.item[2].gugan_nm }}</a> |
        <a href="#2-2">{{ items.getgmgcourseinfo.item[3].gugan_nm }}</a> |
        <a href="#transportType">교통정보 안내</a>
      </div>

      <!-- 1-3. 2코스 전체 지도 -->
      <div class="container">
        <div class="coursebox">
          <img src="@/assets/img/galmaetgil/course2.png"
               alt="2코스 지도"
               class="img-fluid course">
        </div>
        <!-- 1. 갈맷길 2코스 끝 -->

        <hr>

        <!-- 2. 갈맷길 2코스 1구간 설명 시작 -->
        <div class="section_exp">
          <div id="2-1">
            <h2 class="section">{{ items.getgmgcourseinfo.item[2].gugan_nm }}</h2>
          </div>

          <!-- 코스 설명 -->
          <p class="text-muted">
            {{ items.getgmgcourseinfo.item[2].gm_text }}
          </p>
          <div class="course_all">👟 전체 코스</div>
          <!-- 코스 거리 (난이도) -->
          <div class="course_loc"> 총 {{ items.getgmgcourseinfo.item[2].gm_range }}
            (난이도 : {{ items.getgmgcourseinfo.item[2].gm_degree }})</div>
          <br>
          <!-- 전체 코스 -->
          <div class="course_explain">
            {{ items.getgmgcourseinfo.item[2].gm_course }}
          </div>

          <!-- 도보인증대 스탬프 위치 시작-->
          <div class="course_all">👟 인증스탬프 위치</div>
          <p class="notice">※ 아래 이미지 클릭시 지도로 이동 ※</p>
          <div class="stamp">

            <!-- 2-1 구간 스탬프 시작점 -->
            <div class="cell">
              <div class="cell_descrition">
                <img src="@/assets/img/stamp/ministamp.png"
                     alt="스탬프"
                     class="cell_stamp">
                <h2 class="cell_stamp_text">시작점</h2>
              </div>
              <a :href="start_addr_c_1">
                <img src="@/assets/img/stamp/course2/section1/1_moontanload.jpg"
                     alt="문탠로드"
                     class="img-fluid cell_image">
              </a>
              <h2 class="cell_text">{{ items.getgmgcourseinfo.item[2].start_pls }}</h2>
            </div>

            <!-- 화살표 -->
            <img src="@/assets/img/arrow-right.png"
                 class="img-fluid cell_right">
            <img src="@/assets/img/arrow-down.png"
                 class="img-fluid cell_down">

            <!-- 2-1 구간 스탬프 중간점 -->
            <div class="cell">
              <div class="cell_descrition">
                <img src="@/assets/img/stamp/ministamp.png"
                     alt="스탬프"
                     class="cell_stamp">
                <h2 class="cell_stamp_text">중간점</h2>
              </div>
              <a :href="middle_adr_c_1">
                <img src="@/assets/img/stamp/course2/section1/2_noorimaru.jpg"
                     alt="누리마루 APEC하우스"
                     class="img-fluid cell_image">
              </a>
              <h2 class="cell_text">{{ items.getgmgcourseinfo.item[2].middle_pls }}</h2>
            </div>

            <!-- 화살표 -->
            <img src="@/assets/img/arrow-right.png"
                 class="img-fluid cell_right">
            <img src="@/assets/img/arrow-down.png"
                 class="img-fluid cell_down">

            <!-- 2-1 구간 스탬프 종점 -->
            <div class="cell">
              <span class="notice">⇩ 종점스탬프 클릭!</span>
              <div class="cell_descrition" data-bs-toggle="modal" href="#TwoOneStamp">
                <img src="@/assets/img/stamp/ministamp.png"
                     alt="스탬프"
                     class="cell_stamp">
                <h2 class="cell_stamp_text">종점</h2>
              </div>
              <a :href="end_addr_c_1">
                <img src="@/assets/img/stamp/course2/section1/3_millakhae.jpg"
                     alt="민락교 해운대방면"
                     class="img-fluid cell_image">
              </a>
              <h2 class="cell_text">{{ items.getgmgcourseinfo.item[2].end_pls }}</h2>
            </div>
          </div>
          <!-- 도보인증대 스탬프 위치 끝 -->
        </div>
        <!-- 2. 갈맷길 2코스 1구간 설명 끝 -->


        <!-- 3. 갈맷길 2코스 2구간 설명 시작 -->
        <div class="section_exp container-fluid">
          <div id="2-2">
            <h2 class="section">{{ items.getgmgcourseinfo.item[3].gugan_nm }}</h2>
          </div>

          <!-- 코스 설명 -->
          <p class="text-muted">
            {{ items.getgmgcourseinfo.item[3].gm_text }}
          </p>
          <div class="course_all">👟 전체 코스</div>
          <!-- 코스 거리 (난이도) -->
          <div class="course_loc"> 총 {{ items.getgmgcourseinfo.item[3].gm_range }}
            (난이도 : {{ items.getgmgcourseinfo.item[3].gm_degree }})</div>
          <br>
          <!-- 전체 코스 -->
          <div class="course_explain">
            {{ items.getgmgcourseinfo.item[3].gm_course }}
          </div>

          <!-- 도보인증대 스탬프 위치 시작 -->
          <div class="course_all">👟 인증스탬프 위치</div>
          <p class="notice">※ 아래 이미지 클릭시 지도로 이동 ※</p>
          <div class="stamp">

            <!-- 2-2 구간 스탬프 시작점 -->
            <div class="cell">
              <div class="cell_descrition">
                <img src="@/assets/img/stamp/ministamp.png"
                     alt="스탬프"
                     class="cell_stamp">
                <h2 class="cell_stamp_text">시작점</h2>
              </div>
              <a :href="start_addr_c_2">
                <img src="@/assets/img/stamp/course2/section2/1_millakgyo.jpg"
                     alt="민락교 해운대방면"
                     class="img-fluid cell_image">
              </a>
              <h2 class="cell_text">{{ items.getgmgcourseinfo.item[3].start_pls }}</h2>
            </div>

            <!-- 화살표 -->
            <img src="@/assets/img/arrow-right.png"
                 class="img-fluid cell_right">
            <img src="@/assets/img/arrow-down.png"
                 class="img-fluid cell_down">

            <!-- 2-2 구간 스탬프 중간점 -->
            <div class="cell">
              <div class="cell_descrition">
                <img src="@/assets/img/stamp/ministamp.png"
                     alt="스탬프"
                     class="cell_stamp">
                <h2 class="cell_stamp_text">중간점</h2>
              </div>
              <a :href="middle_adr_c_2">
                <img src="@/assets/img/stamp/course2/section2/2_iikidae.jpg"
                     alt="이기대 어울마당"
                     class="img-fluid cell_image">
              </a>
              <h2 class="cell_text">{{ items.getgmgcourseinfo.item[3].middle_pls }}</h2>
            </div>

            <!-- 화살표 -->
            <img src="@/assets/img/arrow-right.png"
                 class="img-fluid cell_right">
            <img src="@/assets/img/arrow-down.png"
                 class="img-fluid cell_down">

            <!-- 2-2 구간 스탬프 종점 -->
            <div class="cell">
              <span class="notice">⇩ 종점스탬프 클릭!</span>
              <div class="cell_descrition" data-bs-toggle="modal" href="#TwoTwoStamp">
                <img src="@/assets/img/stamp/ministamp.png"
                     alt="스탬프"
                     class="cell_stamp">
                <h2 class="cell_stamp_text">종점</h2>
              </div>
              <a :href="end_addr_c_2">
                <img src="@/assets/img/stamp/course2/section2/3_oryukdo.jpg"
                     alt="오륙도 유람선 선착장"
                     class="img-fluid cell_image">
              </a>
              <h2 class="cell_text">{{ items.getgmgcourseinfo.item[3].end_pls }}</h2>
            </div>
          </div>
          <!-- 도보인증대 스탬프 위치 끝 -->
        </div>
        <!-- 3. 갈맷길 2코스 2구간 설명 끝 -->

        <hr>

        <!-- 4. 교통정보 설명 시작 -->
        <div class="transport_typeof container-fluid" id="transportType">
          <div>
            <h3>🚇 교통정보 🚍</h3>
            <br>
            <p>부산시의 사정에 따라 노선 변경이 있을 수 있으므로 교통편 이용 전에 꼭 확인해 주시길 바랍니다.</p>
            <p class="notice">※ 아래 이미지 클릭시 사이트로 이동 ※</p>
          </div>
          <div class="transport_info">
            <ul class="transport">
              <li class="transport_li">
                <a href="http://bus.busan.go.kr/" target="_blank">
                  <div class="traffic_icon1 traffic_icon">
                    <img class="traffic_image" src="@/assets/img/traffic/busanbus.png">
                    <p class="traffic_text">부산버스정보</p>
                  </div>
                </a>
              </li>
              <li class="transport_li">
                <a href="https://www.humetro.busan.kr/default/main.do" target="_blank">
                  <div class="traffic_icon1 traffic_icon">
                    <img class="traffic_image" src="@/assets/img/traffic/huemetro.png">
                    <p class="traffic_text">부산지하철정보</p>
                  </div>
                </a>
              </li>
              <li class="transport_li">
                <a href="https://map.naver.com/" target="_blank">
                  <div class="traffic_icon2 traffic_icon ">
                    <img class="traffic_image" src="@/assets/img/traffic/navermap.png">
                    <p class="traffic_text">네이버지도</p>
                  </div>
                </a>
              </li>
              <li class="transport_li">
                <a href="http://bus.busan.go.kr/" target="_blank">
                  <div class="traffic_icon2 traffic_icon">
                    <img class="traffic_image" src="@/assets/img/traffic/kakaomap.png">
                    <p class="traffic_text">다음카카오맵</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!--     4. 교통정보 설명 끝 -->

      </div>
    </div>

    <!-- 구간별 종점스탬프 모달창 component import -->
    <TwoOneStampMD />
    <TwoTwoStampMD />
    <!-- Login  -->
    <Login/>

    <!-- Register  -->
    <Register/>
  </div>
</template>

<script>
import CourseDataService from "@/services/CourseDataService";
// 구간별 종점스탬프 모달창 component import
import TwoOneStampMD from "@/components/finalstamp/TwoOneStampMD";
import TwoTwoStampMD from "@/components/finalstamp/TwoTwoStampMD";
import Login from "@/components/home/LoginMD";
import Register from "@/components/home/RegisterMD";

export default {
  // 첫화면 : http://localhost:8080
  // 전체목록 화면 표시
  name: "cultural-list",
  components:{
    TwoOneStampMD,
    TwoTwoStampMD,
    Login,
    Register
  },
  data() {
    //tutorials 객체, 변수들 초기화
    return {
      items: [],
      page: 1,
      pageSize: 50,
    };
  },
  computed: {
    start_addr_c_1() {
      return (
          "https://map.kakao.com/?q=" +
          this.items.getgmgcourseinfo.item[2].start_addr
      );
    },
    middle_adr_c_1() {
      return (
          "https://map.kakao.com/?q=" +
          this.items.getgmgcourseinfo.item[2].middle_adr
      );
    },
    end_addr_c_1() {
      return (
          "https://map.kakao.com/?q=" +
          this.items.getgmgcourseinfo.item[2].end_addr
      );
    },
    start_addr_c_2() {
      return (
          "https://map.kakao.com/?q=" +
          this.items.getgmgcourseinfo.item[3].start_addr
      );
    },
    middle_adr_c_2() {
      return (
          "https://map.kakao.com/?q=" +
          this.items.getgmgcourseinfo.item[3].middle_adr
      );
    },
    end_addr_c_2() {
      return (
          "https://map.kakao.com/?q=" +
          this.items.getgmgcourseinfo.item[3].end_addr
      );
    },
  },
  methods: {
    retrieveCourse() {
      CourseDataService.getAll(this.page, this.pageSize)
          .then((response) => {
            this.items = response.data;
          })
          // 실패하면 에러 출력
          .catch((e) => {
            console.log(e);
          });
    },
  },

  // 최초 화면이 로딩될때(뜰때) 실행되는 이벤트
  mounted() {
    // 전체 목록 가져오기 메소드 호출
    this.retrieveCourse();
  },
};
</script>


<style scoped>
/* 상세페이지 네비게이션 @media 디자인 -1 */
@media screen and (min-width: 768px) {
  .aaaa {
    text-align: center;
    /* font-size : 40px -> 30px 로 변경 */
    font-size: 30px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
  }
}

/* 상세페이지 네비게이션 @media 디자인 -1 */
@media all and (max-width: 768px) {
  .aaaa {
    text-align: center;
    /* font-size : 5vw -> 4vw 로 변경 */
    font-size: 4vw;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
  }
}

/* a href 디자인 */
a {
  color: navy;
  text-decoration: none;
}

/* a href hover event(click) */
a:hover {
  color: red;
}

/* 갈맷길 코스 전체지도 크기 조정 */
.course {
  box-shadow: 2px 3px 9px 3px rgba(87, 88, 89, 25%);
  /*width: 1300px;*/
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 2.5%;
}

/* 갈맷길 코스 전체지도 div 박스 */
/* 언젠가 쓸까봐 넣어둠 */
.coursebox {
}

/* 선 디자인 */
hr {
  height: 1px;
}

/* 섹션 부분(코스 구간 명) 디자인 */
.section {
  text-align: center;
  width: 250px;
  color: #8E2A00;
  font-weight: bold;
  padding: 10px;
  background-color: #F29F05;
  border-radius: 20px;
  box-shadow: 2px 3px 9px 3px rgba(87, 88, 89, 25%);
  /* TODO : 공통 style.css 에 있는 * {margin: 0 auto;} 에 영향받아 가운데 정렬이 돼서 아래 margin: 0; 추가 */
  /* 가운데 정렬 안 할 거면 아래 margin 주석 풀고 따로 media 처리 하면 될 듯? */
  /*margin: 0;*/
}

/* 언젠가 쓸까봐 넣어둠 */
.traffic_text {

}

/* 교통정보 부산버스, 부산지하철 이미지 크기 조정 */
.traffic_icon1 .traffic_image {
  width: 150px;
  height: 80px;
  margin-bottom: 10px;
}

/* 교통정보 네이버맵, 다음카카오맵 이미지 크기 조정 */
.traffic_icon2 .traffic_image {
  width: 80px;
  border-radius: 30%;
  margin-bottom: 10px;
}

/* 교통정보 아이콘 가운데 정렬 */
.traffic_icon {
  margin-bottom: 10px;
  text-align: center;
  margin-right: 50px;
}

/* 전체 코스명 디자인 */
.course_all {
  margin-top: 50px;
  font-size: 25px;
  color: #8E2A00;
  font-weight: bold;
}

/* 전체 코스 및 거리, 난이도 글자 크기 */
.course_loc {
  font-size: 25px;
  font-weight: bold;
}

/* course_explain 클래스 생성 후 css 추가 */
/* 전체 코스 설명 */
@media screen and (min-width: 769px) {
  .course_explain {
    color: darkblue;
    font-size: 25px;
    font-weight: bold;
  }
}

@media all and (max-width: 768px) {
  .course_explain {
    color: darkblue;
    font-size: 20px;
    font-weight: bold;
  }
}

/* section_exp : 구간 , transport_typeof : 교통정보 디자인 */
.section_exp, .transport_typeof {
  padding: 30px 29px 31px;
  /* border: 1px solid #F29849 -> 주석처리 */
  /*border: 1px solid #F29849;*/
  background: #fff;
  border-radius: 10px;
  box-shadow: 2px 3px 9px 3px rgba(87, 88, 89, 25%);
  width: 100%;
  height: auto;
  position: relative;
  display: inline-block;
  margin-top: 2.5%;
  margin-bottom: 2.5%;
}


/* 교통정보 ul 디자인 */
.transport {
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}

/* 언젠가 쓸까봐 넣어둠 */
.transport_li {

}

/* 모바일 웹 */
@media screen and (max-width: 768px) {
  .transport {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /*padding: 0;*/
    padding-left: 40px;
    margin: 0;
  }

  .traffic_image {
    margin: 0;
  }
}

/* '아래 이미지 클릭시~' 부분  @media 디자인 -1 */
@media screen and (min-width: 769px) {
  .notice {
    color: #6F84FA;
    /* font-size 추가 및 17px 적용 */
    font-size: 17px;
  }
}

/* '아래 이미지 클릭시~' 부분  @media 디자인 -1 */
@media all and (max-width: 768px) {
  .notice {
    color: #6F84FA;
    /* font-size 추가 및 15px 적용 */
    font-size: 15px;
  }
}

p {
  font-size: 20px;
}

/* 코스 유래(설명) */
.text-muted {
  margin-top: 30px;
}

/* 모바일 세로정렬을 위해서 폴리나가 손대준 부분들 */
/* .stamp ~ @media all and (max-width: 768px) */
.stamp {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
}

.cell {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cell_stamp {
  margin-right: 10px;
}

.cell_image {
  width: 180px;
}

.cell_text {
  margin-top: 20px;
  margin-bottom: 0;
}

.cell_stamp_text {
  margin-top: 5px;
  margin-bottom: 0;
}

@media screen and (min-width: 769px) {
  .cell_descrition {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
  }

  .cell_down {
    display: none;
  }

  .cell_right {
    margin-left: 50px;
    width: 80px;
    height: auto;
    margin-right: 50px;
  }
}

@media all and (max-width: 768px) {
  .cell_descrition {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
  }

  .stamp {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
  }

  .cell_down {
    margin: 30px 0;
    width: 35px;
  }

  .cell_right {
    display: none;
  }

  /*.cell_image {*/
  /*  margin-top: 20px;*/
  /*}*/
}

.boogi {
  /* text-align: center : boogi div 에 써도 되고 h1에 적어도 됨 */
  text-align: center;
  position: relative;
  box-shadow: 2px 3px 9px 3px rgba(87, 88, 89, 25%);
}

/* 부기 이미지 위 갈맷길 코스명 @media 디자인 -1 */
@media screen and (min-width: 768px) {
  .boogi h1 {
    color: darkblue;
    /* text-align: center : boogi div 에 써도 되고 h1에 적어도 됨 */
    font-size: 5vw;
    font-weight: bold;
  }
}

/* 부기 이미지 위 갈맷길 코스명 @media 디자인 -2 */
@media all and (max-width: 768px) {
  .boogi h1 {
    color: darkblue;
    /* text-align: center : boogi div 에 써도 되고 h1에 적어도 됨 */
    font-weight: bold;
  }

}

.courseNo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.boogiImg {
  width: 100%;
}
</style>