import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main/Main';
import HomePage from '../Layout/HomePage/HomePage';
import CategoryAllToy from '../Layout/CategoryAllToy/CategoryAllToy';
import LogRegCompo from '../Layout/LogRegCompo/LogRegCompo';
import Login from '../Layout/LogRegCompo/Login/Login';
import Regeister from '../Layout/LogRegCompo/Regeister/Regeister';
import PrivetRoute from '../PrivetRoute/PrivetRoute';
import ToyDetails from '../PrivetRoute/ToyDetails/ToyDetails';
import AllToys from '../Layout/AllToys/AllToys';
import Mytoys from '../PrivetRoute/MyToys/Mytoys';
import AddToys from '../Layout/AddToys/AddToys';


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
                loader:({params})=>fetch(`https://my-toy-shop-server.vercel.app/toyDetails/${params.id}`)
            },
            {
                path:'/allToy',
                element:<AllToys/>
            },
            {
                path:'/myToys/:email',
                element:<PrivetRoute><Mytoys/></PrivetRoute>,
                loader:({params})=>fetch(`https://my-toy-shop-server.vercel.app/myToys/${params.email}`)
            },
            {
                path:'/addToys',
                element:<AddToys/>
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