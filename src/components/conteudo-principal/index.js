import { Container } from "./styled";

export default function Conteudo(props) {
    return(
        <Container style={props}>
            <div id="background">

                <div id="titulo">
                    <h2>{props.myTitle}</h2>
                </div>

                <div id="divisaoConteudo"><span></span></div>

                <div id="conteudo">
                    <span>{props?.children}</span>
                </div>
            </div>
        </Container>
    )
}
