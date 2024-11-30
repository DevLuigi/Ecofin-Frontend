import HeaderDashboard from "../../components/header-dashboard";
import UserContent from "../../components/user-content";

import { Container } from "./styled";

export default function User() {
    return(
        <Container>
            <HeaderDashboard />

            <UserContent
                myName={"nome do usuario"}
                myEmail={"email do usuario"}
            >

            </UserContent>
            
        </Container>
    )
}