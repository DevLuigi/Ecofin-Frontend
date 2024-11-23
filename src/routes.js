import { BrowserRouter, Routes, Route } from "react-router-dom";

// HOME
import Home from './pages/home';

// LOGIN

export default function RoutesProject() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    )
}