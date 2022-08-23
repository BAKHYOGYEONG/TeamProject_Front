<template>
  <div id="page-top">
    <!-- Navigation-->
    <!--    bootstrap : m(margin), l(left), r(right), t(top), b(bottom) -1,2,3,4,5 -->
    <a class="menu-toggle">
    </a>


    <!-- HeaderCom -->
    <MainMap/>

    <!-- 플로깅 -->
    <Plogging/>

    <!--  갤러리  -->
    <GalluryCom/>
    <div class="container mt-5">
      <router-link to="/gallury" class="popup__title" id="main__add">
        <button class="popup__button">
          더 보러가기
        </button>
      </router-link>
    </div>
    <!-- Login  -->
    <Login/>

    <!-- Register  -->
    <Register/>


  </div>
</template>

<script>
// Todo: bootstrap 테마 js 적용
import HeaderCom from "@/components/home/HeaderCom";
import Plogging from "@/components/home/PloggingCom";
import GalluryCom from "@/components/home/GalluryCom";
import MainMap from "@/components/home/MainMap";
import Login from "@/components/home/LoginMD";
import Register from "@/components/home/RegisterMD";

export default {
  name: 'HomeView',
  components: {
    MainMap,
    Plogging,
    GalluryCom,
    HeaderCom,
    Login,
    Register
  },

}
</script>

<style scoped>
@import "@/assets/css/mypage.css";
@import "../assets/css/popup.css";

@import "../assets/css/elements.css";

#main__add {
  text-decoration: none;
  display: flex;
  justify-content: center;
}

</style>
