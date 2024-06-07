import Main from "../pages/main/Main";
import SignIn from "../pages/login/SignIn";
import SignUp from "../pages/login/SignUp";
import DevLogin from "../pages/login/DevLogin"
import AdminInt from "../pages/admin/AdminInt"
import Product from "../pages/product/Product";
import CodeConfirmation from "../pages/login/CodeConfirmation";
import About from "../pages/about/About";

export const Links = [
    {path: '/signIn', component: SignIn, exact: true, key:'signIn'},
    {path: '/signUp', component: SignUp, exact: true, key:'signUp'},
    {path: '/codeConfirmation', component: CodeConfirmation, exact: true, key:'codeConfirmation'},
    {path: '/main', component: Main, exact: true, key:'main'},
    {path: '/product', component: Product, exact: true, key:'product'},
    {path: '/about', component: About, exact: true, key:'about'},
    {path: '/devLogin', component: DevLogin, exact: true, key:'devLogin'},
    {path: '/admin', component: AdminInt, exact: true, key:'admin'}
]