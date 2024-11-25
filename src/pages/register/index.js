import { Link } from "react-router-dom";

import AuthBox from "../../components/auth-box";
import Button from "../../components/button";
import Input   from "../../components/input";

import { Container } from "./styled";

export default function Register() {
    return(
        <Container>
            <Link to={"/"}>
                <img className="logo-img" src="/assets/images/icon_logo.svg" alt="logo-image"/>
            </Link>
            <AuthBox myWidth={40} myHeight={106}>
                <img className="man-img" src="/assets/images/homem.png" alt="man-image"/>
                <p> Crie sua conta para começar a controlar sua bufunfa </p>
                <hr />
                <div>
                    <Input
                        myMargin={"1em 0em"} 
                        myHeight={9} 
                        myWidth={28}
                    > 
                        Seu e-mail 
                    </Input>
                    <Input
                        myMargin={"1em 0em"} 
                        myHeight={9} 
                        myWidth={28}
                    > 
                        Seu senha 
                    </Input>
                    <Input
                        myMargin={"1em 0em"} 
                        myHeight={9} 
                        myWidth={28}
                    > 
                        Repita sua senha 
                    </Input>
                    <Input
                        myMargin={"1em 0em"} 
                        myHeight={9} 
                        myWidth={28}
                    > 
                        Seu nome 
                    </Input>
                    <Input
                        myMargin={"1em 0em"} 
                        myHeight={9} 
                        myWidth={28}
                    > 
                        Seu sobrenome 
                    </Input>
                    <Input
                        myMargin={"1em 0em"} 
                        myHeight={9} 
                        myWidth={28}
                    > 
                        Sua data de nascimento 
                    </Input>
                    <Button
                        myRoute={"/login"}
                        myHeight={6}
                        myWidth={29}
                        myBackgroundColor={"#A8D8B5"}
                    > 
                        Comece a usar agora 
                    </Button>
                </div>
            </AuthBox>
            <p> Já sou cadastrado. <Link to={"/login"}> <span> Quero fazer login! </span> </Link> </p>
        </Container>
    )
}