import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {index:true, element:<Home/>},
      {path:"/new", element:<Footer/>},
    ]
  }]
)

function App() {
  return (
 <RouterProvider router={router}/>
  );
}

export default App;
