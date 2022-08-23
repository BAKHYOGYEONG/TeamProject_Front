<template>
  <div class="container-fluid container">
    <!-- 1. 갈맷길 소개 시작 -->
<!--    <div class="row">-->
<!--      <content class="col-md-12 col-lg-12 col-sm-12">-->
      <content style="margin-bottom: 5%;">
        <figure>
          <img src="@/assets/img/galmaetgil/ikidae_gal.jpg" alt="이기대 갈맷길" class="img-responsive img-rounded"
               valign="absmiddle">
          <div class="overlay">
            <div class="description">
              <!-- 모바일 반응형에 맞추기 위해서 css 수정 들어감-->
              <h1 class="display_h1"><span style="color:#949CE3;"> 바닷길</span>
                , <span style="color: #94E3B5;"> 숲길</span>
                , <span style="color: #94C6E3;"> 강길</span>
                , <span style="color: #E394AA;"> 도심길</span>로 이어진<br> 부산의 아름다운 <span
                    style="color: #F7ED92;"> 갈맷길 700리</span></h1>
              <p class="intro">2009년 5월 24일 시민공모로 선정된 부산의 상징인 "갈매기" 와 "길"의 합성어인 갈맷길!<br>
                갈매기의 형상인 '갈 지'의 변환 형태로 산, 강, 바다를 모두 표현할 수 있는 부산광역시 통합 명칭입니다.</p>
              <h1 class="display_h1">아름다운 길 걷고싶은 길, <span style="color: #F7ED92;"> 갈맷길</span>은</h1>
              <p class="intro">사포지향(바다, 강, 산, 온천)인 부산의 지역적 특성을 담고 있어<br>
                바닷가를 걷다보면 어느덧 산속이고, 산을 벗어나면 강이 있고,<br>
                몸이 노곤하면 온천이 반겨주는 부산에만 있는 길입니다.<br>
                9개 코스 21개 구간 278.8㎞ 의 갈맷길은 모두 완보하려면 어른 걸음으로 약 91시간이 걸립니다.</p>
            </div>
          </div>
        </figure>
      </content>
