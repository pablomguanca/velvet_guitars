import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const purchase = data => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(purchase)}>
            <input type="text" placeholder="Nombre" {...register("Nombre", { required: true, maxLength: 80 })} />
            {errors["Nombre"] && <span style={{ color: 'red' }}>Por favor, ingresa tu nombre.</span>}
            <input type="text" placeholder="Apellido" {...register("Apellido", { required: true, maxLength: 100 })} />
            {errors["Apellido"] && <span style={{ color: 'red' }}>Por favor, ingresa tu apellido.</span>}
            <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
            {errors["Email"] && <span style={{ color: 'red' }}>Por favor, ingresa un correo electrónico válido.</span>}
            <input type="text" placeholder="Dirección" {...register("Dirección", { required: true, maxLength: 200 })} />
            {errors["Dirección"] && <span style={{ color: 'red' }}>Por favor, ingresa tu dirección.</span>}
            <input type="number" placeholder="Tarjeta de Crédito/Débito" {...register("Tarjeta de Crédito/Débito", { required: true, minLength: 16, maxLength: 16 })} />
            {errors["Tarjeta de Crédito/Débito"] && <span style={{ color: 'red' }}>Por favor, ingresa un número de tarjeta válido.</span>}
            <input type="number" placeholder="CVV" {...register("CVV", { required: true, minLength: 3, maxLength: 4 })} />
            {errors["CVV"] && <span style={{ color: 'red' }}>Por favor, ingresa un CVV válido.</span>}
            <input type="submit" />
        </form>
    );
}