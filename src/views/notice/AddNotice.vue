<template>
  <div class="container mt-5 pt-5">
    <div v-if="!submitted">
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          name="title"
          v-model="notice.title"
        />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">내용</label>

        <quill-editor
          v-model="notice.description"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @change="onEditorChange($event)"
        >
        </quill-editor>
      </div>

      <div class="mb-3">
        <button @click="saveNotice" class="btn btn-primary">Submit</button>
      </div>
    </div>

    <div v-else>
      <div class="alert alert-success" role="alert">
        Save Notice successfully!
      </div>

      <button @click="newNotice" class="btn btn-primary">Add New Notice</button>
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
  name: "AddNotice",
  data() {
    // 객체 , 변수 초기화
    return {
      content: `<p></p><p><br></p><ol><li><strong><em>Or drag/paste an image here.</em></strong></li><li><strong><em>rerew</em></strong></li><li><strong><em>rtrete</em></strong></li><li><strong><em>tytrytr</em></strong></li><li><strong><em>uytu</em></strong></li></ol>`,
      editorOption: {},
      notice: {
        id: null,
        title: "",
        description: "",
        inserttime: "",
      },
      submitted: false,
    };
  },
  methods: {
    onEditorReady(editor) {
      //
    },
    onEditorBlur() {}, //
    onEditorFocus() {}, //
    onEditorChange() {}, //

    // 저장 메소드 호출
    saveNotice() {
      //  회원 임시 객체 만들기
      let data = {
        title: this.notice.title,
        description: this.notice.description,
        inserttime: this.notice.inserttime,
      };
      //  임시 회원 객체를 서버쪽으로 전달해서 DB에 insert 요청
      NoticeDataService.create(data)
        //  성공하면 then으로 들어옴
        .then((response) => {
          this.notice.id = response.data.id;
          this.submitted = true; // DB insert 성공
        })
        //  실패하면 catch으로 에러메세지가 들어옴
        .catch((e) => {
          alert(e);
        });
    },
    // 새 회원가입을 위한 빈 form을 만드는 메소드(변수 초기화)
    newNotice() {
      this.submitted = false;
      this.notice = {};
    },
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
  },
  mounted() {
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
};
</script>

<style scoped>
#description {
  white-space: pre-line;
}
</style>