<!--    </div>-->
    <!-- 1. 갈맷길 소개 끝 -->

    <hr>

    <!-- 2. 도보인증제 소개 시작 -->
    <div class="container-fluid container dobostart">
      <div>
        <h2 class="dobo">'갈맷길 도보인증'이란?</h2>
        <p>
          부산 갈맷길의 도보인증제는 길을 단지 빠르게 걷는 것이 아니라,<br>
          <b>느림의 미학으로 머물며 보고 즐길 수 있는 갈맷길로 기억하기를 바라는 마음에서 시행</b>되었습니다.
        </p>
        <p>부산시는 도보인증제 시행을 위해 갈맷길(9코스 21개 구간, 278.8㎞) 구간별 시작점, 중간점, 종점에 인증대 38개소를 설치하였고,
          <br>
          도보인증수첩을 수령(시 · 구 · 군, 갈맷길 안내소)하여 갈맷길을 걸으면서<br>
          <b>스탬프 날인(시작점, 중간점, 종점 인증대)을 찍어 부산 도보여행의 추억을 남길 수 있는 제도</b>입니다.</p>
      </div>

      <!-- 2-1. 도보 인증 시작 -->
      <div class="checked container">
        <h2 class="notice">✅ 도보인증 확인절차</h2>
        <ul class="agenda">
          <li>
            <span style="color: #0420BF; font-weight: bold;"> Step 1 </span>: 도보인증수첩 수령<br>
            ⇨ 시·구·군, 갈맷길 안내소<br>
            <b>* 도보인증수첩 : 부산 갈맷길을 걸으면서 인증도장을 받고 완보인증을 받아 기념품을 수령받는 도보인증 스탬프 수첩</b>
          </li>
          <br>
          <li>
            <span style="color: #0420BF; font-weight: bold;"> Step 2 </span> : 스탬프 날인<br>
            ⇨ 각 코스별 인증대에서 스탬프 날인<br>
            (시작점·중간점·종점 인증대)<br>
          </li>
          <br>
          <li>
            <span style="color: #0420BF; font-weight: bold;"> Step 3 </span> : 완보인증((사)걷고싶은부산)에서 받아서 기념품 수령
          </li>
        </ul>
      </div>
      <!-- 2-1. 도보 인증 끝 -->

      <!-- 2-2. 도보인증대와 도보인증수첩 사진 시작 -->
      <div class="checked container">
        <!-- '도보인증대와 도보인증수첩' 글귀를 모바일에서 줄임 ('클릭시 확대' 문구와 1줄로 나오기 위해) -->
        <h2 class="notice mobile_notice">✅ 도보인증대와 도보인증수첩<span class="clickB notice"> (클릭시 확대)</span></h2>

        <div class="stamp_pass">
          <img src="@/assets/img/stamp/dobostand.png"
               class="img-fluid"
               alt="도보인증대"
               width="150px" height="280px"
               data-bs-toggle="modal" href="#Dobostand"
          >
          <img src="@/assets/img/stamp/stamppassport.png"
               class="img-fluid"
               alt="스탬프여권"
               width="150px" height="280px"
               data-bs-toggle="modal" href="#Stamppassport"
          >
        </div>
      </div>
      <!-- 2-2. 도보인증대와 도보인증수첩 사진 끝 -->
      <!-- 2. 도보인증제 소개 끝 -->


      <!-- 3. 스탬프 인증 방법 소개 시작 -->
      <div class="checked container">
        <h2 class="notice">✅ 스탬프 인증하는 방법</h2>
        <img src="@/assets/img/galmaetgil/stamp.png"
             alt="스탬프"
             class="stamp img-fluid">
        <p>
          구간에 배치된 스탬프 3개를 (시작점 - 중간점 - 종점) 모두 찍어오면 해당 코스 구간을 완주한 것으로 인정됩니다.
        </p>
      </div>
    </div>
    <!-- 3. 스탬프 인증 방법 소개 끝 -->


    <!-- 4. 유의사항 시작 -->
    <div class="warning container">
      <h2 class="notice warn">⚠ 갈맷길 도보여행시 유의사항</h2>
      <div class="notice1">1. 오전 8시부터 오후 6시(동절기 5시)까지 이용시간을 지켜주세요.</div>
      <div class="notice1">2. 가급적 여러 명이 함께 걸으시고, 혼자 걸을 때에는 수시로 자기위치와 안전여부를 가족이나 지인에게 알려주세요.</div>
      <div class="notice1">3. 코스에 대한 정보를 충분히 확인하고 안내지도나 홈페이지를 이용하여 지정노선을 벗어나지 않도록 하세요.</div>
      <div class="notice1">4. 이정표의 현재위치정보를 확인하시면서 걸으시고 긴급상황시 경찰과 소방서에 위치를 알려주세요.</div>
      <div class="notice1">5. 간편하고 계절에 맞는 복장과 트레킹화를 착용하고 갈증을 해소할 수 있는 물을 지참하세요.</div>
      <div class="notice1">6. 걷기 전 충분한 준비운동으로 근육을 푼 후에 걷기를 시작하세요.</div>
      <div class="notice1">7. 자동차가 다니는 도로변을 지날 때에는 길가에 붙어서 걸어가세요.</div>
    </div>
    <!-- 4. 유의사항 끝 -->

    <br>
    <hr>

    <!-- 5. 갈맷길 인증수첩 배부처 안내시작 -->
    <div class="container-grid container">
      <div class="container-fluid">
        <h3 class="explain">&#128222; 갈맷길 인증수첩 배부처 안내</h3>
        <p class="text-muted">관공서의 사정에 따라 전화번호가 바뀔 수 있음을 알려드립니다.</p>
        <!--      table class="table table-hover" -> table class="table table-hover w-auto" 변경 -->
        <!-- 테이블 자동 너비 w-auto -->
        <table class="table table-hover w-auto overflow-x:auto;">
          <thead>
          <tr>
            <th>배부처</th>
            <th>대표전화번호</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>부산시청</td>
            <td>
              <a href="tel:051-888-1304">
                051)888-1304~5</a> 또는 <a href="tel:051-888-1305">051)888-1305
            </a>
            </td>
          </tr>
          <tr>
            <td>(사)걷고싶은부산</td>
            <td>
              <a href="tel:051-505-2224">051)505-2224~5</a>
              또는
              <a href="tel:051-505-2225">051)505-2225</a>
            </td>
          </tr>
          <tr>
            <td>중구</td>
            <td>
              <a href="tel:051-600-4121">051)600-4121</a>
            </td>
          </tr>
          <tr>
            <td>서구</td>
            <td>
              <a href="tel:051-240-4124">051)240-4124</a>
            </td>
          </tr>
          <tr>
            <td>동구</td>
            <td>
              <a href="tel:051-440-4121">051)440-4121</a>
            </td>
          </tr>
          <tr>
            <td>영도구</td>
            <td>
              <a href="tel:051-419-4151">051)419-4151</a>
            </td>
          </tr>
          <tr>
            <td>부산진구</td>
            <td>
              <a href="tel:051-605-4852">051)605-4852</a>
            </td>
          </tr>
          <tr>
            <td>동래구</td>
            <td>
              <a href="tel:051-550-4121">051)550-4121</a>
            </td>
          </tr>
          <tr>
            <td>남구</td>
            <td>
              <a href="tel:051-607-4121">051)607-4121</a>
            </td>
          </tr>
          <tr>
            <td>북구</td>
            <td>
              <a href="tel:051-309-4117">051)309-4117</a>
            </td>
          </tr>
          <tr>
            <td>해운대구</td>
            <td>
              <a href="tel:051-749-4121">051)749-4121</a>
            </td>
          </tr>
          <tr>
            <td>사하구</td>
            <td>
              <a href="tel:051-220-4107">051)220-4107</a>
            </td>
          </tr>
          <tr>
            <td>금정구</td>
            <td>
              <a href="tel:051-519-4121">051)519-4121</a>
            </td>
          </tr>
          <tr>
            <td>강서구</td>
            <td>
              <a href="tel:051-970-2372">051)970-2372</a>
            </td>
          </tr>
          <tr>
            <td>수영구</td>
            <td>
              <a href="tel:051-610-4792">051)610-4792</a>
            </td>
          </tr>
          <tr>
            <td>사상구</td>
            <td>
              <a href="tel:051-310-4124">051)310-4124</a>
            </td>
          </tr>
          <tr>
            <td>기장군</td>
            <td>
              <a href="tel:051-709-4115">051)709-4115</a>
            </td>
          </tr>
          <tr>
            <td>갈맷길 안내소(영도)</td>
            <td>
              <a href="tel:051-419-4887">051)419-4887</a>
            </td>
          </tr>
          <tr>
            <td>갈맷길 안내소(송도)</td>
            <td>
              <a href="tel:051-240-4086">051)240-4086</a>
            </td>
          </tr>
          <tr>
            <td>갈맷길 안내소(다대포)</td>
            <td>
              <a href="tel:051-220-4127">051)220-4127</a>
            </td>
          </tr>
          <tr>
            <td>갈맷길 안내소(해운대)</td>
            <td>
              <a href="tel:051-749-5700">051)749-5700</a>
            </td>
          </tr>
          <tr>
            <td>부산역 관광안내소</td>
            <td>
              <a href="tel:051-441-6565">051)441-6565</a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <!-- 5. 갈맷길 인증수첩 배부처 안내 끝 -->


      <!-- 6. 갈맷길 관광안내소 안내 시작 -->
      <div class="container-fluid">
        <h3 class="explain">&#128222; 갈맷길 관광안내소 안내</h3>
        <p class="text-muted">관공서의 사정에 따라 전화번호가 바뀔 수 있음을 알려드립니다.</p>
        <!--      table class="table table-hover" -> table class="table table-hover w-auto" 변경 -->
        <!-- 테이블 자동 너비 w-auto -->
        <table class="table table-hover w-auto overflow-x:auto;">
          <thead>
          <tr>
            <th>관광안내소</th>
            <th>대표전화번호</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>부산종합 관광안내소</td>
            <td>
              <a href="tel:051-253-8253">051)253-8253</a>
            </td>
          </tr>
          <tr>
            <td>국제여객터미널 관광안내소</td>
            <td>
              <a href="tel:051-465-3471">051)465-3471</a>
            </td>
          </tr>
          <tr>
            <td>김해공항(국제선) 관광안내소</td>
            <td>
              <a href="tel:051-973-2800">051)973-2800</a>
            </td>
          </tr>
          <tr>
            <td>김해공항(국내선) 관광안내소</td>
            <td>
              <a href="tel:051-973-4607">051)973-4607</a>
            </td>
          </tr>
          <tr>
            <td>부산종합버스터미널 관광안내소</td>
            <td>
              <a href="tel:051-502-7399">051)502-7399</a>
            </td>
          </tr>
          <tr>
            <td>부산외국인 관광안내소</td>
            <td>
              <a href="tel:051-441-3121">051)441-3121</a>
            </td>
          </tr>
          <tr>
            <td>부산역 관광안내소</td>
            <td>
              <a href="tel:051-441-6565">051)441-6565</a>
            </td>
          </tr>
          <tr>
            <td>해운대종합 관광안내소</td>
            <td>
              <a href="tel:051-749-5700">051)749-5700</a>
            </td>
          </tr>
          <tr>
            <td>송정 관광안내소</td>
            <td>
              <a href="tel:051-749-5800">051)749-5800</a>
            </td>
          </tr>
          <tr>
            <td>광안리 U관광안내소</td>
            <td>
              <a href="tel:051-610-4216">051)610-4216</a>
            </td>
          </tr>
          <tr>
            <td>해파랑길 관광안내소</td>
            <td>
              <a href="tel:051-607-6395">051)607-6395</a>
            </td>
          </tr>
          <tr>
            <td>달맞이길 관광안내소</td>
            <td>
              <a href="tel:051-749-5710">051)749-5710</a>
            </td>
          </tr>
          <tr>
            <td>창선 관광안내소</td>
            <td>
              <a href="tel:051-242-8253">051)242-8253</a>
            </td>
          </tr>
          <tr>
            <td>의료관광종합안내센터</td>
            <td>
              <a href="tel:051-818-1330">051)818-1330</a>
            </td>
          </tr>
          <tr>
            <td>태종대 관광안내소</td>
            <td>
              <a href="tel:051-403-4685">051)403-4685</a>
            </td>
          </tr>
          <tr>
            <td>동래구 관광안내소</td>
            <td>
              <a href="tel:051-522-0303">051)522-0303</a>
            </td>
          </tr>
          <tr>
            <td>서구 관광안내소</td>
            <td>
              <a href="tel:051-231-0252">051)231-0252</a>
            </td>
          </tr>
          <tr>
            <td>중구 관광안내소</td>
            <td>
              <a href="tel:051-254-5504">051)254-5504</a>
            </td>
          </tr>
          <tr>
            <td>영도 웰컴센터</td>
            <td>
              <a href="tel:051-419-4048">051)419-4048</a>
              또는
              <a href="tel:051-419-4042">051)419-4042</a>
            </td>
          </tr>
          <tr>
            <td>감천문화마을 안내센터</td>
            <td>
              <a href="tel:051-204-1444">051)204-1444</a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- 6. 갈맷길 관광안내소 안내 끝 -->
    <Dobo />
    <Stamp />
    <!-- Login  -->
    <Login/>

    <!-- Register  -->
    <Register/>
  </div>
