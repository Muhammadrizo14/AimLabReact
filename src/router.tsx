import {
    createBrowserRouter,
    Link,
    RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home'
import PlayGraund from './Pages/PlayGraund'
import Settings from './Pages/Settings'


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/playgraund",
        element: <PlayGraund />,
    },
    {
        path: "/settings",
        element: <Settings />,
    },
    {
        path: "*",
        element: <div><h1>Page do not found, <Link to='/'>go home</Link></h1></div>,
    },
]);



export default router