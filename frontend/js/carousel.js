document.querySelectorAll(".carouselContainer")
.forEach(container=>{

    const carousel =
        container.querySelector(".carousel");

    const left =
        container.querySelector(".leftArrow");

    const right =
        container.querySelector(".rightArrow");

    left.onclick=()=>{

        carousel.scrollBy({

            left:-800,

            behavior:"smooth"

        });

    };

    right.onclick=()=>{

        carousel.scrollBy({

            left:800,

            behavior:"smooth"

        });

    };

});