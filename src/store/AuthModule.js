import AuthService from "@/services/auth/AuthService";

//로컬저장소(localstorage)에서 user의 정보를 받기
const user = JSON.parse(localStorage.getItem("user"));

//user 상태 정보 설정
//1) 로그인(loggedIn)이 되어있을 때 상태 정보 loggedIn=true
//2) 로그인(loggedIn)이 되지 않았을 때 상태 정보 loggedIn=false
// ( 조건==true ) ? 1번 : 2번
const initialState = user ? { status: { loggedIn: true }, user } : { status: { loggedIn: false }, user: null }


export const auth = {
    namespaced:true,
    //공유 데이터 정의(전역변수)
    state: initialState,
    //setter메소드 정의( 변수에 저장하는 메서드 )
    mutations: {
        //로그인 성공 메서드
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.user = user;
        },

        //로그인 실패 메서드
        loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },

        //로그아웃 메서드(상태정보 갱신신)
       logout(state) {
            state.status.loggedIn = false;
            state.user = null;
        },

        //회원가입 성공 메서드( 상태정정보 갱신 : alse )
        registerSuccess(state) {
            state.status.loggedIn = false;
            state.user = null;
        },

        //회원가입 성공 메서드( 상태전보 갱신 : false )
        registerFailure(state) {
            state.status.loggedIn = false;
            // state.user = null;
        }

    },
    //비동기함수들 정의
    //axios통신 성격 : 서버에서 결과를 언제 보내줄지 모름
    actions: {
        login({ commit }, user) {
            //axios 통신 : login(AuthService.login)
            //springboot로 login 관련 요청( username, password )
            //성공하면 결과가 then으로 들어옴
            return AuthService.login(user).then( user => {
                    //commit 안에 mutations 메소드명
                    //loginSuccess(state, user)메서드 호출
                    //loggedIn : true, user : user
                        commit('loginSuccess', user);
                        return Promise.resolve(user);
                    },
                    error => {
                        //loginFailure(state)메소드 호출
                        commit('loginFailure');
                        return Promise.reject(error);
                    }
                );
        },

        //logout(AuthService.logout)호출
        logout({commit}) {
            //로컬 저장소에서 user 삭제(제거)
            AuthService.logout();
            //상태정보 갱신 : loggedIn = false
            //mutations : logout(state)메소드 호출
            commit("logout")
        },

        //register(회원가입)
        register({commit}, user) {
            //axios(post)로 서버쪽으로 user 객체 전송 후 insert 요청을 함
            return AuthService.register(user)
                .then( response => {
                        //commit 안에 mutations 메소드명
                        // mutations : registerSuccess(state)메서드 호출
                        commit('registerSuccess');
                        console.log(response.data);
                        return Promise.resolve(response.data);
                    },
                    error => {
                        //registerFailure(state)메소드 호출
                        commit('registerFailure');
                        return Promise.reject(error);
                    }
                );

        }
    }
}
















