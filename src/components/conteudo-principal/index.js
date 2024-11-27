import { Container } from "./styled";

export default function Conteudo(props) {
    return(
        <Container style={props}>
            <div className="background">

                <div className="title">
                    <h2>{props.myTitle}</h2>
                </div>

                <div className="contentDivision"><span></span></div>

                <div className="content">
                    <div>{props?.children}</div>
                </div>
            </div>
        </Container>
    )
}
