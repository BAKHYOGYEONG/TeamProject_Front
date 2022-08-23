<template>
  <div class="page">
    <main class="mypage">
      <!-- 코스 구간별 필터링 : search 관련 div 시작 -->
      <section class="profile"
               aria-label="profile">
        <div class="input-group justify-content-around">
          <!-- 코스 구간별로 보기 : 검색 select 박스 -->
          <p class="course__section">코스 구간별로 보기</p>
          <select
              class="form-select"
              aria-label="Default select example"
              v-model="searchTitle"
              @change="handleCourseSizeChange($event)"
          >
            <!-- pageSizes : [3, 6, 9] -->
            <option disabled value="title">코스 구간을 선택해주세요</option>
            <option value="">전체보기</option>
            <option v-for="title in titles" :key="title" :value="title">
              {{ title }}
            </option>
          </select>
        </div>
        <button
            class="open-popup profile__add-button ml-3"
            type="button"
            aria-label="add button"></button>
      </section>
      <!-- search 관련 div 끝 -->

      <!--    사진 업로드 버튼-->
      <div class="popup popup-add mt-5 pt-4">
        <div class="popup__container">
          <button type="button"
                  class="popup-add__close-button popup__close-button"></button>

          <h2 class="popup__title">New Photo</h2>

          <!--사진업로드 팝업창-->
          <form
              class="popup__form form-add form"
              name="add-form"
              @click="openModal = false"
              id="form-add" novalidate>

            <!-- title 코스 구간 선택 select box  #시작-->
            <div class="input-group2">
              <label for="title"
                     class="form-label">
                <!--                코스 구간-->
              </label>
              <select v-model="title">
                <option value="" disabled>
                  코스와 구간을 선택해주세요
                </option>
                <option
                    v-for="title in titles"
                    :key="title"
                    :value="title">
                  {{ title }}
                </option>
              </select>
            </div>
            <!-- title 코스 구간 선택 select box  #끝 -->

            <!-- 사진 내용 입력박스  #시작 -->
            <div class="input-group2">
              <label for="content"
                     class="form-label mr-2">
                내용
              </label>
              <input
                  type="text"
                  class="input-group-append"
                  id="content"
                  required
                  name="content"
                  v-model="content"
              />
            </div>
            <!-- 사진 내용 입력박스  #끝 -->

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
            <div v-if="previewImage"
                 class="container add-image__preview">
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

      <div class="col-md-12">
        <!--포토갤러리-->
        <section class="elements" aria-label="photo">
          <template id="element-template">
            <article
                class="element"
                v-for="(image, index) in imageInfo"
                :key="index"
            >

              <!--      todo: modal Dialog 시작 -->
              <div
                  class="modal fade"
                  :id="'myModal'+index"
                  data-backdrop="static"
                  data-keyboard="false"

              >
                <div class="modal-dialog modal-xl modal-dialog-centered">
                  <div class="modal-content">
                    <button type="button"
                            class="close popup__close-button"
                            data-dismiss="modal">

                    </button>
                    <!-- Modal Header -->
                    <div class="modal-header">
                      <h2 class="modal-title">{{ image.title }}</h2>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                      <img
                          id="modal"
                          class="card-img-top rounded img-fluid"
                          :src="image.url"
                      />
                    </div>
                    <div>
                      <h4 class="modal-title">{{ image.content }}</h4>
                    </div>
                    <!-- Modal footer -->
                    <div class="modal-footer">
                      <button
                          type="button"
                          class="popup__button popup-add__button form__button"
                          data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!--      todo: 부트스트랩 modal Dialog 끝 -->

              <!--          삭제 버튼-->
              <button
                  type="button"
                  class="element__trash"
                  aria-label="button delete"
                  @click="deletePhoto(index)"
              ></button>
              <!--          사진 부분-->
              <img
                  :src="image.url"
                  class="element__image"
                  @click="clicked = true"
                  alt=""
              />
              <!--                  크게보기-->
              <button
                  type="button"
                  id="plusSize"
                  class="element__trash"
                  data-toggle="modal"
                  :data-target="'#myModal'+index"
              >
              </button>
            </article>
          </template>
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

      </div>
    </main>
  </div>
</template>

<script>
import MyUploadFilesService from "@/services/MyUploadFilesService";
import index from "@/assets/js/index"


