import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { fetchAllCategories } from "../../sanity/services/categoryServices"

export default function Nav() {
  const {id} = useParams()
  console.log(id)
  const [active, setActive] = useState()
  const [categoryList, setCategoryList] = useState(null)

  const getAllCategories = async() => {
    const data = await fetchAllCategories()
    setCategoryList(data)
  }
  // const categoryList = ["City", "Ninjago", "Castles and Knights", "Marine and Pirates", "Movie Characters"]
  // <a className={category === item ? "active" : null} href="#">{item}</a>

  useEffect(() => {
    console.log(active)
    getAllCategories()
  }, [active])

  return ( 
    <nav>
       <ul>
         {categoryList?.map((item, index) =>
          <li key={index + "cat"}>
          <Link to={"produkter/" + item.catslug}
          onClick={() => setActive(item._id)}
          className={active === item._id ? "active" :null}>{item.categorytitle}</Link>
          </li>)}
      </ul>
    </nav>
  )
}