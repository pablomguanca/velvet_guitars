import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        setLoading(true);
        const docRef = doc(db, "products", id);
        getDoc(docRef)
            .then((resp) => {
                if (resp.exists()) {
                    setDetail({ id: resp.id, ...resp.data() });
                } else {
                    console.log("El producto no existe");
                }
            })
            .catch((error) => console.error("Error al cargar el detalle:", error))
            .finally(() => setLoading(false));
    }, [id])

    console.log('ItemDetailContainer')

    return (
        <>
            {loading ? <Loader text="Cargando detalle..." /> : <ItemDetail detail={detail} />}
        </>
    )
}

export default ItemDetailContainer