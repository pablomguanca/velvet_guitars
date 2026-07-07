import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import Item from './Item';
import Loader from './Loader';

const CrossSelling = ({ category, currentId }) => {
    const [related, setRelated] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Si por algún motivo la categoría llega vacía, no hacemos la consulta
        if (!category) return;

        setLoading(true);

        const q = query(
            collection(db, "products"),
            where("category", "==", category)
        );

        getDocs(q).then((resp) => {
            const relatedProducts = resp.docs
                .map(doc => ({ id: doc.id, ...doc.data() }))
                // Filtramos la guitarra actual
                .filter(prod => prod.id !== currentId);

            setRelated(relatedProducts);
        }).catch(error => {
            console.error("Error cargando productos relacionados:", error);
        }).finally(() => {
            setLoading(false);
        });
    }, [category, currentId]);

    // Mientras busca, podemos mostrar un micro-loader o devolver null para que sea invisible
    if (loading) return null;

    // Si no hay productos relacionados, no renderizamos nada
    if (related.length === 0) return null;

    return (
        <section className="cross-selling">
            <h3 className="cross-selling__title">También te puede interesar...</h3>
            <div className="cross-selling__grid">
                {related.slice(0, 3).map(prod => (
                    <Item key={prod.id} prod={prod} />
                ))}
            </div>
        </section>
    );
};

export default CrossSelling;