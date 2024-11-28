import Conteudo from "../../components/conteudo-principal";
import HeaderDashboard from "../../components/header-dashboard";

import { Container } from "./styled";

export default function Savings() {
    return(
        <Container>
            <HeaderDashboard />
            
            <Conteudo myTitle={"Poupança"}>
                
            </Conteudo>
            
        </Container>
    )
}