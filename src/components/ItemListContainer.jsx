import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);
    const { type } = useParams();

    useEffect(() => {
        setLoader(true);
        const productsRef = collection(db, "products");
        const q = type ? query(productsRef, where("category", "==", type)) : productsRef;
        getDocs(q)
            .then((resp) => {
                setData(
                    resp.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() };
                    })
                );
            })
            .catch((error) => console.error("Error al cargar productos:", error))
            .finally(() => setLoader(false));
    }, [type]);

    const title = type
        ? `Categoría: ${type.charAt(0).toUpperCase() + type.slice(1)}`
        : "Bienvenidos a Velvet Guitars!";

    return (
        <section className="hero-section">
            {loader ? (
                <Loader
                    text={type ? "Cargando categoría..." : "Cargando productos..."}
                />
            ) : (
                <div>
                    <h1>{title}</h1>
                    <ItemList data={data} />
                </div>
            )}
        </section>
    );
};

export default ItemListContainer;