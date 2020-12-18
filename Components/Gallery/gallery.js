{/* <div class="flex w-full justify-evenly"> */ }
const galleryItemGenerator = (image) => `<figure class="my-9">
    <img src="${image.src}" alt="${image.alt}" class="h-56 w-56 overflow-hidden">
        <figcaption class="bg-teal-dark text-stone-dark">${image.caption}</figcaption>
</figure>`


const images = [
    { src: "./LeoPhotos/gallery0.jpg", alt: "Puppy Pulling Hair", caption: "Tug O' War" },
    { src: "./LeoPhotos/gallery1.jpg", alt: "Sleeping Dog", caption: "Always Sleepy" },
    { src: "./LeoPhotos/gallery3.jpg", alt: "Dog Tucked In Blankets", caption: "Get Tucked" },
    { src: "./LeoPhotos/gallery4.jpg", alt: "Dog Sleeping Next to Man with Paw on Chest", caption: "World Best Cuddler" },
    { src: "./LeoPhotos/gallery5.jpg", alt: "Dog Sleeping Next To Woman In Bed", caption: "My Favorite Past Time" },
    { src: "./LeoPhotos/gallery6.jpg", alt: "Dog Wrapped in Blankets", caption: "Ultimate Bundle" }

]
window.addEventListener('DOMContentLoaded', (event) => {
    console.log("i was running");
    const gallery = document.querySelector('#gallery');
    gallery.innerHTML = images.map(galleryItemGenerator).join("")
});
