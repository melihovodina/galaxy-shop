import Main from "../pages/main/Main";
import Login from "../pages/login/Login";

export const Links = [
    {path: '/login', component: Login, exact: true, key:'login'},
    {path: '/main', component: Main, exact: true, key:'main'}
]