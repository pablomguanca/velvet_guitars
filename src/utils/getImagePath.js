export const getImagePath = (imageName) => {
    if (!imageName) return '';

    return new URL(`../assets/products/${imageName}`, import.meta.url).href;
};