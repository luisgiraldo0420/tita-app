import { Layout } from "../layouts";
import { Error404, Home, Login } from "../pages";
const routesAdmin = [
{
    path: '/login',
    layout: Layout,
    component: Login,
    exact: true
}, 
{
    path: '/',
    layout: Layout,
    component: Home,
    exact: true
}, 
{
    layout: Layout,
    component: Error404,
}, 
]

export default routesAdmin