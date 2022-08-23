import Vue from 'vue'
import VueRouter from 'vue-router'


// router : 메뉴달기 비교) springboot : controller (메뉴달기)
Vue.use(VueRouter)

const routes = [
    // home
    {
        path: '/',
        alias: "/home",
        name: 'home',
        component: () => import('@/views/HomeView')
    },
    // course
    {
        path: '/galinfo',
        name: 'galinfo',
        component: () => import('@/views/course/GalInfo')
    },
    {
        path: '/course1',
        name: 'course1',
        component: () => import('@/views/course/Course1')
    },
    {
        path: '/course2',
        name: 'course2',
        component: () => import('@/views/course/Course2')
    },
    {
        path: '/course3',
        name: 'course3',
        component: () => import('@/views/course/Course3')
    },
    {
        path: '/course4',
        name: 'course4',
        component: () => import('@/views/course/Course4')
    },
    {
        path: '/course5',
        name: 'course5',
        component: () => import('@/views/course/Course5')
    },
    {
        path: '/course6',
        name: 'course6',
        component: () => import('@/views/course/Course6')
    },
    {
        path: '/course7',
        name: 'course7',
        component: () => import('@/views/course/Course7')
    },
    {
        path: '/course8',
        name: 'course8',
        component: () => import('@/views/course/Course8')
    },
    {
        path: '/course9',
        name: 'course9',
        component: () => import('@/views/course/Course9')
    },
    // 플로깅
    {
        path: "/plogging",
        name: 'plogging',
        component: () => import('@/views/plogging/Plogging')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/components/home/Login')
    },
    // 마이페이지
    {
        path: '/mypage',
        name: 'mypage',
        component: () => import('@/views/MyPage')
    },
    // 프로필 플로깅
    {
        path: '/myplogging',
        name: 'myplogging',
        component: () => import('@/views/MyPlogging')
    },
    // 프로필 갤러
    {
        path: '/mygallury',
        name: 'mygallury',
        component: () => import('@/views/MyGallury')
    },

    // 커뮤니티
    //갤러리
    {
        path: '/gallury',
        name: 'gallury',
        component: () => import('@/views/gallury')
    },
    // 공지사항
    {
        path: '/notice',
        name: 'notice',
        component: () => import('@/views/notice/NoticeList')
    },
    {
        path: '/add_notice',
        name: 'add-add_notice',
        component: () => import('@/views/notice/AddNotice')
    },
    {
        path: '/edit_notice/:id',
        name: 'edit_notice',
        component: () => import('@/views/notice/EditNotice')
    },

]

const router = new VueRouter({
    mode: 'history',
    scrollBehavior(){
        return{ x: 0, y: 0}
    },
    base: process.env.BASE_URL,
    routes
})


//추후 게시판 생성시 활성화 예정

// //로그인 권한이 없는 사람과 있는 사람을 구별해서 보여주는 부분 추가
// //메뉴 이동할때 중간에 가로채는 이벤트
// //1st 매개변수 to : 이동 할 페이지
// //2nd 매개변수 from : 이동 전 페이지
// //3rd 매개변수 next : 다음 화면ㅁ으로 이동을 명령하는 함수
// router.beforeEach((to, from, next) => {
// //권한 관리 : 회원, 비회원
// //인증 없이 접근 가능한 경로(화면)
//     const publicPages = ["/login", "/home"];
//     //인증이 있어야만(회원) 접근 가능한 경로
//     const authRequired = !publicPages.includes(to.path);
//     //웹토큰을 가져와서 확인
//     //웹토큰 있으면 : 회원
//     //웹토큰 없으면 : 비회원
//     const loggedIn = localStorage.getItem("user");
//
//     //비화원일 경우
//     if(authRequired && !loggedIn) {
//         //강제로 로그인 화면으로 전환
//         next("/login")
//     }else {
//         //회원일경우
//         //다음화면으로 이동
//         next();
//     }
// })
//




export default router
