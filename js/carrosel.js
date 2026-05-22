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

        Carousel.Show();

        Carousel._interval = setInterval(() => {
            Carousel.Next();
        }, 3000);

        document.getElementById("next").addEventListener("click", () => {
            Carousel.Next();
        });

        document.getElementById("prev").addEventListener("click", () => {
            Carousel.Prev();
        });
    }

    static Show() {

        const item = Carousel._arr[Carousel._sequence];

        document.getElementById("carousel-image").innerHTML = `
            <button id="prev">&#10094;</button>

            <a href="${item.link}">
                <img src="${item.image}" alt="${item.title}">
            </a>

            <button id="next">&#10095;</button>
        `;

        document.getElementById("carousel-title").innerHTML = `
            <p>
                ${item.title}
            </p>
        `;

        document.getElementById("next").addEventListener("click", () => {
            Carousel.Next();
        });

        document.getElementById("prev").addEventListener("click", () => {
            Carousel.Prev();
        });
    }

    

    static Next() {

        Carousel._sequence++;

        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }

        Carousel.Show();
    }

    static Prev() {

        Carousel._sequence--;

        if (Carousel._sequence < 0) {
            Carousel._sequence = Carousel._size - 1;
        }

        Carousel.Show();
    }
}