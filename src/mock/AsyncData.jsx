import imgGibson from '../assets/productos/g_gibson_standard.jpg';
import imgBillieJoe from '../assets/productos/g_billie_joe.jpg';
import imgTelecaster from '../assets/productos/g_telecaster.jpg';
import imgGibsonCustom from '../assets/productos/g_gibson_custom.jpg';
import imgJackson from '../assets/productos/g_jackson.jpg';
import imgSquier from '../assets/productos/g_squier.jpg';
import imgZakkWilde from '../assets/productos/g_zakk_wylde.jpg';
import imgFender from '../assets/productos/g_fender.jpg'

const productos = [
    {
        id: '01',
        name: 'Guitarra Gibson Les Paul Standard (Acabado Sunburst)',
        description: 'El arquetipo absoluto de la guitarra de rock clásico. Esta belleza luce una tapa de arce flameado con un acabado degradado tradicional (Sunburst, posiblemente Heritage Cherry o Iced Tea). Sus características clásicas incluyen dos pastillas humbucker con cubiertas metálicas, puente Tune-o-matic, plásticos en color crema y marcadores de posición trapezoidales. Es venerada en la industria musical por su tono cálido, grueso, con cuerpo y una resonancia excepcional.',
        stock: 20,
        price: 1300,
        category: 'nuevos',
        img: imgGibson
    },
    {
        id: '02',
        name: 'Guitarra Fender Telecaster (Acabado Butterscotch Blonde)',
        description: 'Este instrumento representa uno de los primeros y más exitosos diseños de guitarras eléctricas de cuerpo sólido, estilizado fielmente como los modelos de principios de los años 50 (estilo 1952). Luce el icónico acabado rubio translúcido (Butterscotch Blonde), un golpeador negro de una sola capa y un mástil completo de arce. Su configuración de dos pastillas de bobina simple es legendaria por entregar ese tono brillante, cortante y percusivo (conocido como twang), fundamental en la música country y el rock and roll.',
        stock: 20,
        price: 1250,
        category: 'mas vendidos',
        img: imgTelecaster
    },
    {
        id: '03',
        name: 'Guitarra Fender Stratocaster (Acabado 3-Color Sunburst)',
        description: 'Quizás el diseño de guitarra eléctrica más reconocido del mundo. Este modelo presenta un acabado sunburst de tres colores (que transiciona de negro a rojo y luego a amarillo), contrastado con un golpeador blanco y un diapasón de palisandro (o pau ferro). Su ergonomía superior y su configuración de tres pastillas single-coil con selector de cinco posiciones le otorgan una paleta sonora inmensamente versátil, popularizada por leyendas como Jimi Hendrix, Stevie Ray Vaughan y Eric Clapton',
        stock: 14,
        price: 5000,
        category: 'ofertas',
        img: imgFender
    },
    {
        id: '04',
        name: 'Guitarra Squier by Fender Stratocaster',
        description: 'Un modelo muy popular (posiblemente de la serie Affinity o Bullet) que ofrece el diseño clásico de Fender a un precio accesible. Presenta un llamativo acabado en color morado oscuro con un golpeador blanco. Mantiene la configuración electrónica tradicional de la Stratocaster: tres pastillas de bobina simple (single-coil), un puente con trémolo sincronizado y controles de volumen y tono, ideal para una gran versatilidad de géneros, desde el blues hasta el rock alternativo.',
        stock: 20,
        price: 3000,
        category: 'ofertas',
        img: imgSquier
    },
    {
        id: '05',
        name: 'Guitarra Réplica de "Blue" (Guitarra estilo Stratocaster de Billie Joe Armstrong)',
        description: 'Esta es una recreación de la mítica guitarra "Blue", el instrumento principal de Billie Joe Armstrong (líder de Green Day). Se trata de una guitarra estilo Stratocaster en color Daphne Blue desgastado, cubierta con las icónicas pegatinas de la original y las iniciales "BJ" pintadas en rojo. La modificación más importante respecto a una Stratocaster tradicional es la pastilla humbucker instalada en un ángulo irregular en la posición del puente, lo que le da ese sonido punk rock grueso y agresivo.',
        stock: 4,
        price: 3000,
        category: 'ofertas',
        img: imgBillieJoe
    },
    {
        id: '06',
        name: 'Epiphone Les Paul Custom Zakk Wylde Signature "Bullseye"',
        description: 'Una guitarra inconfundible diseñada en colaboración con Zakk Wylde (ex guitarrista de Ozzy Osbourne y Black Label Society). Destaca inmediatamente por su gráfico de diana (bullseye) en colores crema y negro. Al ser una Les Paul "Custom", cuenta con detalles de lujo como múltiples ribetes (binding) en el cuerpo, herrajes dorados y las clásicas incrustaciones de bloque en el mástil. Está armada con pastillas humbucker diseñadas para tonos pesados, alta ganancia y mucho sustain.',
        stock: 8,
        price: 3000,
        category: 'ofertas',
        img: imgZakkWilde
    },
    {
        id: '07',
        name: 'Gibson Les Paul Custom (Acabado Wine Red)',
        description: 'Conocida históricamente como el "esmoquin" de las guitarras eléctricas por su elegancia. Este modelo de alta gama presenta un acabado rojo vino (Wine Red) translúcido que permite apreciar la textura de la madera. Sus características premium incluyen herrajes dorados, un diapasón oscuro (típicamente de ébano o richlite) con incrustaciones de bloque de madreperla, un grueso ribete multicapa y el icónico diamante dividido (split diamond) incrustado en la pala.',
        stock: 5,
        price: 3000,
        category: 'ofertas',
        img: imgGibsonCustom
    },
    {
        id: '08',
        name: 'Guitarra Jackson Dinky Arch Top (Serie JS)',
        description: 'Esta es una guitarra orientada al metal y al shred. Cuenta con una tapa arqueada (arch top) con un hermoso acabado que resalta la veta de la madera (probablemente arce acolchado o quilted maple). Equipa la característica pala puntiaguda de Jackson, un mástil diseñado para tocar a gran velocidad, configuración de dos pastillas humbucker de alta salida y un sistema de trémolo flotante estilo Floyd Rose para realizar dive bombs y efectos extremos de vibrato sin perder la afinación.',
        stock: 15,
        price: 3000,
        category: 'ofertas',
        img: imgJackson
    }
]


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 3000)
    })
}

export const getOneProduct = (id) => {
    return new Promise((resolve) => {
        let prd = productos.find((item) => item.id === id)
        setTimeout(() => {
            resolve(prd)
        }, 3000)
    })
}