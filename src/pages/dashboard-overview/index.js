import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import HeaderDashboard from "../../components/header-dashboard";
import OverviewContent from "../../components/overview-content";

import { Container } from "./styled";

import ServiceBase from '../../service/serviceBase'
import UserApi from "../../service/userApi";
const serviceBase = new ServiceBase();
const userApi = new UserApi

export default function Overview() {

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
            
            <OverviewContent
                myName={userApi.getUsername()}
                myIncome={userApi.getBalance()}
                myExpense={0}
            >

            </OverviewContent>
        </Container>
    )
}