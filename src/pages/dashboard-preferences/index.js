import HeaderDashboard from "../../components/header-dashboard";
import Conteudo from "../../components/conteudo-principal";

import { Container } from "./styled";
import Button from "../../components/button";

export default function Preferences() {
    return(
        <Container>
            <HeaderDashboard />

            <Conteudo myTitle={"Preferências"}>
                <div className="subtitulo">
                    <h3>Começar do Zero</h3>
                </div>

                <div className="texto">
                    <p>Aqui você pode zerar sua conta, 
                    deletando toda sua movimentação financeira.
                    <br></br>Suas categorias cadastradas permanecerão intactadas.
                    </p>

                    <Button
                    myMargin={"0em 1em"}
                    myHeight={6}
                    myWidth={12}
                    isTransparent={true}
                    myColor={"#FF5959"}
                > 
                    Excluir minhas movimentações 
                </Button>

                </div>
                <div className="contentDivision"><span></span></div>

                <div className="subtitulo">
                    <h3>Excluir minha conta</h3>
                </div>

                <div className="texto">
                    <p>Já é hora de dizer tchau?<br></br>
                    Aqui você pode excluir sua conta definitivamente.
                    </p>

                    <Button
                    myMargin={"0em 1em"}
                    myHeight={6}
                    myWidth={12}
                    isTransparent={true}
                    myColor={"#FF5959"}
                > 
                    Excluir conta<br></br> por completo 
                </Button>
                </div>

                <div className="contentDivision"><span></span></div>
            </Conteudo>
            
            
        </Container>
    )
}