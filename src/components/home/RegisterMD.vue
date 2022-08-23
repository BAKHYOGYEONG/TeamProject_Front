<template>
  <!--  <div id="page-top">-->
  <!--  </div>-->
  <div id="page-top">

    <!-- 로그인 -->

    <div class="portfolio-modal modal fade" id="RegisterPage" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content col-md-4">
          <div class="close-modal" data-bs-dismiss="modal"><img src="@/assets/img/close-icon.svg" alt="Close modal" /></div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="modal-body">
                  <!-- Project details-->
                  <h2 class="text-uppercase">회원가입</h2>
                  <p class="item-intro text-muted">Sign Up</p>


                  <form name="form" @submit.prevent="handleRegister">
                    <!--          successful = false면 회원가입 버튼 클릭 안 한 상태-->
                    <!--          successful = false면 회원가입 중 에러 발생 상태-->
                    <div v-if="!successful">

                      <!--            유저명 입력양식-->
                      <div class="form-group">
                        <label for="usernick">이름</label>
                        <input v-model="user.usernick" v-validate="'required|max:20'"
                               type="text" class="form-control" name="usernick">
                        <!--              submit 버튼을 누르고 유효성 에러가 방생 했을 경우 아래 내용이 보임-->
                        <div v-if="errors.has('usernick') && submitted"
                             class="alert alert-danger" role="alert">
                          {{ errors.first("usernick") }}
                        </div>
                      </div>

                      <!--            유저명 입력양식-->
                      <div class="form-group">
                        <label for="username">아이디</label>
                        <input v-model="user.username" v-validate="'required|min:3|max:20'"
                               type="text" class="form-control" name="username">
                        <!--              submit 버튼을 누르고 유효성 에러가 방생 했을 경우 아래 내용이 보임-->
                        <div v-if="errors.has('username') && submitted"
                             class="alert alert-danger" role="alert">
                          {{ errors.first("username") }}
                        </div>
                      </div>


                      <!--            이메일 입력양식-->
                      <div class="form-group">
                        <label for="email">이메일</label>
                        <input v-model="user.email" v-validate="'required|max:50'"
                               type="text" class="form-control" name="email">
                        <!--              submit 버튼을 누르고 유효성 에러가 방생 했을 경우 아래 내용이 보임-->
                        <div v-if="errors.has('email') && submitted"
                             class="alert alert-danger" role="alert">
                          {{ errors.first("email") }}
                        </div>
                      </div>


                      <!--            비밀번호 입력양식-->
                      <div class="form-group">
                        <label for="password">비밀번호</label>
                        <input v-model="user.password" v-validate="'required|min:6|max:40'"
                               type="password" class="form-control" name="password">
                        <!--              submit 버튼을 누르고 유효성 에러가 방생 했을 경우 아래 내용이 보임-->
                        <div v-if="errors.has('password') && submitted"
                             class="alert alert-danger" role="alert">
                          {{ errors.first("password") }}
                        </div>
                      </div>

<!--                      &lt;!&ndash;            비밀번호 질문 양식&ndash;&gt;-->
<!--                      <div class="form-group">-->
<!--                        <label for="pwdquest" class="form-label">비밀번호 찾기 질문</label>-->

<!--                        <select v-model="user.pwdquest" class="form-select" aria-label="Default select example">-->

<!--                          <option value="" disabled>비밀번호 찾기 질문을 선택해주세요.</option>-->
<!--                          <option v-for="question in questions" :key="question" :value="question">-->
<!--                            {{ question }}-->
<!--                          </option>-->

<!--                        </select>-->

<!--                        &lt;!&ndash;                        <input v-model="user.pwdquest" v-validate="'required|min:6|max:40'"&ndash;&gt;-->
<!--                        &lt;!&ndash;                               type="text" class="form-control" name="pwdquest">&ndash;&gt;-->
<!--                        &lt;!&ndash;              submit 버튼을 누르고 유효성 에러가 방생 했을 경우 아래 내용이 보임&ndash;&gt;-->
<!--                        <div v-if="errors.has('pwdquest') && submitted"-->
<!--                             class="alert alert-danger" role="alert">-->
<!--                          {{ errors.first("pwdquest") }}-->
<!--                        </div>-->
<!--                      </div>-->

