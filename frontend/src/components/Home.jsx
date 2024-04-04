import { useEffect, useState } from "react"
import { fetchAllProducts } from "../../sanity/services/productServices"
import ProduktCard from "./ProductCard"

export default function Home({setAmount, cart, setCart}) {

    const [products, setProducts] = useState(null)

    const getAllProducts = async () => {
        const data = await fetchAllProducts()
        setProducts(data)
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    console.log(products)

    return (
        <main>
            <h2>Velkommen til LEGO-Dudes</h2>
            {products?.map((productInfo, index) => <ProduktCard key={index} productInfo={productInfo} setAmount={setAmount} cart={cart} setCart={setCart}/>)}
        </main>
    )
}