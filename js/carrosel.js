let carouselArr = [];

class Carousel {
    constructor(image, title, link) {
        this.image = image;
        this.title = title;
        this.link = link;
    }

    static Start(arr) {
        Carousel._arr = arr;
        Carousel._sequence = 0;
        Carousel._size = arr.length;

        Carousel.Next();

        setInterval(() => {
            Carousel.Next();
        }, 5000);
    }

    static Next() {
        const item = Carousel._arr[Carousel._sequence];

        console.log("Imagem inserida:", item.image);
        
        document.getElementById("carousel").innerHTML = `
            <a href="${item.link}">
                <img src="${item.image}" alt="${item.title}" style="width: 500px;">
            </a>
        `;

        document.getElementById("carousel-title").innerHTML = item.title;

        Carousel._sequence++;

        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
    }
}