var imgs = ["./LeoPhotos/young.jpg","./LeoPhotos/old.jpg"];
function changeImage() {
    imgs.push(imgs.shift())
    document.getElementById("imgClickAndChange").src = imgs[0];
    
}