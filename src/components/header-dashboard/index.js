import { Container } from "./styled";
import Button from "../button";
import { Link } from "react-router-dom";
import PreferencesButton from "../preferences-button";

export default function HeaderDashboard() {
    return(
        <Container>
            <Link to="/overview">
                <img className="logo-img" src="/assets/images/Logo_EcoFin.png" alt="img-header"/>
            </Link>
            
            <div>
                <Button
                    myRoute={"/overview"}
                    myMargin={"0em"}
                    myHeight={6}
                    myWidth={9}
                    isTransparent={true}
                    myColor={"#707070"}
                > 
                    Visão Geral 
                </Button>
                <Button
                    myRoute={"/transaction"}
                    myMargin={"0em"}
                    myHeight={6}
                    myWidth={9}
                    isTransparent={true}
                    myColor={"#707070"}
                > 
                    Lançamento
                </Button>
                <Button
                    myRoute={"/reports"}
                    myMargin={"0em"}
                    myHeight={6}
                    myWidth={9}
                    isTransparent={true}
                    myColor={"#707070"}
                > 
                    Relatórios
                </Button>
                <Button
                    myRoute={"/savings"}
                    myMargin={"0em"}
                    myHeight={6}
                    myWidth={9}
                    isTransparent={true}
                    myColor={"#707070"}
                > 
                    Poupança
                </Button>          
            </div>
            {<PreferencesButton />}

            <Link to="/user">
                <img src="/assets/images/usuario-de-perfil.png" alt="img-perfil"/> 
            </Link>
        </Container>
    )

}