import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main/Main';
import HomePage from '../Layout/HomePage/HomePage';
import CategoryAllToy from '../Layout/CategoryAllToy/CategoryAllToy';
import LogRegCompo from '../Layout/LogRegCompo/LogRegCompo';
import Login from '../Layout/LogRegCompo/Login/Login';
import Regeister from '../Layout/LogRegCompo/Regeister/Regeister';
import PrivetRoute from '../PrivetRoute/PrivetRoute';
import ToyDetails from '../PrivetRoute/ToyDetails/ToyDetails';

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<HomePage/>
            },
            {
                path:'/categoryToys/:category',
                element:<CategoryAllToy/>,
                loader:({params})=>fetch(`https://my-toy-shop-server.vercel.app/allToy/${params.category}`)
            },
            {
                path:'/toyDetails/:id',
                element:<PrivetRoute><ToyDetails/></PrivetRoute>,
                loader:({params})=>fetch(`http://localhost:5000/toyDetails/${params.id}`)
            }
        ]
    },
    {
        path:'logReg',
        element:<LogRegCompo/>,
        children:[
            {
                path:'/logReg/login',
                element:<Login/>
            },
            {
                path:'/logReg/regeister',
                element:<Regeister/>
            }
        ]
    }
])

export default Router;