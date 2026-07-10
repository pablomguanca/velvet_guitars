import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { products } from "../mock/AsyncData";

export default function SeedCatalog() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const seed = async () => {
            try {

                for (const p of products) {
                    const productRef = doc(db, "products", p.id);

                    const snap = await getDoc(productRef);
                    if (!snap.exists()) {
                        await setDoc(productRef, p);
                    }
                }
            } catch (err) {
                console.error("SeedCatalog error:", err);
            } finally {
                setLoading(false);
            }
        };

        seed();
    }, []);

    return null;
}
