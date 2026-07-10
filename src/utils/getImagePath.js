const images = import.meta.glob("../assets/products/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
});

export const getImagePath = (imageName) => {
    if (!imageName) return "";

    const foundKey = Object.keys(images).find((k) => k.endsWith(imageName));
    return foundKey ? images[foundKey] : "";
};
