import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home';
import Login from './pages/login';
import Register from "./pages/register";
import Overview from "./pages/dashboard-overview";
import Transaction from "./pages/dashboard-transaction";
import Reports from "./pages/dashboard-reports";
import Savings from "./pages/dashboard-savings";
import Category from "./pages/dashboard-category";
import User from "./pages/user";

export default function RoutesProject() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/overview" element={<Overview />}></Route>
                <Route path="/transaction" element={<Transaction />}></Route>
                <Route path="/reports" element={<Reports />}></Route>
                <Route path="/savings" element={<Savings />}></Route>
                <Route path="/category" element={<Category />}></Route>
                <Route path="/user" element={<User />}></Route>
            </Routes>
        </BrowserRouter>
    )
}