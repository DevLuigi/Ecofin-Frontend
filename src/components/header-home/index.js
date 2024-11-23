import { Container } from "./styled";
import Button from "../button";

export default function Header() {
    return(
        <Container>
            <img src="/assets/images/icon_logo.svg" alt="img-header"/>
            <div>
                <Button
                    myMargin={"0em 1em"}
                    myHeight={6}
                    myWidth={12}
                    isTransparent={true}
                    myColor={"#323232"}
                    myMethod={() => alert("button 1")}
                > 
                    Login 
                </Button>
                <Button
                    myHeight={6}
                    myWidth={12}
                    myBackgroundColor={"#FFB2B2"}
                    myColor={"#ffff"}
                    myMethod={() => alert("button 2")}
                > 
                    Comece já!
                </Button>
            </div>
        </Container>
    );
}

// myImage={"/assets/images/icon_logo.svg"}
// myImageSize={5}