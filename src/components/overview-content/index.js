import { Container } from "./styled";
import Button from "../button";
import OverviewButtons from "../overview-buttons";

export default function OverviewContent(props) {
    return (
        <Container style={props}>
            <div className="acessoRapido">

                <div className="userReports">
                    <h3>Olá, {props.myName}!</h3>

                    <div className="reports">
                        <div>
                            <h4>Receita mensal</h4>
                            <h3 className="income" >R$ {props.myIncome}</h3>
                        </div>

                        <div>
                            <h4>Despesa mensal</h4>
                            <h3 className="expense" >R$ {props.myExpense}</h3>
                        </div>

                        <Button
                            className="reportsButton"
                            myRoute={"/reports"}
                            myMargin={"1.5em"}
                            myHeight={8}
                            myWidth={10}
                            myBackgroundColor={"#FEF9F2"}
                            myImagePath={"/assets/images/grafico-para-cima.png"}
                        >
                            Ver relatórios
                        </Button>
                    </div>
                </div>

                <div className="quickAcess">
                    <h3>Acesso rápido</h3>
                    <OverviewButtons />
                </div>

            </div>
        </Container>
    )
}
