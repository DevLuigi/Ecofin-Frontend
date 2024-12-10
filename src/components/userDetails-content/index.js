import { Container } from "./styled";
import Button from "../button";
import Input from "../input";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

import UserApi from "../../service/userApi";
const userApi = new UserApi

export default function UserDetailsContent(props) {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigation = useNavigate();

    const isFormCompleted = Object.values(
        [name, lastName, birthDate]
    ).every((value) => value.trim() !== "");

    const register = async () => {
        if(!isFormCompleted) {
            toast.warn("Preencha todos os campos");
            return;
        }
            
        if (isInvalidDate()) {
            toast.warn("A data de nascimento deve ser menor que o dia atual");
            return;
        }
        
        const response = await userApi.updateUser({
            name,
            lastName,
            birthDate
        });

        if (response?.status !== 204) {
            toast.error("Não foi possível processar sua solicitação. Verifique os dados fornecidos.");
            return;
        }

        toast.success("Dados atualizados com sucesso!");
        navigation("/user");
    }

    const isInvalidDate = () => {
        const date = new Date();

        const year = date.getFullYear();
        const day = date.getDate();
        
        // getMonth returns the position of the array
        // so it's necessary add one to get the correct month
        const month = date.getMonth() + 1; 

        const dateInput = new Date(birthDate);
        const now = new Date(`${year}-${month}-${day}`);

        return dateInput >= now;
    }
    
    
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
                        myGetter={name}
                        mySetter={setName}
                    >
                        Nome
                    </Input>

                    <Input
                        myMargin={"1em 0em"}
                        myHeight={9}
                        myWidth={28}
                        myGetter={lastName}
                        mySetter={setLastName}
                    >
                        Sobrenome
                    </Input>

                    <Input
                        myMargin={"1em 0em"}
                        myHeight={9}
                        myWidth={28}
                        myGetter={birthDate}
                        mySetter={setBirthDate}
                        myType={"date"}
                    >
                        Data de nascimento
                    </Input>

                    <Input
                        myMargin={"1em 0em"}
                        myHeight={9}
                        myWidth={28}
                        myGetter={password}
                        mySetter={setPassword}
                        myType={"password"}
                    >
                        Senha
                    </Input>

                    <Input
                        myMargin={"1em 0em"}
                        myHeight={9}
                        myWidth={28}
                        myGetter={confirmPassword}
                        mySetter={setConfirmPassword}
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
                        myMethod={register}
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
