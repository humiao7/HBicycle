import Login from '../modules/login'
import MainPage from '../modules/main'

let routes = [{
    path: "/",
    exact: true,
    component: Login
}, {
    path: "/login",
    exact: false,
    component: Login
}, {
    path: "/main",
    exact: false,
    component: MainPage
}];

export default routes;