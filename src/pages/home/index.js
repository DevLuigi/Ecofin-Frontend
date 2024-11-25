import Button    from "../../components/button";
import Header    from "../../components/header-home";
import IconeText from "../../components/icones-home";

import {Container}  from "./styled";

export default function Home() {
    return(
        <Container>
            <Header />
            <section>
                <div className="infos-div">
                    <h1> Controle financeiro pessoal com toda a <span className="highlight">praticidade</span> que a planilha não te oferece </h1>
                    <p> 
                        Organize seu dinheiro em tempo real em uma solução completa,
                        prática e segura. Tenha o controle de finanças que você sempre quis!
                    </p>
                    <Button
                        myRoute={"/register"}
                        myHeight={6}
                        myWidth={19}
                        myBackgroundColor={"#FFB2B2"}
                        myColor={"#ffff"}
                        myImagePath={"/assets/images/seta_direita_branca.png"}
                    > 
                        Iniciar gratuitamente 
                    </Button>
                    <div className="icones-text">
                        <IconeText myWidth={15} myImagePath={"/assets/images/security.png"} myImageSize={3}> 
                            Segurança dos seus dados 
                        </IconeText>
                        <IconeText myWidth={15} myImagePath={"/assets/images/computer.png"} myImageSize={3}>
                            Acesse quando quiser no computador 
                        </IconeText>
                    </div>
                </div>
                <div className="image-div">
                    <img src="/assets/images/humans_home.png" alt="image-home"/>
                </div>
            </section>
        </Container>
        
    )
}