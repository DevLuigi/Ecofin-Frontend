import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Conteudo from "../../components/conteudo-principal";
import HeaderDashboard from "../../components/header-dashboard";

import { Container } from "./styled";

import ServiceBase from '../../service/serviceBase'
const serviceBase = new ServiceBase();

export default function Transaction() {
    const hasRun = useRef(false);
    const navigation = useNavigate();

    const isLogged = () => {
        if(!serviceBase.getToken()) {
            toast.warn("Faça login antes de utilizar o site!");
            navigation('/login');
        }
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
            <Conteudo myTitle={"Lançamento"}>
            </Conteudo>
        </Container>
    )
}