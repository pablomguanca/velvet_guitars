import React, { useEffect } from 'react';
import imgVelvetStore from '../assets/img/tienda_velvet_guitars.jpeg'
const AboutUs = () => {

    useEffect(() => {
        document.title = "Nosotros | Velvet Guitars - Especialistas en Tono";
        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Conocé la historia de Velvet Guitars. Somos especialistas en guitarras, amplificadores y gear boutique con asesoramiento personalizado para músicos exigentes.');
        } else {
            metaDescription = document.createElement('meta');
            metaDescription.name = 'description';
            metaDescription.content = 'Conocé la historia de Velvet Guitars. Somos especialistas en guitarras, amplificadores y gear boutique con asesoramiento personalizado para músicos exigentes.';
            document.head.appendChild(metaDescription);
        }
        
        return () => {
            document.title = "Velvet Guitars | Tu tienda de instrumentos";
        };
    }, []);

    return (
        <section className="about-us">
            <div className="about-us__hero">
                <h1>Nuestra Pasión por el Sonido</h1>
                <p>Más que una tienda, un espacio curado por y para músicos.</p>
            </div>
            
            <div className="about-us__banner">
                <img src={imgVelvetStore} alt="El salón principal de Velvet Guitars" />
            </div>
            
            <div className="about-us__content">
                <article className="about-us__story">
                    <h2>Nuestra Historia</h2>
                    <p>Velvet Guitars nació con una premisa simple: cada guitarrista merece encontrar ese instrumento que lo inspire desde el primer acorde. Sabemos que comprar una guitarra no es solo una transacción comercial, es el comienzo de una relación con tu tono.</p>
                    <p>Por eso, seleccionamos nuestro catálogo meticulosamente. Desde los clásicos legendarios de la industria hasta las marcas boutique más innovadoras del mercado, cada pieza que entra a nuestro salón virtual fue elegida por su resonancia, comodidad y carácter.</p>
                </article>

                <article className="about-us__values">
                    <h2>El Estándar Velvet</h2>
                    <p>No movemos cajas, entregamos instrumentos listos para salir a tocar. Nuestro compromiso con el cliente se basa en tres pilares innegociables:</p>
                    <ul>
                        <li><strong>Calidad Garantizada:</strong> Inspeccionamos el hardware, la electrónica y la terminación de cada instrumento antes de publicarlo.</li>
                        <li><strong>Asesoramiento Real:</strong> Del otro lado de la pantalla hay músicos en actividad. Te ayudamos a encontrar el gear que mejor se adapte a tu estilo y presupuesto.</li>
                        <li><strong>Envíos Seguros:</strong> Embalaje de máxima protección y seguro de tránsito para que tu inversión llegue a tus manos en perfectas condiciones.</li>
                    </ul>
                </article>
            </div>
        </section>
    );
};

export default AboutUs;