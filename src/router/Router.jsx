import { createBrowserRouter } from "react-router-dom";
import NavBar from "../component/NavBar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <NavBar/>
    }
])
export default router;