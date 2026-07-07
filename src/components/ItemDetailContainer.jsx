import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import { doc, getDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig"; 

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const [related, setRelated] = useState([]);
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

                    const q = query(
                        collection(db, "products"),
                        where("category", "==", productData.category)
                    );

                    getDocs(q).then((relatedResp) => {
                        const relatedProducts = relatedResp.docs
                            .map(doc => ({ id: doc.id, ...doc.data() }))
                            .filter(prod => prod.id !== resp.id);

                        setRelated(relatedProducts);
                    });

                } else {
                    console.log("El producto no existe");
                }
            })
            .catch((error) => console.error("Error al cargar el detalle:", error))
            .finally(() => setLoading(false));
    }, [id]);

    return (
        <>
            {loading ? <Loader text="Cargando detalle..." /> : <ItemDetail detail={detail} related={related} />}
        </>
    );
};

export default ItemDetailContainer;