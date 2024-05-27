import Main from "../pages/main/Main";
import SignIn from "../pages/login/SignIn";
import SignUp from "../pages/login/SignUp";
import Profile from "../pages/profile/Profile";

export const Links = [
    {path: '/signIn', component: SignIn, exact: true, key:'signIn'},
    {path: '/signUp', component: SignUp, exact: true, key:'signUp'},
    {path: '/main', component: Main, exact: true, key:'main'},
    {path: '/profile', component: Profile, exact: true, key:'profile'}
]