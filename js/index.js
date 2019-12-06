let products = [{
    id: 000,
    name:`Cotton Romper with Waist Tie`,
    image: `img/romper.jpg`,
    description: `Super chic romper for those casual days. Breezy and light for the summer, pair with a white sneaker or wedges for an elevated look!`,
    price: `$39.00`,
    quantity: 250,
    category: `jumpsuits`
},{
    id: 001,
    name:`Embroidered Mesh Dress`,
    image: `img/embrod_front.jpg`,
    description: `Simply perfect embroidered mesh midi dress. Made from a lightweight cotton blend and mesh lining with zipper closure at back and topped with a v-neckline. Could be dressed up or down for various occassions.`,
    price: `$50.00`,
    quantity: 200,
    category: `dresses`
},{
    id: 002,
    name:`Striped Maxi Dress with Slit`,
    image: `img/stripes.jpg`,
    description: `Soft, comfortable cotton for a relaxing fit. Front-tie waist and leg slit for a chic, feminine look.`,
    price: `$55.00`,
    quantity: 300,
    category: `dresses`
},{
    id: 003,
    name:`Black Floral Maxi Dress`,
    image: `img/floraldress.jpg`,
    description: `Flowy every-day maxi dress made with medium-weight fabric. Wrapping, maxi skirt secured with internal ties and waist sash.`,
    price: `$30.00`,
    quantity: 200,
    category: `dresses`
},{
    id: 004,
    name:`Two Piece Off-White Set`,
    image: `img/coord.jpg`,
    description: `Style this together or separate! Vintage style halter top and front slit a-line skirt!`,
    price: `$45.00`,
    quantity: 400,
    category: 'jumpsuits'
}]

function renderProducts(arr) {
    const arrOfHtml = arr.map(getProductsAsHtmlString)
    const strOfHtml = arrOfHtml.join('\n');
    document.getElementById('products').innerHTML = strOfHtml; 
}

function getProductsAsHtmlString(product){
    return `
    <article class="product">
            <div class="product_image">
              <img src=${product.image} alt="Romper">
            </div>
            <section class="product2">
              <h3>${product.name}</h3>
              <p>${product.description}</p>
              <form>
                <fieldset>
                  <legend>Colours</legend>
                  <ul>
                    <li><label><input type="radio" name="colour" value="p"> <span>Pink</span></label></li>
                    <li><label><input type="radio" name="colour" value="w"> <span>White</span></label></li>
                    <li><label><input type="radio" name="colour" value="lb"> <span>Light Blue</span></label></li>
                  </ul>
                </fieldset>

                <fieldset>
                  <legend>Sizes</legend>
                  <ol>
                    <li><label><input type="radio" name="size" value="xs"> <span>XS</span></label></li>
                    <li><label><input type="radio" name="size" value="s"> <span>S</span></label></li>
                    <li><label><input type="radio" name="size" value="m"> <span>M</span></label></li>
                    <li><label><input type="radio" name="size" value="l"> <span>L</span></label></li>
                    <li><label><input type="radio" name="size" value="xl"> <span>XL</span></label></li>
                    <li><label><input type="radio" name="size" value="xxl"> <span>XXL</span></label></li>
                  </ol>
                </fieldset>
                <footer>
                  
                  <dl>
                    <dt>Rating</dt>
                    <dd>4.0 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span></dd>
                  </dl>
                  <div>
                      Quantity in stock: ${product.quantity}
                  </div>
                  <div>
                    Category: ${product.category}
                  </div>
                  <data value="39"> <ins id="price">${product.price}</ins></data>
                  <button type="button"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
                  <button type="button"><span class="material-icons">favorite</span></button>
                  <a href="#">see more</a>
                </footer>
              </form>
            </section>
          </article>  
    `
}

renderProducts(products)