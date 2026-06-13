let cart = 0;
let crt=[];

function addToCart() {
    cart++;
    document.getElementById("cartCount").innerText = cart;
    crt.push({name:name,
                price:price
    });
}
function removefromcart(){
    if(cart>0){
        cart--;
       document.getElementById("cartCount").innerText = cart;
    }
    else {
        alert("Cart is Empty!")
    }
}
function viewCart() {
    if(cart>0){
        alert(crt.join("\n"));
    } else {
        alert("Cart is Empty!");
    }  
}
const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("keyup", function () {

    let filter = this.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let medicineName =
            card.querySelector("h3").innerText.toLowerCase();

        if (medicineName.includes(filter)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});

let currentIndex = 0;
const cardsPerPage = 2;

const cards = document.querySelectorAll(".card");

function showCards() {

    cards.forEach(card => {
        card.style.display = "none";
    });

    for (
        let i = currentIndex;
        i < currentIndex + cardsPerPage &&
        i < cards.length;
        i++
    ) {
        cards[i].style.display = "block";
    }

}

function nextCards() {

    if (currentIndex < cards.length - cardsPerPage) {
        currentIndex++;   // move by 1
        showCards();
    }

}

function previousCards() {

    if (currentIndex > 0) {
        currentIndex--;  
        showCards();
    }

}

showCards();
