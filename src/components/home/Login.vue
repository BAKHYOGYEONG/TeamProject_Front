<template>
  <!--  bootstrap : col => 화면을 12등분으로 나누어 배치-->
  <div class="col-md-12">
    <div class="card card-container">
      <img id="profile-img" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
           class="profile-img-card"/>
      <form name="form" @submit.prevent="handleLogin">
        <!--      입력양식들 : 유효성 체크 Vee-validation-->

        <!--        220707 추가-->
        <div class="form-floating mb-3">
          <input type="text"
                 class="form-control"
                 id="floatingInputValue"
                 placeholder="아이디"
                 v-model="user.username"
                 v-validate="'required'"
          >
          <label for="floatingInputValue">ID</label>
          <!--          에러가 발생하면 error.has('username') 값이 true가 됨-->
          <!--          에러가 발생하지 않으면 error.has('username') 값이 false가 됨-->
          <div v-if="errors.has('username')"
               class="alert alert-danger" role="alert">
            아이디는 필수로 입력하셔야 합니다!
          </div>

        </div>
        <div class="form-floating">
          <input
              type="password"
              class="form-control is-invalid"
              id="floatingInputValue"
              placeholder="Password"
              v-model="user.password"
              v-validate="'required'"

          >
          <label for="floatingInputValue">Password</label>
          <!--          에러가 발생하면 error.has('username') 값이 true가 됨-->
          <!--          에러가 발생하지 않으면 error.has('username') 값이 false가 됨-->
          <div v-if="errors.has('password')"
               class="alert alert-danger" role="alert">
            비밀번호는 필수로 입력하셔야 합니다!
          </div>

        </div>

        <div class="form-group">
          <button class="btn btn-primary btn-block" :disabled="loading">
            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
            <span>로그인</span>
          </button>
        </div>

        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>

      </form>
    </div>
  </div>

</template>

<script>
import User from "@/models/user";

/*eslint-disable*/

export default {
  name: "Login",
  data() {
    return {
      user: new User("", ""),
      loading: false,
      message: ""
    }
  },
  computed: {
    //값은 false 아니면 true
    loggedIn() {
      //아래 내용은 공유저장소(store/index.js) 전역변수
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    //로그인이 되었으면 loggedIn = true
    //로그인이 안되었으면 loggedIn = false
    //사용자를 프로필 페이지로 안내
    if (this.loggedIn) {
      //Profile 페이지로 강제이동
      this.$router.push("/profile");
    }
  },
  methods: {
    //로그인 메소드 정의
    handleLogin() {
      this.loading = true;
      //Vee-validation npm 설치 : 뷰에서 유효성 체크 함
      //validateAll => v-validate 체크해서 모두 true, false인지 확인
      //값이 isValid = true(false)
      this.$validator.validateAll()
          .then(isValid => {
            //유효성체크가 걸린 입력박스가 하나라도 에러가 나면 : false
            //isValid = false 로그인함수 종료
            if (!isValid) {
              this.loading = false;
              return;
            }
            //로그인 절차 진행
            //springboot 서버와 통신
            if (this.user.username && this.user.password) {
              //springboot로 username, password 전송해서 로그인 진행
              //공유 저장소의 비동기 메소드 호출(login)
              this.$store.dispatch("auth/login", this.user)
                  //결과가 성공하면 then(첫번째 매개변수)
                  //결과가 실패하면 then(두번째 매개변수)
                  .then(
                      //성공
                      () => {
                        //로그인 성공시 자동 페이지 전환 : /profile 페이지
                        this.$router.push("/mypage");
                      },
                      //실패
                      error => {
                        this.loading = false;
                        this.message = (error.message || error.toString())
                      }
                  )
            }
          });
    }
  }
}
</script>

<style scoped>

label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

.form-group{
  margin-top: 30px;
}

</style>