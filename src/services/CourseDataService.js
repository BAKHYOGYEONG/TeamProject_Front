import http from "../http-common";

class CourseDataService {

  getAll(numOfRows, pageNo) {
    return http.get(`https://cors-anywhere.herokuapp.com/http://apis.data.go.kr/6260000/fbusangmgcourseinfo/getgmgcourseinfo?ServiceKey=0kZ0WK8arTpPBX91Fbzb61oXu2uUXvXB4Ntyn%2Fxd7o2BPkd7FYIDHG%2FXOajslpuM5KmefkUcOmmmOXlh%2BL%2Beig%3D%3D&numOfRows=${numOfRows}&pageNo=${pageNo}&resultType=json`);
  }

}


export default new CourseDataService();
