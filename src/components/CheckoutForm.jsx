import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const purchase = data => console.log(data);
    console.log(errors);

    return (
        <form className="checkout-form" onSubmit={handleSubmit(purchase)}>

            <div className="checkout-form__field">
                <input type="text" placeholder="Nombre" {...register("Nombre", { required: true, maxLength: 80 })} />
                {errors["Nombre"] && <span className="checkout-form__error">Por favor, ingresá tu nombre.</span>}
            </div>

            <div className="checkout-form__field">
                <input type="text" placeholder="Apellido" {...register("Apellido", { required: true, maxLength: 100 })} />
                {errors["Apellido"] && <span className="checkout-form__error">Por favor, ingresá tu apellido.</span>}
            </div>

            <div className="checkout-form__field">
                <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                {errors["Email"] && <span className="checkout-form__error">Por favor, ingresá un email válido.</span>}
            </div>

            <div className="checkout-form__field">
                <input type="text" placeholder="Dirección" {...register("Dirección", { required: true, maxLength: 200 })} />
                {errors["Dirección"] && <span className="checkout-form__error">Por favor, ingresá tu dirección.</span>}
            </div>

            <div className="checkout-form__field">
                <input type="number" placeholder="Número de tarjeta" {...register("Tarjeta de Crédito/Débito", { required: true, minLength: 16, maxLength: 16 })} />
                {errors["Tarjeta de Crédito/Débito"] && <span className="checkout-form__error">Por favor, ingresá un número de tarjeta válido.</span>}
            </div>

            <div className="checkout-form__field">
                <input type="number" placeholder="CVV" {...register("CVV", { required: true, minLength: 3, maxLength: 4 })} />
                {errors["CVV"] && <span className="checkout-form__error">Por favor, ingresá un CVV válido.</span>}
            </div>

            <button type="submit" className="btn btn-success checkout-form__submit">Confirmar compra</button>

        </form>
    );
}