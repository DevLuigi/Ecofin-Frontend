import Button from "../button";

import { Container } from "./styled";

export default function Header() {
    return(
        <Container>
            <img src="/assets/images/icon_logo.svg" alt="img-header"/>
            <div>
                <Button
                    myRoute={"/login"}
                    myMargin={"0em 1em"}
                    myHeight={6}
                    myWidth={12}
                    isTransparent={true}
                    myColor={"#323232"}
                > 
                    Login 
                </Button>
                <Button
                    myRoute={"/register"}
                    myHeight={6}
                    myWidth={12}
                    myBackgroundColor={"#FFB2B2"}
                    myColor={"#ffff"}
                > 
                    Comece já!
                </Button>
            </div>
        </Container>
    );
}

// myImage={"/assets/images/icon_logo.svg"}
// myImageSize={5}