import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main/Main';
import HomePage from '../Layout/HomePage/HomePage';
import CategoryAllToy from '../Layout/CategoryAllToy/CategoryAllToy';

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
                path:'/categoryToys',
                element:<CategoryAllToy/>,
                loader:({params})=>fetch(`http://localhost:5000/allToy`)
            }
        ]
    }
])

export default Router;