<!--                      &lt;!&ndash;            비밀번호 답변 양식&ndash;&gt;-->
<!--                      <div class="form-group">-->
<!--                        <label for="pwdans">비밀번호 찾기 답변</label>-->
<!--                        <input v-model="user.pwdans" v-validate="'required|max:40'"-->
<!--                               type="text" class="form-control" name="pwdans">-->
<!--                        &lt;!&ndash;              submit 버튼을 누르고 유효성 에러가 방생 했을 경우 아래 내용이 보임&ndash;&gt;-->
<!--                        <div v-if="errors.has('pwdans') && submitted"-->
<!--                             class="alert alert-danger" role="alert">-->
<!--                          {{ errors.first("pwdans") }}-->
<!--                        </div>-->
<!--                      </div>-->


                      <div class="form-group">
                        <button class="btn btn-primary btn-block">
                          <span>Sign Up</span>
                        </button>
                      </div>


                    </div>

                  </form>

                  <!--        화면에 에러메세지 출력-->
                  <div v-if="message" class="alert" :class="successful ? 'alert-success' : 'alert-danger'">
                    {{ message }}
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  </div>
</template>

<script>

import User from "@/models/user";

export default {
  name: "Register",

  //변수 초기화
  data() {
    return {
      user: new User("", "", "", ""), // 유저 객체
      submitted: false,
      successful: false,
      message: "", //에러메세지 저장용
      questions: [
        "Q. 기억에 남는 추억의 장소는?",
        "Q. 자신의 인생 좌우명은?",
        "Q. 가장 기억에 남는 선생님 성함은?",
        "Q. 타인이 모르는 신체 비밀이 있다면?",
        "Q. 받았던 선물 중 기억에 남는 독특한 선물은?",
        "Q. 유년시절 가장 생각나는 친구 이름은?",
        "Q. 인상 깊게 읽은 책 이름은?",
        "Q. 읽은 책 중에서 좋아하는 구절이 있다면?",
        "Q. 자신이 두 번째로 존경하는 인물은?",
        "Q. 친구들에게 공개하지 않은 어릴 적 별명이 있다면?",
        "Q. 초등학교 때 기억에 남는 짝꿍 이름은?",
        "Q. 다시 태어나면 되고 싶은 것은?",
        "Q. 내가 좋아하는 캐릭터는?"
      ]
    }
  },
  computed: {
    loggedIn() {
      //공유 저장소의 user 객체의 속성인 loggedIn값을 가져옴
      return this.$store.state.auth.status.loggedIn;
    }
  },
  //화면이 뜨자마자 실행되는 이벤트
  // mounted() {
  //   //로그인 되어있는 유저이면 /profile로 페이지 강제 이동시킴
  //   if(this.loggedIn) {
  //     // this.$router.push("/profile");
  //   }
  // },
  methods: {

    handleRegister() {
      this.message = "";
      this.submitted = true; //회원가입 버튼 클릭시
      //유효성 체크 로직 실행(Vee-Validate 이용)
      //$validator.validate() 입력양식 유효성 체크가 통과하면
      //isValid = ㅅ겯
      this.$validator.validate()
          .then(isValid => {
            //isValid = true일때만 아래가 실행됨
            if(isValid) {
              //springboot 서버 통신 : 공유 저장소의 비동기 메소드 호출(register)
              this.$store.dispatch("auth/register", this.user)
                  //성공 / 실패 then
                  //결과가 성공하면 then(첫번째 매개변수)
                  //결과가 실패하면 then(두번째 매개변수)
                  .then(
                      //성공
                      data => {
                        //response == data(서버쪽 응답메세지(객체))
                        this.message = data.message;
                        this.successful = true;
                        //강제 페이지 전환(해도 되고 안해도 되고)
                        // this.$router.push("/login");
                      },
                      //실패
                      error => {
                        this.message = (error.message || error.toString());
                        this.successful = false;
                      }
                  )
            }
          })
    }
  }
}
</script>

<style scoped>

</style>