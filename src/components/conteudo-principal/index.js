import { Container } from "./styled";

export default function Conteudo(props) {
    return(
        <Container style={props}>
            <h2 className="title">{props.myTitle}</h2>
            <hr />
            <div className="content">
                <div>{props?.children}</div>
            </div>
        </Container>
    )
}