</template>

<script>
import Dobo from "@/components/home/DobostandMD";
import Stamp from "@/components/home/StamppassportMD";
import Login from "@/components/home/LoginMD";
import Register from "@/components/home/RegisterMD";

export default {
  name: "IntroduceView",
  components: {
    Dobo,
    Stamp,
    Login,
    Register

  }
}
</script>

<style scoped>
@media screen and (min-width: 768px) {
  /* 도보인증제 부제목, 유의사항 디자인 */
  .dobo, .notice {
    font-weight: bold;
    color: #3068C3;
    margin-bottom: 3%;
  }

  /* 도보 유의사항 내용 */
  .notice1 {
    font-size: 20px;
    margin-bottom: 20px;
  }

  /* 갈맷길 인증수첩 배부처, 관광안내소 안내 대제목 디자인 */
  .explain {
    font-weight: bold;
    color: #3F0BE3;
  }
}

/* 상세페이지 네비게이션 @media 디자인 -1 */
@media all and (max-width: 768px) {
  /* 도보인증제 부제목 디자인 */
  .dobo, .notice {
    font-weight: bold;
    color: #3068C3;
    /*margin-bottom: 3%;*/
    margin: 0 10px 3%;
  }

  /* 유의사항 제목 별도 디자인 추가 */
  .warn {
    text-align: center;
    font-weight: bold;
    color: #3068C3;
    margin-bottom: 3%;
  }

  /* 도보 유의사항 내용 */
  .notice1 {
    font-size: 20px;
    /*margin-bottom: 20px;*/
    margin: 0 10px 20px;
  }

  /* 갈맷길 인증수첩 배부처, 관광안내소 안내 대제목 디자인 */
  .explain {
    text-align: center;
    font-weight: bold;
    color: #3F0BE3;
  }

  /* '도보인증대와 도보인증수첩' 글귀를 모바일에서 줄임 ('클릭시 확대' 문구와 1줄로 나오기 위해) */
  .mobile_notice {
    font-weight: bold;
    color: #3068C3;
    margin: 0 10px 3%;
    font-size: 19px;
  }
}

