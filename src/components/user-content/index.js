import { Container } from "./styled";
import Button from "../button";

export default function UserContent(props) {
    return (
        <Container style={props}>
            <div className="background">

                <div className="image">
                    <img src="/assets/images/usuario-de-perfil.png" alt="img-perfil" />
                </div>

                <div className="userDetails">
                    <h2>{props.myName}</h2>
                    <p>{props.myEmail}</p>
                </div>

                <Button
                    myRoute={"/userDetails"}
                    myHeight={8}
                    myWidth={12}
                    myBackgroundColor={"#FFE3E3"}
                    myColor={"#000000"}
                >
                    Atualizar dados
                </Button>

            </div>
        </Container>
    )
}
