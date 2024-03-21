export default function Title({ category }) {
    return (
        <h2>{category.replaceAll("-", " ")}</h2>
    )
}