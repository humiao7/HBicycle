import Home from '../pages/home'
import Buttons from '../pages/buttons'
import Modal from '../pages/modal'
import Loading from '../pages/loading'
import Notification from '../pages/notification'
import Message from '../pages/message'
import Tab from '../pages/tab'
import BasicList from '../pages/basic-list'
import SeniorList from '../pages/senior-list'
import RichText from '../pages/rich-text'
import Citys from '../pages/citys'
import OrderManage from '../pages/order-manage'
import Employees from '../pages/employees'
import Map from '../pages/map'
import Charts1 from '../pages/charts1'
import Charts2 from '../pages/charts2'
import Charts3 from '../pages/charts3'
import Permission from '../pages/permission'

const routes = [
    {
        path: "/main-page/home",
        exact: false,
        component: Home
    }, {
        path: "/main-page/ui/buttons",
        exact: false,
        component: Buttons
    }, {
        path: "/main-page/ui/modal",
        exact: false,
        component: Modal
    }, {
        path: "/main-page/ui/loading",
        exact: false,
        component: Loading
    }, {
        path: "/main-page/ui/notification",
        exact: false,
        component: Notification
    }, {
        path: "/main-page/ui/message",
        exact: false,
        component: Message
    }, {
        path: "/main-page/ui/tab",
        exact: false,
        component: Tab
    }, {
        path: "/main-page/form/basic",
        exact: false,
        component: BasicList
    }, {
        path: "/main-page/form/senior",
        exact: false,
        component: SeniorList
    }, {
        path: "/main-page/rich-text",
        exact: false,
        component: RichText
    }, {
        path: "/main-page/citys",
        exact: false,
        component: Citys
    }, {
        path: "/main-page/order-manage",
        exact: false,
        component: OrderManage
    }, {
        path: "/main-page/employees",
        exact: false,
        component: Employees
    }, {
        path: "/main-page/map",
        exact: false,
        component: Map
    }, {
        path: "/main-page/charts1",
        exact: false,
        component: Charts1
    }, {
        path: "/main-page/charts2",
        exact: false,
        component: Charts2
    }, {
        path: "/main-page/charts3",
        exact: false,
        component: Charts3
    }, {
        path: "/main-page/permission",
        exact: false,
        component: Permission
    }
]

export default routes;