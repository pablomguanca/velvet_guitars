import { useEffect, useState } from "react"
import { getProducts } from "../mock/asyncData"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Loader from "./Loader"



const ItemListContainer = ({saludo}) => {
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
        <>
            {
                loader
                    ? <Loader text={type ? "Cargando categoria..." : "Cargando productos..."} />
                    : <div>
                        <h1>{saludo}{type && <span style={{ textTransform: 'capitalize' }}>{type}</span>}</h1>
                        <ItemList data={data} />
                    </div>
            }
        </>
    )
}

export default ItemListContainer