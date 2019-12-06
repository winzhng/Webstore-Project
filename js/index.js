let product0 = [
{
    name:`Cotton Romper with Waist Tie`,
    image: `img/romper.jpg`,
    description: `Super chic romper for those casual days. Breezy and light for the summer, pair with a white sneaker or wedges for an elevated look!`,
    price: `$39.00`
},{
    name:`Embroidered Mesh Dress`,
    image: `img/embrod_front.jpg`,
    description: `Simply perfect embroidered mesh midi dress. Made from a lightweight cotton blend and mesh lining with zipper closure at back and topped with a v-neckline. Could be dressed up or down for various occassions.`,
    price: `$50.00`
},{
    name:`Striped Maxi Dress with Slit`,
    image: `img/stripes.jpg`,
    description: `Soft, comfortable cotton for a relaxing fit. Front-tie waist and leg slit for a chic, feminine look.`,
    price: `$55.00`
},{
    name:`Black Floral Maxi Dress`,
    image: `img/floraldress.jpg`,
    description: `Flowy every-day maxi dress made with medium-weight fabric. Wrapping, maxi skirt secured with internal ties and waist sash.`,
    price: `$30.00`
},{
    name:`Two Piece Off-White Set`,
    image: `img/coord.jpg`,
    description: `Style this together or separate! Vintage style halter top and front slit a-line skirt!`,
    price: `$45.00`
]

function renderProducts(arr) {
    const arrOfHtml = arr.map(s)
    const strOfHtml = arrOfHtml.join('\n');
    document.getElementById('product').innerHTML = strOfHtml; 

function getProductsAsHtmlString(product){
    return ``
}
document.getElementById('products').innerHTML+= getProductsAsHtmlString(product0)
document.getElementById('products').innerHTML+= getProductsAsHtmlString(product1)