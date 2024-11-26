import Conteudo from "../../components/conteudo-principal";
import HeaderDashboard from "../../components/header-dashboard";

import { Container } from "./styled";

export default function Transaction() {
    return(
        <Container>
            <HeaderDashboard />
            
            <Conteudo myTitle={"Lançamento"}>
                
            </Conteudo>
            
        </Container>
    )
}