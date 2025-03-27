import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Newitemform from "./pages/Newitemform";
import ItemsLayout from "./pages/ItemsLayout";
import ViewProduct from "./pages/ViewProduct";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                index: true,
                element: <Home/>
            }, 
            
            {
                path: "items",
                element: <ItemsLayout />,
                children: [
                    {
                        index: true,
                        element: <Items />  
                    },
                    {
                        path: "new",
                        element: <Newitemform /> 
                    },
                    {
                        path: ":id",
                        element: <ViewProduct />
                    }
                ]
            }
        ]
    }
])


export default router;