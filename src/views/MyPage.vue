<template>
  <div class="page">
    <main class="mypage">
      <section class="profile"
               aria-label="profile">
        <div class="profile__people">
          <img
              class="profile__avatar"
              src="@/assets/img/portfolio/portfolio-4.jpg"
              alt="profile photo"
          />

<!--          <div class="profile__info">-->
<!--            <h1 class="profile__name">-->
<!--              {{ currentUser.username }}-->
<!--            </h1>-->
<!-- TODO : 0719 윤주 - 사진 업로드시 username 이 사라졌다가 나타나기도 해서 클래스명을 삭제해보니 안 사라짐 -->
          <div class="profile__info">
            <h1>
              {{ currentUser.username }}
            </h1>

            <p class="profile__job">
              <strong>E-Mail :</strong> {{ currentUser.email }}
            </p>
            <p></p>

          </div>
        </div>
      </section>

<!--      페이지 이동(플로깅/개인업로드 사진) part-->
      <section class="page__move container-fluid">
        <div class="page__move__item container-fluid">
        <button id="myPageBtn" class="popup__button mr-3" @click="plogging = true">
          <b>MY PLOGGING</b>
        </button>
        <button id="myPageBtn" class="popup__button" @click="plogging = false">
          <b>MY GALLERY</b>
        </button>
        </div>
        <!--  플로깅 인증 com-->
        <div id="plogging" v-if="plogging">
          <Plogging/>
        </div>
        <!--  개인 업로드 사진 관리 com-->
        <div id="mygallary" v-else>
          <MyGallury/>
        </div>
      </section>


<!--      <section class="elements" aria-label="photo">-->
<!--        &lt;!&ndash;      이미지 업로드 section&ndash;&gt;-->
<!--      </section>-->
    </main>

    <!--    유저 이름 수정 부분-->
    <div class="popup-edit popup">
      <div class="popup__container">
        <button
            type="button"
            class="popup-edit__close-button popup__close-button"
        ></button>
        <h2 class="popup__title">Edit name</h2>

        <form
            class="popup__form form-edit form"
            name="edit-form"
            id="form-edit"
            novalidate
        >
          <input
              id="form__input-text"
              type="text"
              name="name"
              class="popup__input popup__input_value_name form__input"
              placeholder="이름"
              value=""
              minlength="2"
              maxlength="40"
              required
          />
          <span class="form__input-text-error"></span>

          <button type="submit" class="popup__button">Save</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Plogging from "./MyPlogging.vue";
import MyGallury from "./MyGallury.vue";
import ProfileService from "../services/ProfileService";

/*eslint-disable*/

