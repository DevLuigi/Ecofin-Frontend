import { Container } from "./styled";
import Button from "../button";
import Input from "../input";

export default function UserDetailsContent(props) {
    return (
        <Container style={props}>
            <div className="background">

                <div className="image">
                    <img src="/assets/images/usuario-de-perfil.png" alt="img-perfil" />
                </div>

                <div className="form">
                    <Input
                        myMargin={"1em 0em"}
                        myHeight={9}
                        myWidth={28}
                        myGetter={"name"}
                        mySetter={"setName"}
                    >
                        Nome
                    </Input>

                    <Input
                        myMargin={"1em 0em"}
                        myHeight={9}
                        myWidth={28}
                        myGetter={"name"}
                        mySetter={"setName"}
                    >
                        Sobrenome
                    </Input>

                    <Input
                        myMargin={"1em 0em"}
                        myHeight={9}
                        myWidth={28}
                        myGetter={"name"}
                        mySetter={"setName"}
                        myType={"date"}
                    >
                        Data de nascimento
                    </Input>

                    <Input
                        myMargin={"1em 0em"}
                        myHeight={9}
                        myWidth={28}
                        myGetter={"name"}
                        mySetter={"setName"}
                        myType={"password"}
                    >
                        Senha
                    </Input>

                    <Input
                        myMargin={"1em 0em"}
                        myHeight={9}
                        myWidth={28}
                        myGetter={"name"}
                        mySetter={"setName"}
                        myType={"password"}
                    >
                        Confirmar Senha
                    </Input>                   
                </div>

                <div className="buttons">
                    <Button
                        myHeight={8}
                        myWidth={12}
                        myBackgroundColor={"#FFE3E3"}
                        myColor={"#000000"}
                    >
                        Salvar
                    </Button>

                    <Button
                        myRoute={"/user"}
                        myHeight={8}
                        myWidth={12}
                        myBackgroundColor={"#FFE3E3"}
                        myColor={"#000000"}
                    >
                        Cancelar
                    </Button>
                </div>


            </div>
        </Container>
    )
}
