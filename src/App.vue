<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg navbar-light sticky-top " id="mainNav">
      <div class="container-fluid">

        <a class="navbar-brand ml-0" href="/home">
<!--          <img src="@/assets/image/navbar-logo.svg" alt="..."/>-->
          걷고 줍는 갈맷길
        </a>

        <button class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"> </span>
        </button>

      </div>


      <div class="collapse navbar-collapse" id="navbarToggleExternalContent">
        <div>
          <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li class="nav-item">
              <router-link to="/home" class="nav-link">
                Home
              </router-link>
              <!-- 갈맷길 코스 -->
            <li class="nav-item">
              <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                갈맷길
              </a>
              <div class="dropdown">
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <router-link to="/galinfo" class="dropdown-item">
                    갈맷길이란?
                  </router-link>
                  <router-link to="/course1" class="dropdown-item">
                    1코스
                  </router-link>
                  <router-link to="/course2" class="dropdown-item">
                    2코스
                  </router-link>
                  <router-link to="/course3" class="dropdown-item">
                    3코스
                  </router-link>
                  <router-link to="/course4" class="dropdown-item">
                    4코스
                  </router-link>
                  <router-link to="/course5" class="dropdown-item">
                    5코스
                  </router-link>
                  <router-link to="/course6" class="dropdown-item">
                    6코스
                  </router-link>
                  <router-link to="/course7" class="dropdown-item">
                    7코스
                  </router-link>
                  <router-link to="/course8" class="dropdown-item">
                    8코스
                  </router-link>
                  <router-link to="/course9" class="dropdown-item">
                    9코스
                  </router-link>
                </div>
              </div>
            </li>

            <!-- 플로깅 -->
            <li class="nav-item">
              <router-link to="/plogging" class="nav-link">
                플로깅
              </router-link>
            </li>

            <!-- 커뮤니티  -->
            <li class="nav-item">
              <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                커뮤니티
              </a>
              <div class="dropdown">
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <router-link to="/gallury" class="dropdown-item">
                    갤러리
                  </router-link>
                  <router-link to="/notice" class="dropdown-item">
                    공지사항
                  </router-link>
                </div>
              </div>
            </li>

            <!-- login -->
            <div v-if="!currentUser">
              <li class="nav-item">
                <div class="portfolio-item">
                  <a class="portfolio-link nav-link" data-bs-toggle="modal" href="#LoginPage">
                    로그인
                  </a>
                </div>
              </li>
            </div>

            <!-- 회원가입 -->
            <div v-if="!currentUser">
              <li class="nav-item">
                <div class="portfolio-item">
                  <a class="portfolio-link nav-link" data-bs-toggle="modal" href="#RegisterPage">
                    회원가입
                  </a>
                </div>
              </li>
            </div>

            <!-- logOut -->
            <div v-if="currentUser">
              <li class="nav-item">
                <div class="portfolio-item">
                  <router-link to="mypage" class="nav-link">
                    {{ currentUser.username }}
                  </router-link>
                </div>
              </li>
            </div>

            <!-- 회원가입 -->
            <div v-if="currentUser">
              <li class="nav-item">
                <div class="portfolio-item">
                  <a class="portfolio-link nav-link" href @click.prevent="logOut()">
                    로그아웃
                  </a>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>

    </nav>


    <router-view/>
    <div class="container">
    </div>

    <!-- 상단으로 이동하는 버튼 -->
    <!-- <div onclick="window.scrollTo(0, 0);">▲TOP</div> 에서 아래와 같이 변경-->
    <div class="topBtn" onclick="window.scrollTo(0, 0);">
      <!--      <i class="bi bi-arrow-up-circle"></i>-->
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
      </svg>
    </div>

    <!-- Footer -->
    <FooterCom/>
  </div>
</template>


<script>
// TODO : 0713 률 - 상단으로 이동하는 버튼 스크롤 이벤트 추가
/* eslint-disable */
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $('.topBtn').show();
  } else {
    $('.topBtn').hide();
  }
});
// 상단으로 이동하는 버튼 클릭이벤트
$('.topBtn').click(function () {
  $('html, body').animate({scrollTop: 0}, 400);
  return false;
});

import FooterCom from "@/components/home/FooterCom";
import start from "@/assets/js/scripts2"

export default {
  name: "app",
  components: {
    FooterCom
  },
  //html에서 변수처럼 호출: 뒤에 () 붙이면 안됨
  //속도는 computed가 빠름
  computed: {
    currentUser() {
      //공유저장소의 전역변수(공유변수 : user)
      //자동으로 로그인이 되었으면 loggedIn = true, user = user
      //아니면 loggedIn = false, user = null
      return this.$store.state.auth.user;
      // return true;
    }
  },
  //html에서 함수처럼 호출: 뒤에 () 붙음
  methods: {
    logOut() {
      //dispatch 호줄하는 메서드 : actions에 있는 메서드를 호출함
      this.$store.dispatch("auth/logout")
      //로그아웃 후 이동 할 페이지 지정
      this.$router.push("/login")
    }
  },
  mounted() {
    start();
  }
};
</script>

<!-- TODO : 0713 률 - 'scoped' 삭제 -->
<style>
.navbar-brand{
  color: #fed136 !important;
  font-family: 'Gugi', cursive !important;
  text-shadow: -1px 0px #000000, 0px 1px #000000, 1px 0px #000000, 0px -1px #000000;
}

/* 상단 이동 버튼 클릭시 상단으로 움직일 때 부드러운 뷰 애니메이션 효과 추가 */
html {
  scroll-behavior: smooth;
}

/* 상단 이동 버튼 클릭시 애니메이션 효과 줄인 사람들을 위해 @media auto 추가  */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

/* 상단으로 이동하는 버튼 */
.topBtn {
  /* display: block 에서 none 으로 변경 */
  display: none;
  position: fixed;
  z-index: 999;
  cursor: pointer;
  /*margin: 30px 100px;*/
  bottom: 3vw;
  right: 5vw;
  color: #4C8ED6;
  background: transparent;
}

/* topBtn hover event */
.topBtn:hover {
  color: skyblue;
}

@media all and (max-width: 768px) {
  .bi-arrow-up-circle {
    width: 40px;
    height: 40px;
    margin: 2vw;
  }
}

</style>
