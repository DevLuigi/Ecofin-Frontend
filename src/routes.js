import { BrowserRouter, Routes, Route } from "react-router-dom";

// HOME
import Home from './pages/home';

// LOGIN

// DASHBOARD - CATEGORIAS
import Categorias from "./pages/dashboard - categorias";

export default function RoutesProject() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Categorias />}></Route>
            </Routes>
        </BrowserRouter>
    )
}