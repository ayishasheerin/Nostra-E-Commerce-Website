var close_btn = document.getElementById("close_btn")
var close_bar = document.querySelector(".close_bar")

close_btn.addEventListener("click",function(){
    close_bar.style.display = "none"
})

var slide_menu = document.querySelector(".slide_menu")
var side_menu = document.querySelector(".side_menu")
var close_menu = document.getElementById("close_menu")

side_menu.addEventListener("click",function(){
    slide_menu.style.left="0%"
})
close_menu.addEventListener("click",function(){
    slide_menu.style.left="-60%"
})
var bannerimg = document.querySelectorAll(".banner_img");
var bannerslide = document.querySelector(".banner_slide");
var nextButton = document.querySelector(".next_btn");
var prevButton = document.querySelector(".prev_btn");

var currentIndex = 0;

if (bannerimg.length > 0 && bannerslide && nextButton && prevButton) {
    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % bannerimg.length;
        bannerslide.style.transform =
            `translateX(-${currentIndex * 100}%)`;
    });

    prevButton.addEventListener("click", function () {
        currentIndex =
            (currentIndex - 1 + bannerimg.length) % bannerimg.length;
        bannerslide.style.transform =
            `translateX(-${currentIndex * 100}%)`;
    });
}
document.querySelectorAll(".product i").forEach((heart) => {
    heart.addEventListener("click", function () {
        this.classList.toggle("fa-regular")
        this.classList.toggle("fa-solid")

        if (this.classList.contains("fa-solid")) {
            this.style.color = "red"
        } else {
            this.style.color = "black"
        }
    })
})
var products = document.querySelector(".products_container")
var search = document.getElementById("search")

search.addEventListener("keyup", function () {
    var enteredValue = search.value.toUpperCase()
    var productList = products.querySelectorAll(".product_card")

    for (var count = 0; count < productList.length; count=count+1) {
        var product = productList[count]
        var heading = product.querySelector("h3")

        
            var productName = heading.textContent.toUpperCase()

            if (productName.includes(enteredValue)) {
                product.style.display = "block"
            } else {
                product.style.display = "none"
            }
        }
    }
)
var filters = document.querySelectorAll(".left_sec input[type='checkbox']")

filters.forEach(function (filter) {
    filter.addEventListener("change", function () {

        var productList = document.querySelectorAll(".product_card")

        for (var count = 0; count < productList.length; count=count+1) {

            var product = productList[count];

            var occasion = product.dataset.occasion.toUpperCase();
            var color = product.dataset.color.toUpperCase();
            var arrival = product.dataset.arrival.toUpperCase();

            var showProduct = true;

            for (var i = 0; i < filters.length; i++) {

                if (filters[i].checked) {

                    var value = filters[i].value.toUpperCase()

                    if (filters[i].closest(".seasons") && !occasion.includes(value)) {
                        showProduct = false
                    }

                    if (filters[i].closest(".colors") && !color.includes(value)) {
                        showProduct = false
                    }

                    if (filters[i].closest(".arrival") && arrival !== value) {
                        showProduct = false
                    }
                }
            }

            if (showProduct) {
                product.style.display = ""
            } else {
                product.style.display = "none"
            }
        }
    })
})