import HeaderDashboard from "../../components/header-dashboard";
import UserContent from "../../components/user-content";

import { Container } from "./styled";

import UserApi from "../../service/userApi";
const userApi = new UserApi();

export default function User() {
    return(
        <Container>
            <HeaderDashboard />

            <UserContent
                myName={userApi.getUsername()}
                myEmail={userApi.getUserEmail()}
            >

            </UserContent>
            
        </Container>
    )
}