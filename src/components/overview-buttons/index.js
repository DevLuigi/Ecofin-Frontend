import { Container } from "./styled";
import Button from "../button";
import Input from "../input";
import { useState } from "react";
import { toast } from "react-toastify";

import TransactionApi from "../../service/transactionApi";
const api = new TransactionApi();

export default function OverviewButtons(props) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [date, setDate] = useState('');
    const [transactionType, setTransactionType] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const isFormCompleted = Object.values(
        [title, value, date, transactionType, category, description]
    ).every((value) => value.trim() !== "");

    const register = async () => {
        if(!isFormCompleted) {
            toast.warn("Preencha todos os campos");
            return;
        }

        const response = await api.createTransaction({
            title,
            value: parseFloat(value),
            date,
            transactionType,
            category,
            description
        });

        if (response?.status !== 200) {
            toast.error("Não foi possível processar sua solicitação. Verifique os dados fornecidos.");
            return;
        }

        toast.success("Movimentação criada com sucesso!");
        toggleMenu();
    }
      
    return (
        <Container isOpen={menuOpen}>
            <div className="transactionButtons">
                <Button
                    myHeight={8}
                    myWidth={8}
                    myBackgroundColor={"#FEF9F2"}
                    myColor={"#FF1010"}
                    myMethod={toggleMenu}
                    myImagePath={"/assets/images/sinal-de-menos.png"}
                >
                    Despesa
                </Button>

                <Button
                    myHeight={8}
                    myWidth={8}
                    myBackgroundColor={"#FEF9F2"}
                    myColor={"#5BFF6E"}
                    myMethod={toggleMenu}
                    myImagePath={"/assets/images/mais.png"}
                >
                    Receita
                </Button>
            </div>

            <section className="transaction">
                <div className="header">
                    <div className="title">
                        <h4>Nova movimentação</h4>
                    </div>

                    <div className="closeBox">
                        <Button
                            myHeight={2}
                            myWidth={2}
                            isTransparent={true}
                            myColor={"#000000"}
                            myMethod={toggleMenu}
                        >
                            X
                        </Button>
                    </div>
                </div>

                <div className="container">

                    <div className="form">
                        <Input
                            myMargin={"1em 0em"}
                            myHeight={9}
                            myWidth={28}
                            myGetter={title}
                            mySetter={setTitle}
                        >
                            Titulo
                        </Input>

                        <Input
                            myMargin={"1em 0em"}
                            myHeight={9}
                            myWidth={28}
                            myGetter={value}
                            mySetter={setValue}
                            myType={"number"}
                        >
                            Valor
                        </Input>

                        <Input
                            myMargin={"1em 0em"}
                            myHeight={9}
                            myWidth={28}
                            myGetter={date}
                            mySetter={setDate}
                            myType={"date"}
                        >
                            Data
                        </Input>

                        <Input
                            myMargin={"1em 0em"}
                            myHeight={9}
                            myWidth={28}
                            myGetter={transactionType}
                            mySetter={setTransactionType}
                        >
                            Tipo da movimentação
                        </Input>

                        <Input
                            myMargin={"1em 0em"}
                            myHeight={9}
                            myWidth={28}
                            myGetter={category}
                            mySetter={setCategory}
                        >
                            Categoria
                        </Input>

                        <Input
                            myMargin={"1em 0em"}
                            myHeight={9}
                            myWidth={28}
                            myGetter={description}
                            mySetter={setDescription}
                        >
                            Descrição
                        </Input>
                    </div>

                    <Button
                        myHeight={8}
                        myWidth={8}
                        myBackgroundColor={"#C9E9D2"}
                        myColor={"#000000"}
                        myMethod={register} //ajustar para verificar o form
                    >
                        Confirmar
                    </Button>

                </div>
            </section>
        </Container>
    )
}
