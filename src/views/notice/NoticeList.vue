<template>
  <div class="container mt-5 pt-5">
    <main class="notice">
      <!-- search 관련 div 시작 -->
      <div class="container-fluid col-md-8 align-content-center">
        <div class="input-group2 mb-3">
          <!-- Todo: 수정 시작 #1 -->
          <!-- 검색 입력 박스 -->
          <input
              type="text"
              class="form-control"
              placeholder="Search by Title"
              v-model="searchTitle"
          />
          <!-- 검색 버튼 -->
          <div class="input-group-append">
            <button
                class="btn btn-outline-secondary"
                type="button"
                @click="
              page = 1;
              retrieveNotices();
            "
            >
              Search
            </button>
          </div>
          <!-- Todo: 수정 끝 #1-->
        </div>
      </div>
      <!-- search 관련 div 끝 -->

      <!--todo 아코디언 시작-->
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div
            class="accordion-item"
            v-for="(notice, index) in notices"
            :key="index"
        >
          <!-- accordion-header 제목  -->
          <h2 class="accordion-header" id="flush-heading">
            <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#flush-collapse' + notice.id"
                aria-expanded="false"
                aria-controls="flush-collapse"
            >
              {{ notice.title }}
            </button>
          </h2>
          <!-- accordion-body 내용 -->
          <div
              :id="'flush-collapse' + notice.id"
              class="accordion-collapse collapse"
              aria-labelledby="flush-heading"
              data-bs-parent="#accordionFlushExample"
          >
            <div class="container accordion-body">
              <router-link :to="'/edit_notice/'+notice.id">
                <button
                    type="button"
                    class="btn btn-primary"
                    v-if="showAdmin"
                >
                  수정
                </button>
              </router-link>
              작성일 : {{ notice.insertTime }} <br/>
              <hr/>
              <p v-html="notice.description"></p>
              <br>

            </div>
          </div>
        </div>
      </div>

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


      <router-link to="/add_notice">
        <button
            type="button"
            class="btn btn-primary"
            v-if="showAdmin"
        >
          글쓰기
        </button>
      </router-link>

    </main>
    <!-- Login  -->
    <Login/>

    <!-- Register  -->
    <Register/>
  </div>

</template>

<script>
import NoticeDataService from "@/services/NoticeDataService";

import Login from "@/components/home/LoginMD";
import Register from "@/components/home/RegisterMD";

/* eslint-disable */
export default {
  name: "notice",
  components: {

    Login,
    Register
  },
  data() {
    return {
      notices: [],
      currentNotice: null,
      currentIndex: -1,
      // Todo : title -> searchTitle 변경
      searchTitle: "",
      // Todo : 아래 변수 4개 추가
      // page: 페이지 번호
      page: 1,
      count: 0,
      // pageSize : 페이지 당 노출될 건 수
      pageSize: 3,
      // pageSizes : 한 페이지당 3, 6, 9 노출될 건 수
      pageSizes: [3, 6, 9],
      showSection: true,
      display_div: false,
    };
  },
  methods: {
    toggleDiv: function () {
      this.display_div = !this.display_div;
    },
    toggle() {
      this.showSection = !this.showSection;
    },
    // Todo : getRequestParams 추가
    // getRequestParams: springboot 쪽으로 URL params(매개변수들) 전송하여,
    //      => ex) http://localhost:8000/api/tutorials?title=''&page=1&size=3
    // 'title=''&page=1&size=3'을 만들기 위한 메소드
    getRequestParams(searchTitle, page, pageSize) {
      let params = {};

      // searchEmail 값이 있으면 params 객체에 writer로 저장
      if (searchTitle) {
        params["title"] = searchTitle;
      }
      // page 값이 있으면 params 객체에 page에 저장
      if (page) {
        params["page"] = page - 1;
      }
      // pageSize 값이 있으면 params 객체에 size로 저장
      if (pageSize) {
        params["size"] = pageSize;
      }

      return params;
    },
    // Todo : 아래 메소드 수정
    // Todo : getAll() => getAll(params)
    // 전체 목록 조회 메소드
    retrieveNotices() {
      // Todo : getRequestParams 호출 추가
      const params = this.getRequestParams(
          this.searchTitle,
          this.page,
          this.pageSize
      );

      // Todo: 백엔드 쪽으로 전체 데이터 요청(페이징 처리)
      // 백엔드(spring)쪽으로 전체 데이터 요청
      NoticeDataService.getAll(params)
          // 성공하면 then으로 들어옴
          // response : 헤더(상태정보,쿠키등), 바디(json)
          // data : Faq 객체(백엔드에서 전송됨)
          .then((response) => {
            // Todo : 아래 수정
            // 임시변수 FreeBoards, totalItems(서버의 결과데이터가 들어옴)
            const {notices, totalItems} = response.data;

            // springboot 받은 객체 정보
            this.notices = notices; // 객체
            // springboot에서 받은 총 데이터 건 수
            this.count = totalItems; // 총 건수

            // 데이터 잘 들어왔는지 로그 확인
            console.log(response.data);
          })
          // 실패하면 에러 출력
          .catch((e) => {
            console.log(e);
          });
    },
    // Todo: 메소드 2개 추가: handlePageChange, handlePageSizeChange
    handlePageChange(value) {
      // handlePageChange : 현재 페이지 번호에 해당하는 데이터 다시 조회하는 메소드
      // 페이지 번호 저장
      this.page = value;
      // 다시 데이터 조회
      this.retrieveNotices();
    },
    handlePageSizeChange(event) {
      // handlePageSizeChange : 페이지 사이즈(3, 6, 9) 변경시 호출되는 메소드
      this.pageSize = event.target.value; // select 박스의 값
      this.page = 1;
      // 다시 데이터 조회
      this.retrieveNotices();
    },
    // 목록 삭제 후 화면 다시 로딩할때 사용할 메소드
    // 새로고침 메소드
    refreshList() {
      this.currentNotice = null;
      this.currentIndex = -1;
      this.retrieveNotices();
    },
    // vue의 data 변수에 값을 저장하는 메소드
    // 클릭했을때 현재값을 저장함
    setActiveNotice(notice, index) {
      this.currentNotice = notice;
      this.currentIndex = index;
    },
    // 모든 목록 삭제 메소드
    removeAllNotice() {
      // 백엔드쪽으로(spring) 전체 데이터 삭제 요청
      NoticeDataService.deleteAll()
          // 성공하면 then 으로 들어옴
          .then((response) => {
            console.log(response.data);
            // 모든 데이터 삭제했으므로 새로고침 메소드 호출
            this.refreshList();
          })
          // 실패하면 catch로 들어옴
          .catch((e) => {
            console.log(e);
          });
    },
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdmin() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }

      return false;
    },
  },
  //화면이 뜨자마자 실행되는 이벤트(모든 회원조회가 실행됨)
  mounted() {
    this.retrieveNotices();
  },
};
</script>

<style>
.btn {
  margin-right: 0;
  float: right;
}

.notice {
  margin: 0 40px;
}
</style>