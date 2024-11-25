import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home';
import Login from './pages/login';
import Register from "./pages/register";
import Category from "./pages/dashboard-categorias";

export default function RoutesProject() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/category" element={<Category />}></Route>
            </Routes>
        </BrowserRouter>
    )
}