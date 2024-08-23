/* barra de navegação */
const iconBar = document.getElementById('icon-bar')
const baraNav = document.getElementsByClassName('bara-nav')[0]

iconBar.addEventListener('click', showNavBar)

function showNavBar(){
    baraNav.classList.toggle('active')
}

const carrinho = document.getElementsByClassName('containerCarrinho')[0];
const carrinhoIcons = document.querySelectorAll('#icon-cart');

carrinhoIcons.forEach(icon => {
    icon.addEventListener('click', mostrarCarrinho);
});

function mostrarCarrinho() {
    carrinho.classList.toggle('active');
}

const removerCart = document.getElementById('removerCart');

removerCart.addEventListener('click', removerCarrinho);

function removerCarrinho() {
    carrinho.classList.toggle('active');
}
/* barra de navegação */

/* slider produtos */
const products = document.querySelectorAll(".slider .product")
let counter = 0

function left(){

    if(counter === 0){
        counter = products.length / 3 - 1

    }else{
        counter--
    }

    scroll()
}

function right(){

    if(counter == products.length / 3 - 1){
        counter = 0
        
    }else{
        counter++
    }

    scroll()
}

function scroll(){
    products.forEach(function(item){
        item.style.transform = `translateX(-${counter * 1250}px)`
    })
}
/* slider produtos */

/* Carrinho */
const cart = {
    name: [],
    price: [],
    image: [],
    quantity: []
};


const totalCarinho = document.querySelector('.totalCarinho span')

let totalPrice = 0

const addToCart = (event) => {
    const img = event.target.parentElement.parentElement.querySelector('.image img')
    const nome = event.target.parentElement.querySelector('.title').textContent;
    const preco = event.target.parentElement.querySelector('.price').textContent;

    for(let i = 0; i < cart.name.length; i++){
        if(cart.name[i] === nome){
            cart.quantity[i] += 1

            const quantity = document.querySelectorAll('.quantidadeCarrinho')
            quantity[i].value = Number(cart.quantity[i]);

            updateTotal()
            return
        }
}

    cart.name.push(nome)
    cart.price.push(preco)
    cart.image.push(img.src)
    cart.quantity.push(1)

    let newCartProduct = document.createElement('div')
    newCartProduct.classList.add('itensCarrinho')

    newCartProduct.innerHTML = 
    `
                        <div class="containerCarrinhoImg">
                            <img src="${cart.image[cart.image.length - 1]}" class="carrinhoImg">
                        </div>
                        <div class="containerCarrinhotxt">
                            <div class="nomeCarrinho">${cart.name[cart.name.length - 1]}</div>
                            <div class="precoCarrinho">R$: <span class="precoCarrinho">${cart.price[cart.name.length - 1]} </span>
                                <input type="number" value="${cart.quantity[cart.quantity.length - 1]}" min="1" max="10" class="quantidadeCarrinho">
                            </div>
                        </div>
                        <div class="removerProduto">
                            <i class="fa-solid fa-delete-left" id="removerItemCarrinho"></i>
                        </div>
    `

    const produtosCarrinho = document.querySelector('.produtosCarrinho')
    produtosCarrinho.append(newCartProduct)

    const delet = document.querySelectorAll('.fa-delete-left')
    
    delet.forEach(deletBtn => {
        deletBtn.addEventListener('click', deletToCart)
    });

    const quantity = document.querySelectorAll('.quantidadeCarrinho')

    quantity.forEach(quantityBtn =>{
        quantityBtn.addEventListener('change', updateQuantity)
    })

    updateTotal()
}

const deletToCart = (event) => {
    event.target.parentElement.parentElement.remove()
    const nomeProdutoDelet = event.target.parentElement.parentElement.querySelector('.nomeCarrinho').innerText

    for(let i = 0; i < cart.name.length; i++){
        if(cart.name[i] === nomeProdutoDelet){
            const indexDeletProdutocart = cart.name.indexOf(nomeProdutoDelet)

            cart.name.splice(indexDeletProdutocart, 1);
            cart.price.splice(indexDeletProdutocart, 1);
            cart.image.splice(indexDeletProdutocart, 1);
            cart.quantity.splice(indexDeletProdutocart, 1);
        }
    }

    updateTotal()
}

const updateQuantity = (event) =>{
    const quantityValue = event.target.value
    const nameProduct = event.target.parentElement.parentElement.querySelector('.nomeCarrinho').innerHTML

    for(let i = 0; i < cart.name.length; i++){
        if(cart.name[i] === nameProduct){
            const indexQuantity = cart.name.indexOf(nameProduct)
            cart.quantity[indexQuantity] = quantityValue
        }
    }

    updateTotal()
}

const updateTotal = () => {
    totalPrice = 0
    for(let i = 0; i < cart.price.length; i++){
        cart.price[i] = cart.price[i].replace(",",".")
        totalPrice += +cart.price[i] * cart.quantity[i]
    }
    totalPrice = totalPrice.toFixed(2)
    totalPrice = totalPrice.replace(".",",")
    totalCarinho.innerHTML = totalPrice
}

const btnCart = document.querySelectorAll('.btnCart');

btnCart.forEach(button => 
    button.addEventListener('click', addToCart)
)
/* Carrinho */