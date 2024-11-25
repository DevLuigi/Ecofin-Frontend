import Button from "../../components/button";
import Conteudo from "../../components/conteudo-principal";
import HeaderDashboard from "../../components/header-dashboard";

import { Container } from "./styled";

export default function Categorias() {
    return(
        <Container>
            <HeaderDashboard />

            <Conteudo myTitle={"Categorias"}>
                <div className="createCategoryButton">
                    <Button
                        myMargin={"0em"}
                        myHeight={6}
                        myWidth={10}
                        myBackgroundColor={"#A8D8B5"}
                        myColor={"#000000"}
                        myMethod={() => alert("Criar nova categoria")}
                        myImagePath={"/assets/images/mais.png"}
                        > 
                        Criar categoria 
                    </Button>
                </div>
                
                <section className="buttons">                    
                    <div>
                        <Button
                            myMargin={"0em"}
                            myHeight={6}
                            myWidth={9}
                            isTransparent={true}
                            myColor={"#707070"}
                            myMethod={() => alert("Despesas")}
                        > 
                            Despesas 
                        </Button>
                        
                    </div>

                    <div>
                        <Button
                            myMargin={"0em"}
                            myHeight={6}
                            myWidth={9}
                            isTransparent={true}
                            myColor={"#707070"}
                            myMethod={() => alert("Receitas")}
                        > 
                            Receitas 
                        </Button>
                    </div>                    
                </section>

                <section className="categoryList">
                
                </section>

            </Conteudo>
        </Container>
    )
}