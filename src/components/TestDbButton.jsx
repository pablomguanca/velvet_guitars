const createHandleProduct = () => {
    const db = getFirestore(App)
    const productCollection = collection(db, 'products')
    const myRequest = addDoc(productCollection, {
        name: 'Gibson Les Paul',
        price: 1500,
        category: 'electric',
        img: './assets/products/g_gibson_standard.jpg',
        stock: 10,
        description: 'La Gibson Les Paul es una guitarra eléctrica icónica, conocida por su diseño sólido y su sonido cálido y potente. Es una de las guitarras más populares entre los músicos de rock y blues, apreciada por su sustain y versatilidad tonal.'
    })

        .then((res) => console.log('Producto creado con ID:', res.id))
        .catch((error) => console.error('Error al crear el producto:', error))

    return myRequest(
        <button onClick={createHandleProduct}>Crear producto de prueba</button>
    )
}

export default createHandleProduct