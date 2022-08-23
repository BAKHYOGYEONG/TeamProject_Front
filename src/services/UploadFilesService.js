import http from "../http-common";

class UploadFilesService {
  upload(title, content, file, onUploadProgress) {
    let formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("file", file);

    return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress
    });
  }

  getFiles(params) {
    return http.get("/files", {params});
  }
    // tutorial 데이터 삭제 메소드
  delete(id) {
    return http.put(`/files/deletion/${id}`);
  }

}

export default new UploadFilesService();
