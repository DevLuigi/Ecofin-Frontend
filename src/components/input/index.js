import { Container } from "./styled";

export default function Input(props) {
    return(
        <Container style={props}>
            <p> {props.children} </p>
            <input value={props.myGetter} onChange={(e) => props.mySetter(e.target.value)}/>
        </Container>
    )
}