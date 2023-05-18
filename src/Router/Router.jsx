import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main/Main';
import HomePage from '../Layout/HomePage/HomePage';
import CategoryAllToy from '../Layout/CategoryAllToy/CategoryAllToy';
import LogRegCompo from '../Layout/LogRegCompo/LogRegCompo';
import Login from '../Layout/LogRegCompo/Login/Login';
import Regeister from '../Layout/LogRegCompo/Regeister/Regeister';

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
                loader:({params})=>fetch(`http://localhost:5000/allToy/${params.category}`)
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