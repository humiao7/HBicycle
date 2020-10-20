import Login from '../modules/login'
import MainPage from '../modules/main-page'

let routes = [{
    path: "/login",
    exact: false,
    component: Login
}, {
    path: "/main-page",
    exact: false,
    component: MainPage
}];

export default routes;