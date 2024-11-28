import { Link, useNavigate } from "react-router-dom";

import AuthBox from "../../components/auth-box";
import Button from "../../components/button";
import Input   from "../../components/input";

import { Container } from "./styled";
import { useState } from "react";
import { toast } from "react-toastify";

import AuthApi from "../../service/authApi";
const api = new AuthApi();

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [balance, setBalance] = useState('');

    const navigation = useNavigate();

    const isFormCompleted = Object.values(
        [email, password, confirmPassword, name, lastName, birthDate]
    ).every((value) => value.trim() !== "");

    const register = async () => {
        if(!isFormCompleted) {
            toast.warn("Preencha todos os campos");
            return;
        }
            
        if (password !== confirmPassword) {
            toast.warn("As senhas devem ser iguais");
            return;
        }

        if (isInvalidDate()) {
            toast.warn("A data de nascimento deve ser menor que o dia atual");
            return;
        }

        if (isInvalidEmail()) {
            toast.warn("O email deve ser bem formatado");
            return;
        }
        
        const response = await api.register({
            email,
            password,
            name,
            lastName,
            birthDate,
            balance: parseFloat(balance)
        });

        if (response?.status !== 200) {
            toast.error("Não foi possível processar sua solicitação. Verifique os dados fornecidos.");
            return;
        }

        toast.success("Conta criada com sucesso!");
        navigation("/login");
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

    const isInvalidEmail = () => {
        const emailRegex = /^[a-zA-Z0-9.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return !emailRegex.test(email);
    }
    
    return(
        <Container>
            <Link to={"/"}>
                <img className="logo-img" src="/assets/images/icon_logo.svg" alt="logo-image"/>
            </Link>
            <AuthBox myWidth={40} myHeight={116}>
                <img className="man-img" src="/assets/images/homem.png" alt="man-image"/>
                <p> Crie sua conta para começar a controlar sua bufunfa </p>
                <hr />
                <div>
                    <Input
                        myMargin={"1em 0em"} 
                        myHeight={9} 
                        myWidth={28}
                        myGetter={name}
                        mySetter={setName}
                    > 
                        Seu nome 
                    </Input>
                    <Input
                        myMargin={"1em 0em"} 
                        myHeight={9} 
                        myWidth={28}
                        myGetter={lastName}
                        mySetter={setLastName}
                    > 
                        Seu sobrenome 
                    </Input>
                    <Input
                        myMargin={"1em 0em"} 
                        myHeight={9} 
                        myWidth={28}
                        myGetter={birthDate}
                        mySetter={setBirthDate}
                        myType={"date"}
                    > 
                        Sua data de nascimento 
                    </Input>
                    <Input
                        myMargin={"1em 0em"} 
                        myHeight={9} 
                        myWidth={28}
                        myGetter={balance}
                        mySetter={setBalance}
                        myType={"number"}
                    > 
                        Receita mensal  
                    </Input>
                    <Input
                        myMargin={"1em 0em"} 
                        myHeight={9} 
                        myWidth={28}
                        myGetter={email}
                        mySetter={setEmail}
                    > 
                        Seu e-mail 
                    </Input>
                    <Input
                        myMargin={"1em 0em"} 
                        myHeight={9} 
                        myWidth={28}
                        myGetter={password}
                        mySetter={setPassword}
                        myType={"password"}
                    > 
                        Seu senha 
                    </Input>
                    <Input
                        myMargin={"1em 0em"} 
                        myHeight={9} 
                        myWidth={28}
                        myGetter={confirmPassword}
                        mySetter={setConfirmPassword}
                        myType={"password"}
                    > 
                        Repita sua senha 
                    </Input>
                    <Button
                        myHeight={6}
                        myWidth={29}
                        myBackgroundColor={"#A8D8B5"}
                        myMethod={register}
                    > 
                        Comece a usar agora 
                    </Button>
                </div>
            </AuthBox>
            <p> Já sou cadastrado. <Link to={"/login"}> <span> Quero fazer login! </span> </Link> </p>
        </Container>
    )
}