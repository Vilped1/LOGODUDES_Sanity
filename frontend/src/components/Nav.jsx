import { useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function Nav() {
  const {id} = useParams()
  console.log(id)
  const [active, setActive] = useState()
  const categoryList = ["City", "Ninjago", "Castles and Knights", "Marine and Pirates", "Movie Characters"]
  // <a className={category === item ? "active" : null} href="#">{item}</a>
  return ( 
    <nav>
      <ul>
        {categoryList.map((item, index) =>
          <li key={index}><Link to={"produkter/" + item.replaceAll(" ", "-")}>{item}</Link></li>)}
      </ul>
    </nav>
  )
}