export default {
  name: "upload-image",
  data() {
    // 변수 초기화
    return {
      currentImage: undefined, // 현재이미지
      previewImage: undefined, // 미리보기 이미지
      progress: 0, // 프로그래스바를 위한 변수
      message: "",
      imageInfo: [], // 이미지 정보 객체배열
      // todo: 이미지와 변수 같이 보내기
      title: "",
      content: "",
      // Todo : 아래 변수 추가
      page: 1,
      count: 0,
      pageSize: 3,
      pageSizes: [3, 6, 9],
      openModal: false,
      clicked: false,
      titles: [
        "1코스 1구간",
        "1코스 2구간",
        "2코스 1구간",
        "2코스 2구간",
        "3코스 1구간",
        "3코스 2구간",
        "4코스 1구간",
        "4코스 2구간",
        "5코스 1구간",
        "5코스 2구간",
        "6코스 1구간",
        "6코스 2구간",
        "7코스 1구간",
        "7코스 2구간",
        "8코스 1구간",
        "8코스 2구간",
        "9코스 1구간",
        "9코스 2구간",
      ],
      currentIndex: -1,
      searchTitle: "",
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
    //  TODO 삭제 서비스 요청(springboot)
    deletePhoto(index) {
      // alert(this.currentPhoto)
      //  axios 이용해서 회원 삭제 요청( springboot )
      // alert(this.currentPhoto.id)
      MyUploadFilesService.delete(this.imageInfo[index].id)
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
    // Todo : getRequestParams 추가
    getRequestParams(username, searchTitle, page, pageSize) {
      let params = {};
      if (username) {
        params["username"] = username;
      }
      if (searchTitle) {
        params["title"] = searchTitle;
      }

      if (page) {
        params["page"] = page - 1;
      }

      if (pageSize) {
        params["size"] = pageSize;
      }

      return params;
    },
    // todo :
    retrieveUpload() {
      // Todo : getRequestParams 호출 추가
      const params = this.getRequestParams(
          this.currentUser.username,
          this.searchTitle,
          this.page,
          this.pageSize
      );
      console.log(params);
      MyUploadFilesService.getFiles(params)
          // 성공하면 then에 들어옴(객체, 응답메세지)
          .then((response) => {
            // response.data : 서버쪽에서 전송된 객체
            this.imageInfo = response.data;
            this.count = this.imageInfo[0].totalItems;
          })
          .catch(() => {
            alert("등록된 사진이 없습니다");
          });
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
      // alert(this.title)
      // 서버에 이미지 업로드 요청(insert 문 실행)
      MyUploadFilesService.upload(this.currentUser.username, this.title, this.content, this.currentImage, (event) => {
        // 파일이 업로드될때 진척상황이 저장됨(%)
        this.progress = Math.round((100 * event.loaded) / event.total);
      })
          // 성공하면 then 으로 들어옴(서버에서 응답한 객체)
          .then((response) => {
            // 서버쪽 응답 메시지 저장
            this.message = response.data.message;
            // 서버쪽에 insert가 잘되었는지
            // select문 호출
            // Todo : getRequestParams 호출 추가
            const params = this.getRequestParams(
                this.currentUser.username,
                this.searchTitle,
                this.page,
                this.pageSize
            );
            return MyUploadFilesService.getFiles(params);
          })
          // 성공하면 then으로 들어옴(서버쪽 객체 받음)
          .then((image) => {
            this.imageInfo = image.data;
          })
          // 실패하면 catch으로 들어옴
          // 화면에 실패메세지 출력
          .catch((err) => {
            this.progress = 0;
            this.message = "Could not upload the image!" + err;
            this.currentImage = undefined;
          });
    },
    // Todo : 페이징 handlePageChange, handlePageSizeChange
    handlePageChange(value) {
      this.page = value;
      this.retrieveUpload();
    },

    handlePageSizeChange(event) {
      this.pageSize = event.target.value;
      this.page = 1;
      this.retrieveUpload();
    },

    handleCourseSizeChange(event) {
      // this.pageSize = event.target.value;
      // this.page = 1;
      // this.retrieveUpload();
      // alert(event.target.value)
      // this.searchTitle = event.target.value
      // alert(this.searchTitle)
      this.retrieveUpload();
    },
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
      // return true;
    }
  },
  // 화면이 뜨자마자 실행되는 이벤트
  mounted() {
    // springboot 서버에 이미지파일 요청
    this.retrieveUpload();
    index();
  },

};
</script>

<style scoped>
@import "@/assets/css/mypage.css";
@import "../assets/css/elements.css";
@import "../assets/css/popup.css";



.add-image__preview {
  align-items: center;
  justify-content: center;
  max-width: 250px;
}

.add-image__image {
  /*max-width: 250px;*/
  width: 250px;
  height: 200px;
}

@media all and (max-width: 768px) {
  .add-image__image {
    max-width: 100%;
  }
}

.progress {
  width: 200px;
  margin-top: 20px;
}


.open-popup {
  float: right;
}

select {
  height: 70%;
}

#plusSize {
  top: 250px;
  right: 10px;
  position: absolute;
  border: none;
  display: block;
  background-image: url("@/assets/img/magnifying-glass-search-find-svgrepo-com.svg");
  background-repeat: no-repeat;
}
#plusSize:hover{
  opacity: 0.5;
}

.input-group {
  flex: 1 1 auto;

}

.form-select {
  flex: 1 1 auto;
  width: auto;
  margin-bottom: 10px;
}

label {
  margin-bottom: 1rem;
}

</style>