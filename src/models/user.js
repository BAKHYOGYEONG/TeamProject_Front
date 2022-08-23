//사용자(user) 모델을 정의
//자바스크립트 클래스 정의
export default class User {
    //자바스크립트 생성자 정의
    constructor(username, usernick, email, password, role) {
        this.username = username;
        this.usernick = usernick;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}
