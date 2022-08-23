<template>
  <!--    기존 회원이 있을 경우 currentFaq != null -->
  <div class="container mt-5 pt-5" v-if="currentNotice">
    <!--    mb-3 : m(margin), p(padding) : l(left), r(right), b(bottom) , 1 : 25px, 2 50px -->
    <div class="mb-3">
      <label for="title" class="form-label">제목</label>
      <input
        type="text"
        class="form-control"
        id="title"
        required
        name="title"
        v-model="currentNotice.title"
      />
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Notice 내용</label>
      <quill-editor
        v-model="currentNotice.description"
        ref="myQuillEditor"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @change="onEditorChange($event)"
      >
      </quill-editor>
    </div>

    <div class="mb-3">
      <button @click="updateNotice" class="btn btn-primary me-3">Update</button>
      <button @click="deleteNotice" class="btn btn-danger">Delete</button>
    </div>
    <!--    수정버튼을 클릭후 성공했을때 아래가 보임 -->
    <div class="alert alert-success" role="alert" v-if="message">
      {{ message }}
    </div>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor"; //
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import NoticeDataService from "@/services/NoticeDataService";
import UserService from '@/services/auth/UserDataService';

export default {
  components: {
    quillEditor,
  },
  name: "edit_notice",
  data() {
    return {
      content: `<p></p><p><br></p><ol><li><strong><em>Or drag/paste an image here.</em></strong></li><li><strong><em>rerew</em></strong></li><li><strong><em>rtrete</em></strong></li><li><strong><em>tytrytr</em></strong></li><li><strong><em>uytu</em></strong></li></ol>`,
      editorOption: {},
      // 객체 ( 컴플레인정보 )
      currentNotice: null,
      message: "",
    };
  },
  methods: {
    onEditorReady(editor) {
      //
    },
    onEditorBlur() {}, //
    onEditorFocus() {}, //
    onEditorChange() {}, //
    //
    // id에 해당하는 회원정보를 조회하는 서비스를 요청(springboot)
    getNotice(id) {
      // axios 통신이용 서비스 호출( springboot )
      NoticeDataService.get(id)
        // 성공하면 then으로 결과 데이터가 들어옴( response.data )
        .then((response) => {
          this.currentNotice = response.data;
        })
        //  실패하면 catch로 에러 데이터가 들어옴
        .catch((e) => {
          alert(e);
        });
    },
    //  회원정보 수정 서비스 요청( springboot )
    updateNotice() {
      //  axios 통신으로 수정 서비스 요청( springboot )
      NoticeDataService.update(this.currentNotice.id, this.currentNotice)
        //  성공하면 then 으로 결과 데이터가 들어옴
        .then(() => {
          this.message = "The Notice was updated successfully!";
        })
        //  실패하면 catch 로 에러 데이터가 들어옴
        .catch((e) => {
          alert(e);
        });
    },
    //  회원삭제 서비스 요청(springboot)
    deleteNotice() {
      //  axios 이용해서 회원 삭제 요청( springboot )
      NoticeDataService.delete(this.currentNotice.id)
        //  성공하면 then으로 결과 데이터가 들어옴
        .then(() => {
          // router/index.js 안에 name
          // 화면 이동 : Faq 화면으로 이동됨
          this.$router.push({ name: "notice" });
        })
        //  실패하면 catch로 에러 데이터가 들어옴
        .catch((e) => {
          alert(e);
          //  console.log(e)
        });
    },
  },
  //  화면이 뜨면 실행되는 이벤트
  //  http://localhost:8080/:id
  //  $route : router/index.js , params.id
  mounted() {
    this.getNotice(this.$route.params.id);
    let content = ""; //
    this.str = this.escapeStringHTML(content);
    // 인증된 사용자만 볼 수 있는 페이지 : 헤더에 JWT를 실어 보냄
    UserService.getAdminBoard().then(
        response => {
          this.content = response.data;
        },
        error => {
          this.content =
              (error.response && error.response.data && error.response.data.message) ||
              error.message ||
              error.toString();
        }
    );
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
  },
};
</script>