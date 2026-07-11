import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {

    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    });

    useEffect(() => {
        document.title = "Contacto | Velvet Guitars";
        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Contactate con Velvet Guitars. Estamos para asesorarte y ayudarte a encontrar el instrumento perfecto.');
        }
        return () => {
            document.title = "Velvet Guitars | Tu tienda de instrumentos";
        };
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos capturados listos para enviar:", formData);
        alert("¡Gracias por escribirnos! Hemos recibido tu mensaje.");

        setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
    };

    return (
        <section className="contact">
            <div className="contact__hero">
                <h1>Contacto</h1>
                <p>¿Tenés dudas sobre algún instrumento? Escribinos y un especialista te asesorará.</p>
            </div>

            <div className="contact__container">
                <form className="contact__form" onSubmit={handleSubmit}>
                    <div className="contact__form__field">
                        <label htmlFor="nombre">Nombre completo</label>
                        <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
                    </div>

                    <div className="contact__form__field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>

                    <div className="contact__form__field">
                        <label htmlFor="telefono">Teléfono (opcional)</label>
                        <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} />
                    </div>

                    <div className="contact__form__field">
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea id="mensaje" name="mensaje" rows="5" value={formData.mensaje} onChange={handleChange} required></textarea>
                    </div>

                    <button type="submit" className="contact__form__submit">Enviar mensaje</button>
                </form>

                <aside className="contact__info">
                    <h3>Información Directa</h3>
                    <p>Si preferís otro canal, estamos disponibles de Lunes a Viernes de 10 a 19hs.</p>

                    <div className="info-item">
                        <strong>Email:</strong>
                        <span>asesoria@velvetguitars.com</span>
                    </div>
                    <div className="info-item">
                        <strong>WhatsApp:</strong>
                        <span>+54 9 11 1234-5678</span>
                    </div>
                    <div className="info-item">
                        <strong>Showroom:</strong>
                        <span>Avenida SiempreViva 1988 (Con cita previa)</span>
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default Contact;