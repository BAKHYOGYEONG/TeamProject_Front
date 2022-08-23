import http from "../http-common";

class ProfileService {
  upload(username, usernick, file, onUploadProgress) {
    let formData = new FormData();

    formData.append("username", username);
    formData.append("usernick", usernick);
    formData.append("file", file);

    return http.post("/uploadpf", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress
    });
  }

  getFiles(params) {
    return http.get("/filespf", {params});
  }
    // tutorial 데이터 삭제 메소드
  delete(id) {
    return http.put(`/filespf/deletion/${id}`);
  }

}

export default new ProfileService();
