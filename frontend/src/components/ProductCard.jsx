import { useState } from "react"

export default function ProduktCard({ productInfo, setAmount, setCart, cart }) {

  const [product, setProduct] = useState({
    title: productInfo.productname,
    price: productInfo.price,
    prodid: productInfo._id
  })

  const handleClick = () => {
    const exist = cart.find(item => item.prodid === product.prodid)
    setCart((prevCart) =>
      exist ? prevCart.map(item => item.prodid === product.prodid ? { ...item, quantity: item.quantity + 1 } : item)
        :
        [...prevCart, { ...product, quantity: 1 }])
    countProducts()
  }

  const countProducts = () => {
    setAmount(cart.reduce((total, item) => total + item.quantity, 1))
  }

  // const total = () => {
  // setAmount()
  // }

  return (
    <article>
      <img src={"/website_images/PROD_master_wu.webp" } alt={productInfo.productname} />
      <a href="#">KATEGORINAVN</a>
      <h3>{productInfo.productname}</h3>
      <span>Kr. {productInfo.price},-</span>
      <button onClick={handleClick}>Legg i handlekurv</button>
    </article>
  )
}
