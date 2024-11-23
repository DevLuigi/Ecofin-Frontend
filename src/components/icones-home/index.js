import { Container } from "./styled";

export default function IconeText(props) {
    return (
        <Container style={props}>
            <img src={props.myImagePath} alt="icone-text-image"/>
            <p>{props.children}</p>
        </Container>
    );
}