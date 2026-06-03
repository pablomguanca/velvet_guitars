import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/asyncData'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from './Loader'

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        getOneProduct(id)
            .then((res) => setDetail(res))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [id])
    console.log('ItemDetailContainer')
    return (
        <>
            {loading ? <Loader text="Cargando detalle..." /> : <ItemDetail detail={detail} />}
        </>
    )
}

export default ItemDetailContainer