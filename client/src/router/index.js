import Main from "../pages/main/Main";
import SignIn from "../pages/login/SignIn";
import SignUp from "../pages/login/SignUp";
import DevLogin from "../pages/login/DevLogin";

export const Links = [
    {path: '/signIn', component: SignIn, exact: true, key:'signIn'},
    {path: '/signUp', component: SignUp, exact: true, key:'signUp'},
    {path: '/devLogin', component: DevLogin, exact: true, key:'devLogin'},
    {path: '/main', component: Main, exact: true, key:'main'}
]