/* 스탬프 인증방법 설명 속 스탬프 예시이미지 넓이 */
.stamp {
  width: auto;
}

/* 도보인증 확인절차 ul 디자인 */
.agenda {
  list-style: none;
  font-size: 20px;
}

/* p, 안내 테이블 th 크기 */
p, th {
  font-size: 20px;
}

/* p @media 디자인 추가 */
@media all and (max-width: 768px) {
  p {
    font-size: 20px;
    margin: 10px;
  }
}

/* 안내테이블 전화번호 기본 색상 */
a {
  color: darkblue;
}

/* 안내테이블 전화번호 hover 이벤트 색상 */
a:hover {
  color: red;
}

/* 안내테이블 전호번호 클릭후 색상  */
a:visited {
  color: blue;
}

/* 선 디자인 */
hr {
  height: 1px;
}

/* 갈맷길 설명 이미지 포지션 */
.container content {
  position: relative;
}

/* 갈맷길 설명 이미지 디자인 -1 */
figure {
  width: 100%;
  position: relative;
}

/* 갈맷길 설명 이미지 디자인 -2 */
@media screen and (min-width: 769px) {
  figure img {
    display: block;
    width: 100%;
    /* height: auto -> 42vw 로 변경 */
    height: 42vw;
    background-color: rgba(0, 0, 0, 0.7);
  }
}

