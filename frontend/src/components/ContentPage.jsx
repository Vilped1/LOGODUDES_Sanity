import { products } from '../assets/legoduds'
import Title from './Title'
import ProduktCard from './ProductCard'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchCategoryBySlug } from '../../sanity/services/categoryServices'

export default function ContentPage({ amount, setAmount, category, setCart, cart }) {
  const {slug} = useParams()
  const [catInfo, setCatInfo] = useState(null)

  const getCategoryBySlug = async (slug) => {
    const data = await fetchCategoryBySlug(slug)
    setCatInfo(data[0])
  }

  useEffect(() => {
    getCategoryBySlug(slug)
  }, [slug])

  console.log(catInfo)

  return (
    <main>
      <Title category={catInfo?.categorytitle} /> 
      {/* {products.map(product =>
        <ProduktCard
          cart={cart}
          setCart={setCart}
          prodid={product.prodid}
          key={product.prodid}
          category={product.category}
          title={product.title}
          img={product.imagefile}
          price={product.price}
          amount={amount}
          setAmount={setAmount}
        />)} */}
    </main>
  )
}