import { Container } from "./styled";
import Button from "../button";
import Input from "../input";
import { useState } from "react";

export default function OverviewButtons(props) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
      
    return (
        <Container isOpen={menuOpen}>
            <div className="transactionButtons">
                <Button
                    myHeight={8}
                    myWidth={8}
                    myBackgroundColor={"#FEF9F2"}
                    myColor={"#FF1010"}
                    myMethod={toggleMenu}
                    myImagePath={"/assets/images/sinal-de-menos.png"}
                >
                    Despesa
                </Button>

                <Button
                    myHeight={8}
                    myWidth={8}
                    myBackgroundColor={"#FEF9F2"}
                    myColor={"#5BFF6E"}
                    myMethod={toggleMenu}
                    myImagePath={"/assets/images/mais.png"}
                >
                    Receita
                </Button>
            </div>

            <section className="transaction">
                <div className="header">
                    <div className="title">
                        <h4>Nova movimentação</h4>
                    </div>

                    <div className="closeBox">
                        <Button
                            myHeight={2}
                            myWidth={2}
                            isTransparent={true}
                            myColor={"#000000"}
                            myMethod={toggleMenu}
                        >
                            X
                        </Button>
                    </div>
                </div>

                <div className="container">

                    <div className="form">
                        <Input
                            myMargin={"1em 0em"}
                            myHeight={9}
                            myWidth={28}
                            myGetter={"titulo"}
                            mySetter={"setName"}
                        >
                            Titulo
                        </Input>

                        <Input
                            myMargin={"1em 0em"}
                            myHeight={9}
                            myWidth={28}
                            myGetter={"titulo"}
                            mySetter={"setName"}
                        >
                            Valor
                        </Input>

                        <Input
                            myMargin={"1em 0em"}
                            myHeight={9}
                            myWidth={28}
                            myGetter={"titulo"}
                            mySetter={"setName"}
                        >
                            Data
                        </Input>

                        <Input
                            myMargin={"1em 0em"}
                            myHeight={9}
                            myWidth={28}
                            myGetter={"titulo"}
                            mySetter={"setName"}
                        >
                            Tipo da movimentação
                        </Input>

                        <Input
                            myMargin={"1em 0em"}
                            myHeight={9}
                            myWidth={28}
                            myGetter={"titulo"}
                            mySetter={"setName"}
                        >
                            Categoria
                        </Input>

                        <Input
                            myMargin={"1em 0em"}
                            myHeight={9}
                            myWidth={28}
                            myGetter={"titulo"}
                            mySetter={"setName"}
                        >
                            Descrição
                        </Input>
                    </div>

                    <Button
                        myHeight={8}
                        myWidth={8}
                        myBackgroundColor={"#C9E9D2"}
                        myColor={"#000000"}
                        myMethod={toggleMenu} //ajustar para verificar o form
                    >
                        Confirmar
                    </Button>

                </div>
            </section>
        </Container>
    )
}
