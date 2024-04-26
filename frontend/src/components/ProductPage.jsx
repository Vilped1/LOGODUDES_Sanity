import { Link, useParams } from "react-router-dom"
import { fetchProductBySlug, updateReview } from "../../sanity/services/productServices"
import { useEffect, useState } from "react"

export default function ProductPage() {
    // Sattes for å lagre skjemainformasjon
    const [reviewer, setReviewer] = useState("")
    const [comment, setComment] = useState("")
    const [rating, setRating] = useState(0)
    const [formmessage, setFormmessage] = useState("")

    // handleChange-funksjoner for felter
    const handleReviewerChange = (e) => {
        e.preventDefault()
        setReviewer(e.target.value)
    }

    const handleCommentChange = (e) => {
        e.preventDefault()
        setComment(e.target.value)
        console.log("C", e.target.value)
    }

    const handleRatingChange = (e) => {
        e.preventDefault()
        setRating(Number(e.target.value))
        console.log("R", e.target.value)
    }

    // handleSubmit-funksjon for når en bruker sender en anmeldelse
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(rating === 0) {
            setFormmessage("Du må velge en vurdering")
        } else {
            const result = await updateReview(product._id, reviewer, comment, rating)
            console.log(result)
            if(result === "Success") {
                setFormmessage("Din anmeldelse er registrert")
                product.reviews.push({reviewer, comment, rating})
            } else {
                setFormmessage(result)
            }
            console.log(result)
        }
    }

    const {slug} = useParams()
    const [product, setProduct] = useState(null)

    const getProductBySlug = async (slug) => {
        const data = await fetchProductBySlug(slug)
        setProduct(data[0])
    }

   useEffect(() => {
        getProductBySlug(slug)
    }, [slug])

    console.log("Product", product)

    // Hvis
    if(product) {
        return (
            <main id="productpage">
                <figure>
                    <img src={product?.image} alt={`Produkbilde av LEGO-figuren ${product?.productname}`} />
                </figure>
                <article>
                    <h2>{product?.productname}</h2>
                    <p className="metainfo">
                        <Link to={"/produkter/" + product?.catslug}>{product?.categoryname}</Link>
                        <span className="stockcount">{product?.stock === 0 ? "Tomt" : product?.stock} på lager</span>
                    </p>
                    <p>{product?.description}</p>
                    <p className="priceview">Kr. {product?.price},-</p>
                    <h3>Anmeldelser:</h3>
                    <form action="">
                        <p>
                            <label htmlFor="reviewer">Ditt navn:</label><br />
                            <input name="reviewer" id="revewer" onChange={handleReviewerChange} type="text" />
                        </p>
                        <p>
                            <label htmlFor="comment">Kommentar:</label><br />
                            <textarea name="comment" id="comment" onChange={handleCommentChange}></textarea>
                        </p>
                        <p>
                            <label htmlFor="rating">Vurdering:</label><br />
                            <select name="rating" id="rating" required onChange={handleRatingChange}>
                                <option value="">...</option>
                                {/* <option value="0">...</option> */}
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </p>
                        <p id="formmessage">{formmessage}</p>
                        <p><button onClick={handleSubmit}>Send anmeldelse</button></p>
                    </form>
                    {
                        product?.reviews?.map((r, index) => 
                            <p key={index}>
                                <strong>{r.reviewer}</strong><br />
                                {r.comment}<br />
                                Vurdering: {r.rating}
                            </p>
                        )
                    }
                </article>
            </main>
        )
    } else {
        return (
            <main>
                <p>Laster produkt info...</p>
            </main>
        )
    }    
}