import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncData"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Loader from "./Loader"



const ItemListContainer = ({ saludo }) => {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true)
    const { type } = useParams()


    useEffect(() => {
        setLoader(true)
        getProducts()
            .then((res) => {
                if (type) {
                    setData(res.filter((prod) => prod.category === type))
                } else {
                    setData(res)
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoader(false))
    }, [type])



    return (
        <section className="hero-section">
            {
                loader
                    ? <Loader text={type ? "Cargando categoría..." : "Cargando productos..."} />
                    : <div>
                        <h1>{saludo}{type && <span style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>{type}</span>}</h1>
                        <ItemList data={data} />
                    </div>
            }
        </section>
    )
}

export default ItemListContainer