import Conteudo from "../../components/conteudo-principal"
import HeaderDashboard from "../../components/header-dashboard";

import { Container } from "./styled";

export default function Reports() {
    return(
        <Container>
            <HeaderDashboard />
            
            <Conteudo myTitle={"Relatórios"}>
                
            </Conteudo>
            
        </Container>
    )
}