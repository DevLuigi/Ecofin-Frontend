import { Container } from "./styled";
import Button from "../button";
import { Link } from "react-router-dom";

export default function HeaderDashboard() {
    return(
        <Container>
            <img src="/assets/images/icon_logo.svg" alt="img-header"/>
            <div>
                <Button
                    myMargin={"0em"}
                    myHeight={6}
                    myWidth={9}
                    isTransparent={true}
                    myColor={"#707070"}
                    myMethod={() => alert("button 1")}
                > 
                    Visão Geral 
                </Button>
                <Button
                    myMargin={"0em"}
                    myHeight={6}
                    myWidth={9}
                    isTransparent={true}
                    myColor={"#707070"}
                    myMethod={() => alert("button 2")}
                > 
                    Lançamento
                </Button>
                <Button
                    myMargin={"0em"}
                    myHeight={6}
                    myWidth={9}
                    isTransparent={true}
                    myColor={"#707070"}
                    myMethod={() => alert("button 3")}
                > 
                    Relatório
                </Button>
                <Button
                    myMargin={"0em"}
                    myHeight={6}
                    myWidth={9}
                    isTransparent={true}
                    myColor={"#707070"}
                    myMethod={() => alert("button 4")}
                > 
                    Poupança
                </Button>

                <img src="/assets/images/engrenagem.png" alt="img-config"/>
                <img src="/assets/images/usuario-de-perfil.png" alt="img-perfil"/>   
            </div>
        </Container>
    )

}