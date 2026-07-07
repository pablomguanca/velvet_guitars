import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const docRef = doc(db, "products", id);

        getDoc(docRef)
            .then((resp) => {
                if (resp.exists()) {
                    const productData = { id: resp.id, ...resp.data() };
                    setDetail(productData);

                    // --- SEO Dinámico ---
                    document.title = `${productData.name} | Velvet Guitars`;
                    let metaDescription = document.querySelector('meta[name="description"]');
                    if (metaDescription) {
                        metaDescription.setAttribute('content', productData.description);
                    } else {
                        metaDescription = document.createElement('meta');
                        metaDescription.name = 'description';
                        metaDescription.content = productData.description;
                        document.head.appendChild(metaDescription);
                    }
                } else {
                    console.log("El producto no existe");
                }
            })
            .catch((error) => console.error("Error al cargar el detalle:", error))
            .finally(() => setLoading(false));

        return () => {
            document.title = "Velvet Guitars | Tu tienda de instrumentos";
        };
    }, [id]);

    return (
        <>
            {loading ? <Loader text="Cargando detalle..." /> : <ItemDetail detail={detail} />}
        </>
    );
};

export default ItemDetailContainer;