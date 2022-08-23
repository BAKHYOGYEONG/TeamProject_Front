<template>
  <div class="container-fluid">
    <div class="mainMap">
      <section class="map">
        <div class="map__image">
          <img src="@/assets/img/map/totalMap_NoButton.png" class="map__image-fullscreen">
          <div class="map__course">
            <router-link to="/Course1">
              <img class="map__course_button-one map__course_button"
                   src="@/assets/img/map/Course_1_button.png">
            </router-link>
            <router-link to="/Course2">
              <img class="map__course_button-two map__course_button"
                   src="@/assets/img/map/Course_2_button.png">
            </router-link>
            <router-link to="/Course3">
              <img class="map__course_button-three map__course_button"
                   src="@/assets/img/map/Course_3_button.png">
            </router-link>
            <router-link to="/Course4">
              <img class="map__course_button-four map__course_button"
                   src="@/assets/img/map/Course_4_button.png">
            </router-link>
            <router-link to="/Course5">
              <img class="map__course_button-five map__course_button"
                   src="@/assets/img/map/Course_5_button.png">
            </router-link>
            <router-link to="/Course6">
              <img class="map__course_button-six map__course_button"
                   src="@/assets/img/map/Course_6_button.png">
            </router-link>
            <router-link to="/Course7">
              <img class="map__course_button-seven map__course_button"
                   src="@/assets/img/map/Course_7_button.png">
            </router-link>
            <router-link to="/Course8">
              <img class="map__course_button-eight map__course_button"
                   src="@/assets/img/map/Course_8_button.png">
            </router-link>
            <router-link to="/Course9">
              <img class="map__course_button-nine map__course_button"
                   src="@/assets/img/map/Course_9_button.png">
            </router-link>
          </div>
        </div>
      </section>
    </div>

    <!-- 모바일 ver -->
    <div class="container-fluid">
      <div class="mobile row align-items-center">
        <div class="main_course_slc">
          <div class="main_course_list">
            <ul>
              <li class="main_course">
                <!--                TODO : 0713 효경 률리 - ROUTER-LINK 숫자 오타 수정 -->
                <router-link to="/course1">
                  <img class="rounded d-block" src="../../assets/img/stamp/1-1.png">
                  <h4>1코스</h4>
                </router-link>
              </li>
              <li class="main_course">
                <router-link to="/course2">
                  <img class="rounded d-block" src="../../assets/img/stamp/2-1.png">
                  <h4>2코스</h4>
                </router-link>
              </li>
              <li class="main_course">
                <router-link to="/course3">
                  <img class="rounded d-block" src="../../assets/img/stamp/3-1.png">
                  <h4>3코스</h4>
                </router-link>
              </li>
              <li class="main_course">
                <router-link to="/course4">
                  <img class="rounded d-block" src="../../assets/img/stamp/4-1.png">
                  <h4>4코스</h4>
                </router-link>
              </li>
              <li class="main_course">
                <router-link to="/course5">
                  <img class="rounded d-block" src="../../assets/img/stamp/5-1.png">
                  <h4>5코스</h4>
                </router-link>
              </li>
              <li class="main_course">
                <router-link to="/course6">
                  <img class="rounded d-block" src="../../assets/img/stamp/6-1.png">
                  <h4>6코스</h4>
                </router-link>
              </li>
              <li class="main_course">
                <router-link to="/course7">
                  <img class="rounded d-block" src="../../assets/img/stamp/7-1.png">
                  <h4>7코스</h4>
                </router-link>
              </li>
              <li class="main_course">
                <router-link to="/course8">
                  <img class="rounded d-block" src="../../assets/img/stamp/8-1.png">
                  <h4>8코스</h4>
                </router-link>
              </li>
              <li class="main_course">
                <router-link to="/course9">
                  <img class="rounded d-block" src="../../assets/img/stamp/9-1.png">
                  <h4>9코스</h4>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionCom",

}


</script>


<style scoped>
@import "../../assets/css/map.css";

.main_course_slc {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 17px;
  align-items: center;
  justify-content: center;
  justify-self: center;
  margin: 47px auto 0;
  padding: 0;
}

@media all and (min-width: 601px) and (max-width: 1023px) {
  .main_course_slc {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media all and (min-width: 320px) and (max-width: 600px) {
  .main_course_slc {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    width: 100%;
    margin-top: 36px;
    align-self: center;
  }
}

</style>>
