// 4.5 ma rating vako lai star adhi dekhaune ani 4.1 xa vane .1 % dekhaune




const URL = `https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`;

const cardsContainer = document.querySelector(".cards-container");




fetch(URL)
.then((res) => res.json())
.then((data)=> {
    
    data.forEach(product => {
      
        const ratings = product.rating ? Array(parseInt(product.rating)).fill().map((_, i) => "<p>⭐</p>"
        ) : "not rated";
        

        cardsContainer.innerHTML += ` <div class="card">
        <p class="card__title" title="Brand: ${product.brand}">${product.name}</p>
        <div class="card__image">
            <img src="${product.image_link}"
                alt="">
        </div>
        <div class="card__info">
            <p class="card__price">Price: $${product.price}</p>
            <div class="card__ratings" title="${product.rating ? product.rating : "No proper ratings"}">
            ${ratings.toString().replace(/,/g, '')}
            </div>
        </div>
        <p class="card__description" title="${product.description}">
            ${product.description.slice(0,100)}...
        </p>
        <a class="card__buy" href="${product.product_link}" target="_blank">
        Buy Now
        </a>
    
    </div>`;
    });
    
})


