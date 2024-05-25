import Main from "../pages/main/Main";
import SignIn from "../pages/login/SignIn";
import SignUp from "../pages/login/SignUp";
import DevLogin from "../pages/login/DevLogin";
import Adminka from "../pages/adminka/Adminka";

export const Links = [
    {path: '/devLogin', component: DevLogin, exact: true, key:'devLogin'},
    {path: '/admin', component: Adminka, exact: true, key:'admin'},
    {path: '/signIn', component: SignIn, exact: true, key:'signIn'},
    {path: '/signUp', component: SignUp, exact: true, key:'signUp'},
    {path: '/main', component: Main, exact: true, key:'main'}
]