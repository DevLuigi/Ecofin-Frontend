import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import HeaderDashboard from "../../components/header-dashboard";
import Conteudo from "../../components/conteudo-principal";
import Button from "../../components/button";

import { Container } from "./styled";

import ServiceBase from '../../service/serviceBase'
import UserApi from "../../service/userApi";

const serviceBase = new ServiceBase();
const api = new UserApi();

export default function Preferences() {
    const hasRun = useRef(false);
    const navigation = useNavigate();

    const isLogged = () => {
        if(!serviceBase.getToken()) {
            toast.warn("Faça login antes de utilizar o site!");
            navigation('/login');
        }
    }

    const deleteUser = async () => {
        const response = await api.deleteUser();
        if (response.status !== 204) {
            toast.warn('Não foi possível processar sua solicitação!');
            return;
        }

        toast.success('Conta deletada com sucesso!');
        navigation('/login');
    }

    useEffect(() => {
        if(!hasRun.current) {
            hasRun.current = true;
            isLogged();
        }
    }, []);

    return(
        <Container>
            <HeaderDashboard />
            <Conteudo myTitle={"Preferências"}>
                <div className="box">
                    <div className="texts">
                        <h3>Começar do Zero</h3>
                        <p className="desc">
                            Aqui você pode zerar sua conta, 
                            deletando toda sua movimentação financeira.
                            Suas categorias cadastradas permanecerão intactadas.
                        </p>
                    </div>
                    <div className="align-button">
                        <Button
                            myMargin={"0em 1em"}
                            myHeight={6}
                            myWidth={12}
                            isTransparent={true}
                            myColor={"#FF5959"}
                        > 
                            Excluir minhas movimentações 
                        </Button>
                    </div>
                </div>
                
                <hr className="division"/>

                <div className="box">
                    <div className="texts">
                        <h3>Excluir minha conta</h3>
                        <p className="desc">
                            Já é hora de dizer tchau?
                            Aqui você pode excluir sua conta definitivamente.
                        </p>
                    </div>
                    <div className="align-button">
                        <Button
                            myMargin={"0em 1em"}
                            myHeight={6}
                            myWidth={12}
                            isTransparent={true}
                            myColor={"#FF5959"}
                            myMethod={deleteUser}
                        > 
                            Excluir conta<br></br> por completo 
                        </Button>
                    </div>
                </div>
                
                <hr className="division"/>
            </Conteudo>
        </Container>
    )
}