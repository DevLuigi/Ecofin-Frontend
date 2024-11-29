import { Link } from "react-router-dom";
import { Container } from "./styled";
import { useState } from "react";

export default function PreferencesButton() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    
    return(
        <Container isOpen={menuOpen}>
                <img
                    src="/assets/images/engrenagem.png"
                    alt="img-config"
                    onClick={toggleMenu}
                    style={{ cursor: "pointer" }}
                />


                <div className="lista">
                    <ul>
                        <li><Link to={"/category"}>Categorias</Link></li>
                        <li><Link to={"/preferences"}>Preferências</Link></li>
                     </ul>
                </div>
        </Container>
    )

}