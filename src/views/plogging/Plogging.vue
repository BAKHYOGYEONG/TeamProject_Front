<template>
  <section class="page-section" id="about">
    <div class="banner">
      <img src="@/assets/img/plogging/plogging_main_blue.png" class="img-fluid"/>
    </div>
    <div class="step-button">

      <a class="button-link" href="#step1">
        <img class="img-responsive" src="@/assets/img/plogging/STEP1.png" alt="step 1 button"/>
      </a>

      <a class="button-link" href="#step2">
        <img class="img-responsive" src="@/assets/img/plogging/STEP2.png" alt="step 2 button"/>
      </a>

      <a class="button-link" href="#step3">
        <img class="img-responsive" src="@/assets/img/plogging/STEP3.png" alt="step3 button"/>
      </a>

      <a class="button-link" href="#step4">
        <img class="img-responsive" src="@/assets/img/plogging/STEP4.png" alt="step4 button"/>
      </a>

    </div>

    <div class="plogging">

      <div data-spy="scroll" data-target="#navbar-example" data-offset="0" class="plogging__card">
        <h1 id="step1" class="plogging__title">STEP 1. 플로깅이 무엇인가요?</h1>
        <img class="plogging__image " src="@/assets/img/plogging/plogging_list1.png"/>
        <div class="plogging-content">
          <h2 class="plogging-content__title">01. Plogging</h2>
          <p class="plogging-content__text">'이삭줍기'를 뜻하는 스웨덴어 플로카 우프(Plocka Upp)와 영어단어 jogging(조깅)의 합성어.</p>
          <h2 class="plogging-content__title">02. 환경보호 운동</h2>
          <p class="plogging-content__text">조깅을 하면서 동시에 쓰레기를 줍는 운동으로, 스웨덴에서 시작되어 북유럽을 중심으로 확산되었으며 건강과 환경을 동시에 챙길 수
            있다.</p>
        </div>
      </div>

      <div data-spy="scroll" data-target="#navbar-example" data-offset="0" class="plogging__card">
        <h1 id="step2" class="plogging__title">STEP 2. 플로깅 시작 전 꼭 챙기세요!</h1>
        <img class="plogging__image-big" src="@/assets/img/plogging/plogging_prep2.png"/>
      </div>


      <!-- TODO : 0715 윤주 STEP3 plogging__title 크기가 혼자 줄어들어서 content__text 를 content__title 로 변경 -->
      <div data-spy="scroll" data-target="#navbar-example" data-offset="0" class="scrollspy-step plogging__card">
        <h1 id="step3" class="plogging__title">STEP 3. 플로깅 하는 방법.</h1>
        <img class="plogging__image " src="@/assets/img/plogging/plogging_list2.png"/>
        <div class="plogging-content">
          <h2 class="plogging-content__title">01) 조깅하러 나가기 전 종량제 봉투나 쓰지 않는 에코백, 장갑, 집게 등을 챙긴다.</h2>
          <h2 class="plogging-content__title">02) 조깅을 하며 쓰레기를 주워 봉투에 담는다.</h2>
          <h2 class="plogging-content__title">03) 모인 쓰레기는 반드시 본인이 챙겨 가서 규격에 맞게 분리수거를 한다.</h2>
        </div>
      </div>


      <div data-spy="scroll" data-target="#navbar-example" data-offset="0" class="scrollspy-step plogging__card">
        <h1 id="step4" class="plogging__title">STEP 4. 플로깅의 좋은점.</h1>
        <img class="plogging__image " src="@/assets/img/plogging/plogging_list3.png"/>
        <div class="plogging-content">
          <h2 class="plogging-content__title">01. 체력 단련.</h2>
          <p class="plogging-content__text">달리다가 쓰레기를 주울 때 하체를 굽히는 모양이 스쿼트나 런지 운동과 비슷하여 조깅만 하는 것보다 더 큰 운동 효과를 볼 수
            있다.</p>
          <h2 class="plogging-content__title">02. 환경 보호.</h2>
          <p class="plogging-content__text">활발한 플로깅을 통해 환경 쓰레기 감소와 사회인들의 건강 증진, 그리고 주변 환경이 좋은 방향으로 개선될 수 있다.</p>
        </div>
      </div>
    </div>
    <!-- Login  -->
    <Login/>

    <!-- Register  -->
    <Register/>

  </section>
</template>

<script>
import Login from "@/components/home/LoginMD";
import Register from "@/components/home/RegisterMD";

export default {
  name: "Plogging",
  components : {
    Login,
    Register
  }
};
</script>

<style scoped>
.page-section {
  max-width: 100%
}

* {
  margin: 0;
  padding: 0;
}

.step-button {
  margin-top: 100px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
}

.button-link {
  padding: 0;
  margin: 0;
}

.img-responsive {
  padding: 0;
  margin: 0;
}

.plogging {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-left: 100px;
  padding-right: 100px;

}

.plogging__card {
  display: grid;
  grid-template-areas:
  "title title"
  "image content";
  justify-self: center;
  margin: 0;
  padding: 0;
  align-content: center;
  max-width: max-content;
}

.plogging__title {
  background-color: rgba(0, 0, 0, 0.05);
  /*max-width: 100%;*/
  padding: 30px 30px 30px 30px;
  border-radius: 20px;
  font-size: 35px;
  grid-area: title;
  margin-top: 50px;
  margin-bottom: 30px;
  text-align: center;
}

.plogging__image {
  max-width: 100%;
  grid-area: image;
}

.plogging__image-big {
  /* max-width: 100%; */
  object-fit: contain;
  object-position: center;
  justify-self: center;
  align-items: center;
  width: 100%;
  margin-left: 6%;
}

.plogging-content {
  grid-area: content;
  justify-items: start;
  max-width: 100%;
  margin-left: 40px;
  margin-right: 40px;
}

.plogging-content__title {
  font-size: 30px;
  margin-bottom: 20px;
  margin-top: 34px
}

.plogging-content__text {
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 20px;
}

@media all and (max-width: 768px) {
  .plogging {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .plogging__card {
    grid-template-areas:
    "title"
    "image"
    "content";
  }

  .plogging__image {
    justify-self: center;
  }

  .plogging__image-big {
    max-width: 100%;
  }

  .plogging-content__text {
    margin-top: 20px;
  }

  .plogging__title {
    padding: 20px 20px 20px 20px;
    font-size: 24px;
  }
}
</style>
