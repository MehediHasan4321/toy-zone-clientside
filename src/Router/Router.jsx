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
import NotFouondPage from '../Layout/NotFoundPage/NotFouondPage';
import Blog from '../Layout/Blog/Blog';


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
                loader:({params})=>fetch(`https://toyshop-zeta.vercel.app/allToy/${params.category}`)
            },
            {
                path:'/toyDetails/:id',
                element:<PrivetRoute><ToyDetails/></PrivetRoute>,
                loader:({params})=>fetch(`https://toyshop-zeta.vercel.app/singleToy/${params.id}`)
            },
            {
                path:'/allToy',
                element:<AllToys/>
            },
            {
                path:'/myToys',
                element:<PrivetRoute><Mytoys/></PrivetRoute>
                
            },
            {
                path:'/addToys',
                element:<PrivetRoute><AddToys/></PrivetRoute>
            },
            {
                path:'/blog',
                element:<Blog/>
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
    },
    {
        path:'*',
        element:<NotFouondPage/>
    }
])

export default Router;