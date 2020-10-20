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
        path: "/main/home",
        exact: false,
        component: Home
    }, {
        path: "/main/ui/buttons",
        exact: false,
        component: Buttons
    }, {
        path: "/main/ui/modal",
        exact: false,
        component: Modal
    }, {
        path: "/main/ui/loading",
        exact: false,
        component: Loading
    }, {
        path: "/main/ui/notification",
        exact: false,
        component: Notification
    }, {
        path: "/main/ui/message",
        exact: false,
        component: Message
    }, {
        path: "/main/ui/tab",
        exact: false,
        component: Tab
    }, {
        path: "/main/form/basic",
        exact: false,
        component: BasicList
    }, {
        path: "/main/form/senior",
        exact: false,
        component: SeniorList
    }, {
        path: "/main/rich-text",
        exact: false,
        component: RichText
    }, {
        path: "/main/citys",
        exact: false,
        component: Citys
    }, {
        path: "/main/order-manage",
        exact: false,
        component: OrderManage
    }, {
        path: "/main/employees",
        exact: false,
        component: Employees
    }, {
        path: "/main/map",
        exact: false,
        component: Map
    }, {
        path: "/main/charts1",
        exact: false,
        component: Charts1
    }, {
        path: "/main/charts2",
        exact: false,
        component: Charts2
    }, {
        path: "/main/charts3",
        exact: false,
        component: Charts3
    }, {
        path: "/main/permission",
        exact: false,
        component: Permission
    }
]

export default routes;