export default {
  name: "Profile",
  components: {
    Plogging,
    MyGallury,
  },

  data() {
    // 변수 초기화
    return {
      plogging: true,
      currentImage: undefined, // 현재이미지
      previewImage: undefined, // 미리보기 이미지
      progress: 0, // 프로그래스바를 위한 변수
      message: "",
      mes: "",
      imageInfo: [], // 이미지 정보 객체배열
      // todo: 이미지와 변수 같이 보내기
      // Todo : 아래 변수 추가
      page: 1,
      count: 0,
      pageSize: 3,
      pageSizes: [3, 6, 9],
      usernick: "",
      url: "",
      openModal: false,
      clicked: false,
      currentIndex: -1,
    };
  },

  methods: {
    // 목록 삭제 후 화면 다시 로딩할때 사용할 메소드
    // 새로고침 메소드
    refreshList() {
      this.currentImage = null;
      this.currentIndex = -1;
      this.retrieveUpload();
    },
    // Todo : getRequestParams 추가
    getRequestParams(username, usernick, page, pageSize) {
      let params = {};
      if (username) {
        params["username"] = username;
      }

      if (usernick) {
        params["usernick"] = usernick;
      }

      if (page) {
        params["page"] = page - 1;
      }

      if (pageSize) {
        params["size"] = pageSize;
      }
      console.log(params);
      return params;
    },
    // todo :
    retrieveUpload() {
      // Todo : getRequestParams 호출 추가
      const params = this.getRequestParams(
          this.currentUser.username,
          this.currentUser.usernick,
          this.page,
          this.pageSize
      );
      console.log(params);
      ProfileService.getFiles(params)
          // 성공하면 then에 들어옴(객체, 응답메세지)
          .then((response) => {
            // response.data : 서버쪽에서 전송된 객체
            this.imageInfo = response.data;
            this.count = this.imageInfo[0].totalItems;
          });
      console.log(params);
    },
    // 이미지를 선택하면 변수에 저장하는 메소드
    selectImage() {
      // 파일선택상자에서 첫번째로 선택한 이미지가 저장됨
      this.currentImage = this.$refs.file.files.item(0);
      // 아래는 미리보기 이미지를 위한 주소가 저장됨
      this.previewImage = URL.createObjectURL(this.currentImage);
      this.progress = 0;
      this.message = "";
    },
    // 파일 업로드를 위한 메소드
    upload() {
      this.progress = 0;

      // 서버에 이미지 업로드 요청(insert 문 실행)
      ProfileService.upload(
          this.currentUser.username,
          this.currentUser.usernick,
          this.currentImage,
          (event) => {
            // 파일이 업로드될때 진척상황이 저장됨(%)
            this.progress = Math.round((100 * event.loaded) / event.total);
          }
      )
          // 성공하면 then 으로 들어옴(서버에서 응답한 객체)
          .then((response) => {
            const params = this.getRequestParams(
                this.currentUser.username,
                this.currentUser.usernick,
                this.page,
                this.pageSize
            );

            // 서버쪽 응답 메시지 저장
            this.message = response.data.message;
            // 서버쪽에 insert가 잘되었는지
            // select문 호출
            return ProfileService.getFiles(params);
          })
          // 성공하면 then으로 들어옴(서버쪽 객체 받음)
          .then((image) => {
            this.imageInfo = image.data;
            console.log("ㅋㅋㅋㅋㅋ" + image.data);
          })
          // 실패하면 catch으로 들어옴
          // 화면에 실패메세지 출력
          .catch((err) => {
            this.progress = 0;
            this.message = "Could not upload the image!" + err;
            this.currentImage = undefined;
          });
    },
    //  TODO 삭제 서비스 요청(springboot)
    deletePhoto(index) {
      // alert(this.currentPhoto)
      //  axios 이용해서 회원 삭제 요청( springboot )
      // alert(this.currentPhoto.id)
      ProfileService.delete(this.imageInfo[index].id)
          //  성공하면 then으로 결과 데이터가 들어옴
          .then(() => {
            // router/index.js 안에 name
            // 화면 이동 : FreeBoards 화면으로 이동됨
            alert("삭제가 완료되었습니다");
            // this.$router.push("/home");
            this.refreshList();
          })
          //  실패하면 catch로 에러 데이터가 들어옴
          .catch((e) => {
            alert(e);
            //  console.log(e)
          });
    },
    // Todo : handlePageChange, handlePageSizeChange
    handlePageChange(value) {
      this.page = value;
      this.retrieveUpload();
    },

    handlePageSizeChange(event) {
      this.pageSize = event.target.value;
      this.page = 1;
      this.retrieveUpload();
    },
  },

  computed: {
    currentUser() {
      return this.$store.state.auth.user;
      // return true;
    },
  },
  //화면이 뜨자마자 실행되는 이벤트
  mounted() {
    //사용자가 로그인 하지 않은 경우 로그인페이지로 강제이동
    if (!this.currentUser) {
      //로그인 페이지로 강제 이동 시킴
      this.$router.push("/login");
    }
    this.retrieveUpload();
        // this.getFiles(this.$route.params.id),

  },
};
</script>

<style scoped>
@import "@/assets/css/mypage.css";
@import "@/assets/css/popup.css";
@import "@/assets/css/elements.css";

section.profile {
  padding: 3rem 0;
}
.page__move__item {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 1.5rem;
}

@media all and (min-width: 320px) and (max-width: 767px) {
  #myPageBtn {
    padding: 5px 10px;
    line-height: 1.5;
    border-radius: 3px;
    max-width:160px;
  }
}
</style>