@media all and (max-width: 768px) {
  figure img {
    display: block;
    width: 100%;
    height: auto;
    background-color: rgba(0, 0, 0, 0.7);
  }
}

/* 갈맷길 설명 이미지 디자인 -3 */
figure .overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  /* 모바일에 맞추기 위해 hidden -> auto 로 변경 (scroll 로 변경해도 가능) */
  /*overflow: hidden;*/
  overflow: auto;
  width: 100%;
  height: 0;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  -webkit-transition: .6s ease;
  transition: .6s ease;
}

/* 갈맷길 설명 이미지 디자인 -4 */
figure .overlay .description {
  position: absolute;
  width: 100%;
  color: white;
  /* : 모바일에 맞추기 위해 변경 및 추가위해서 top 50% -> 45% 변경 및 bottom 5% 추가 */
  /*top: 50%;*/
  top: 45%;
  bottom: 5%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

/* 갈맷길 설명 이미지 디자인 -5 (hover 이벤트) */
figure:hover .overlay {
  display: block;
  height: 100%;
}

@media screen and (min-width: 769px) {
  /* 갈맷길 설명 대제목 (이미지) */
  .display_h1 {
    font-size: 2vw;
    /*font-size: 2vh; : vh가 vw 보다 훨씬 큼 */
    color: white;
  }

  /* 갈맷길 설명 내용 (이미지 위) */
  .intro {
    font-size: 1.3vw;
    margin-top: 30px;
    margin-bottom: 30px;
    /*font-size: 1.3vh; : vh가 vw 보다 훨씬 큼 */
  }
}

@media all and (max-width: 768px) {
  /* 갈맷길 설명 대제목 (이미지 위) */
  .display_h1 {
    font-size: 5vw;
    /*font-size: 2vh; : vh가 vw 보다 훨씬 큼 */
    color: white;
  }

  /* 갈맷길 설명 내용 (이미지 위) */
  .intro {
    font-size: 3.5vw;
    margin-top: 30px;
    margin-bottom: 30px;
    /*font-size: 1.3vh; : vh가 vw 보다 훨씬 큼 */
  }
}

/* 배부처 안내테이블 디자인 */
@media screen and (min-width: 769px) {
  table {
    margin-bottom: 25px;
  }
}

@media all and (max-width: 768px) {
  table {
    margin: 0 10px 25px;
  }
}

/* 도보인증대, 인증수첩 이미지 가운데 정렬(div) */
.stamp_pass {
  text-align: center;
}

@media screen and (min-width: 769px) {
  /* 도보인증대와 도보인증수첩 이미지 디자인 */
  .stamp_pass img {
    width: 12vw;
    margin-left: 5vw;
    margin-right: 5vw;
    border-radius: 30px;
    /*text-align: center;*/
  }
  .clickB {
    font-size: 1.5vw;
    text-align: center;
  }
}

@media all and (max-width: 768px) {
  /* 도보인증대와 도보인증수첩 이미지 디자인 */
  .stamp_pass img {
    width: 25vw;
    margin-left: 5vw;
    margin-right: 5vw;
    border-radius: 10px;
    /*text-align: center;*/
  }
  .clickB {
    font-size: 3.5vw;
    text-align: center;
  }
}

/* 안내 테이블 제일 바깥의 첫번쨰 div(container-grid), 두번째 div(container-fluid) */
/* 폴리나가 손대준 @media 부분 -1 */
@media screen and (min-width: 769px) {
  .container-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .container-fluid {
    padding: 0;
  }
}

/* 안내 테이블 제일 바깥의 첫번쨰 div(container-grid) */
/* 폴리나가 손대준 @media 부분 -2 */
@media all and (max-width: 768px) {
  .container-grid {
    display: grid;
    grid-template-columns: 1fr;
  }
}

/* 도보인증제 설명 div(dobostart), 도보인증 확인절차/스탬프인증방법 div(checked), 갈맷길 유의사항 div(warning) */
.dobostart, .checked, .warning {
  margin-bottom: 5%;
  margin-top: 5%;
}

/* 안내테이블의 제일 바깥 div */
.container-grid {
  margin-top: 5%;
  margin-bottom: 2.5%;
}
</style>