const images = [
    "https://i.ibb.co/qNMzzn9/img2.jpg",
    "https://i.ibb.co/VDhW3fB/img3.jpg",
    "https://i.ibb.co/n0dXy3K/img1.jpg"
];
let currentIndex = 0;

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("phoneImage").src = images[currentIndex];
}
