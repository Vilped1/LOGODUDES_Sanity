// import { Children } from "react";
import Header from "./Header";
import Nav from "./Nav";

export default function Layout({ amount, cart, setCart, category, children }) {
    return (
        <div id="container">
            <Header amount={amount} cart={cart} setCart={setCart} />
            {/* <Header inCart={amount}/> */}
            <Nav category={category} /> 
            {/* En prop burde skrives med små bokstaver */}
            {children}
        </div>
    )
}