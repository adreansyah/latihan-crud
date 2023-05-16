import Error404 from "../page/error"
import Home from "../page/home"
import Login from "../page/login"

export const publicrouting = (props) => {
    return [
        { index: true, path: '/', element: <Login  {...props} title="Home" />, },
        { index: true, path: '/login', element: <Login  {...props} title="Login" />, },
        { index: true, path: '/register', element: <>REGISTER</>, },
        { index: true, path: '*', element: <Error404 /> },
    ]
}

export const privaterouting = (props) => {
    return [
        { index: true, path: '/', element: <>BEHASIL LOGIN</> },
        { index: true, path: '/home', element: <Home /> },
        { index: true, path: '*', element: <Error404 /> },
    ]
}
