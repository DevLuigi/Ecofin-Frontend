import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home';
import Login from './pages/login';
import Categorias from "./pages/dashboard-categorias";

export default function RoutesProject() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/categorias" element={<Categorias />}></Route>
            </Routes>
        </BrowserRouter>
    )
}