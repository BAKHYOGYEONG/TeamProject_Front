<template>
  <div class="page">
    <!--    <div>-->
    <main class="mypage">
      <section class="plogging__info"
               aria-label="plogging__info">
        <div class="profile__info">

          <p class="elements__sum_title">
            <strong>{{ count }}</strong>번의 플로깅에 동참하셨습니다.
          </p>

        </div>
        <button
            class="open-popup profile__add-button ml-3"
            type="button"
            aria-label="add button"></button>
      </section>


      <section class="elements"
               aria-label="photo"
      >

        <!--      이미지 업로드 section-->
        <!--        todo: template -> div 수정 why? vue 가 내부적으로 template 사용하기 때문에 template 안에 template 인식 못함 -->
        <div
            id="element-template"
            class="card"
            v-for="(image, index) in imageInfo"
            :key="index"
        >

          <article class="element">

            <button type="button"
                    class="element__trash"
                    aria-label="delete button"
                    @click="deletePhoto(index)"
            ></button>

            <img :src="image.url"
                 class="element__image"
                 alt=""
            >
          </article>
        </div>
      </section>

      <!--    Todo : page 바 시작 -->
      <div class="pageSelect">
        <div class="pageSize">
          <select v-model="pageSize" @change="handlePageSizeChange($event)">
            <option v-for="size in pageSizes" :key="size" :value="size">
              <!-- size : 3, 6, 9 -->
              {{ size }}
            </option>
          </select>
          개씩 보기
        </div>
        <div class="pagination">
          <b-pagination
              v-model="page"
              :total-rows="count"
              :per-page="pageSize"
              prev-text="Prev"
              next-text="Next"
              @change="handlePageChange"
          >
          </b-pagination>
        </div>
      </div>
      <!--    Todo : page 바 끝 -->



    </main>


    <!--    사진 업로드 버튼-->
    <div class="popup popup-add">
      <div class="popup__container">
        <button type="button"
                class="popup-add__close-button popup__close-button mt-3"
        ></button>

        <h2 class="popup__title">New Photo</h2>

        <!--사진업로드 팝업창-->
        <form
            class="popup__form form-add form"
            name="add-form"
            id="form-add" novalidate>

          <label for="formFileSm"
                 class="form-label">
            <input
                class="form-control form-control-sm"
                id="formFileSm"
                type="file"
                accept="image/*"
                ref="file"
                @change="selectImage"
            />
          </label>


          <!-- 미리보기 이미지 시작-->
          <div v-if="previewImage" class="container add-image__preview">
            <img class="add-image__image"
                 :src="previewImage"
                 alt=""/>
          </div>
          <!--  미리보기 이미지 끝 -->

          <!-- 프로그래스 바 시작-->
          <div v-if="currentImage" class="progress">
            <div
                class="progress-bar progress-bar-striped progress-bar-animated bg-info"
                role="progressbar"
                :style="{ width: progress + '%' }"
                :aria-valuenow="progress"
                aria-valuemin="0"
                aria-valuemax="100"
            >
              {{ progress }}%
            </div>
          </div>
          <!-- 프로그래스 바 끝-->


          <span class="form__input-link-error"></span>

          <button
              type="submit"
              class="popup__button popup-add__button form__button"
              :disabled="!currentImage"
              @click="upload"
          >
            Add Photo
          </button>
          <div v-if="message" class="alert alert-secondary" role="alert">
            {{ message }}
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script>

import ProfileService from "../services/ProfileService";
import index from "@/assets/js/index"

/*eslint-disable*/

export default {
  name: "Profile",

  data() {
    // 변수 초기화
    return {
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
      currentIndex: -1
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
      console.log(params)
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
      console.log(params)
      ProfileService.getFiles(params)
          // 성공하면 then에 들어옴(객체, 응답메세지)
          .then((response) => {
            // response.data : 서버쪽에서 전송된 객체
            this.imageInfo = response.data;
            this.count = this.imageInfo[0].totalItems;
          });
      console.log(params)
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
      ProfileService.upload(this.currentUser.username, this.currentUser.usernick, this.currentImage, (event) => {
        // 파일이 업로드될때 진척상황이 저장됨(%)
        this.progress = Math.round((100 * event.loaded) / event.total);
      })
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
            console.log("ㅋㅋㅋㅋㅋ" + image.data)
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
    }
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
    index();
  }

}</script>

<style scoped>
@import "@/assets/css/mypage.css";
@import "@/assets/css/popup.css";
@import "@/assets/css/elements.css";


.add-image__preview {
  align-items: center;
  justify-content: center;
  max-width: 250px;
}

.add-image__image {
  max-width: 250px;
}

@media all and (max-width: 768px) {
  .add-image__image {
    max-width: 100%;
  }
}

.progress {
  width: 200px;
  margin-top: 40px;
}

.card {
  border-radius: 11px;
}

.open-popup {
  float: right;
  opacity: 100;
}

select {
  height: 70%;
}

.plogging__info{
  margin-top: 0;
  display: flex;
  justify-content: center;
  flex-direction: row;

}
@media all and (min-width: 320px) and (max-width: 767px) {
  .plogging__info {
    flex-direction: column;
    margin: 0;
    justify-content: center;
    align-items: center;
  }
}


</style>