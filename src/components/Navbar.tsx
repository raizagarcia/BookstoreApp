import {Button, Container, Nav, Navbar as Navbarbs} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"


export function Navbar(){
    const { openCart, cartQuantity} = useShoppingCart()
    return (
        <Navbarbs sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
           <Nav className="me-auto">
            <Nav.Link to={"/"} as={NavLink}>Home</Nav.Link>
           </Nav>
           <Nav>
            <Nav.Link to={"/store"} as={NavLink}>Store</Nav.Link>
           </Nav>
           <Nav>
            <Nav.Link to={"/about"} as={NavLink}>About</Nav.Link>
           </Nav>
           {cartQuantity > 0 && (
            <Button
            onClick={openCart}
            style= {{width: "3rem", height: "3rem", position: "relative"}}
            variant="outline-success"
            className="rounded-circle"
            >
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor" 
            viewBox="0 0 16 16">
  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
</svg>
        <div className="rounded-circle bg-danger d-flex-content-center 
        align-itemn-center" style={{ 
            color: "white", 
            width:"1.5rem", 
            heigth: "1.5rem", 
            position: "absolute", 
            bottom: 0, 
            right: 0, 
            transform:"translate(25%, 25%)"
            }}>
                {cartQuantity}
            </div>

            </Button>
            )}
        </Container>
    </Navbarbs>
    )
    
}