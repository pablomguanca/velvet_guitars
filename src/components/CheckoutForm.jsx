import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { CartContext } from '../context/CartContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
    const { cart, total, clear } = useContext(CartContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();

    const purchase = async (data) => {
        const orden = {
            comprador: data,
            carrito: cart,
            total: total(),
            fecha: serverTimestamp()
        };

        try {
            const ordersRef = collection(db, 'orders');
            const docRef = await addDoc(ordersRef, orden);
            clear();
            reset();
            Swal.fire({
                title: '¡Compra confirmada!',
                text: `Gracias por tu compra en Velvet Guitars. Tu número de orden es: ${docRef.id}`,
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                navigate('/');
            });

        } catch (error) {
            console.error("Error al generar la orden: ", error);
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al procesar tu compra. Intentá nuevamente.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
    };

    return (
        <form className="checkout-form" onSubmit={handleSubmit(purchase)}>
            <h2>Completá tus datos</h2>

            <div className="checkout-form__field">
                <input type="text" placeholder="Nombre" {...register("Nombre", { required: true, maxLength: 80 })} />
                {errors["Nombre"] && <span className="checkout-form__error">Por favor, ingresá tu nombre.</span>}
            </div>

            <div className="checkout-form__field">
                <input type="text" placeholder="Apellido" {...register("Apellido", { required: true, maxLength: 100 })} />
                {errors["Apellido"] && <span className="checkout-form__error">Por favor, ingresá tu apellido.</span>}
            </div>

            <div className="checkout-form__field">
                <input type="email" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                {errors["Email"] && <span className="checkout-form__error">Por favor, ingresá un email válido.</span>}
            </div>

            <div className="checkout-form__field">
                <input type="text" placeholder="Dirección" {...register("Dirección", { required: true, maxLength: 200 })} />
                {errors["Dirección"] && <span className="checkout-form__error">Por favor, ingresá tu dirección.</span>}
            </div>

            <div className="checkout-form__field">
                <input type="number" placeholder="Número de tarjeta" {...register("Tarjeta", { required: true, minLength: 16, maxLength: 16 })} />
                {errors["Tarjeta"] && <span className="checkout-form__error">Por favor, ingresá un número de tarjeta de 16 dígitos.</span>}
            </div>

            <div className="checkout-form__field">
                <input type="number" placeholder="CVV" {...register("CVV", { required: true, minLength: 3, maxLength: 4 })} />
                {errors["CVV"] && <span className="checkout-form__error">Por favor, ingresá un CVV válido.</span>}
            </div>

            <button type="submit" className="btn btn-success checkout-form__submit">Confirmar compra</button>
        </form>
    );
};

export default CheckoutForm;