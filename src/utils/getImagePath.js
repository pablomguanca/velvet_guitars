const images = import.meta.glob('../assets/products/*.{png,jpg,jpeg,webp}', {
    eager: true,
    import: 'default'
});

export const getImagePath = (imageName) => {
    if (!imageName) return '';

    const exactPath = `../assets/products/${imageName}`;
    return images[exactPath] || '';
};