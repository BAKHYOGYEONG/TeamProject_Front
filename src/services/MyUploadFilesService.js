import http from "../http-common";

class MyUploadFilesService {
  upload(username, title, content, file, onUploadProgress) {
    let formData = new FormData();
    formData.append("username", username);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("file", file);

    return http.post("/myfiles", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress
    });
  }

  getFiles(params) {
    return http.get("/myfiles", {params});
  }
    // tutorial 데이터 삭제 메소드
  delete(id) {
    return http.put(`/myfiles/deletion/${id}`);
  }

}

export default new MyUploadFilesService();
