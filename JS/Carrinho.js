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

/* CARRRINHO */

if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready) // verificar se a pagina foi carregada corretamente
} else{
    ready() // todos os ouvidores de evento dentro do ready (addEventListener)
}

var totalAmount = "0,00"

function ready(){
    const removeProductsButtons = document.querySelectorAll('#removerItemCarrinho')
    for(var i = 0; i < removeProductsButtons.length; i++){ // aqui e o looping com o for para adicionar a funçao em todos
        removeProductsButtons[i].addEventListener("click", removeProduct) //Adiciona a  funçao nos btn <i> de remover o produto
    }

    const quantityInputs = document.getElementsByClassName("quantidadeCarrinho")
    for (var i = 0; i < quantityInputs.length; i++){
        quantityInputs[i].addEventListener("change", updateTotal)
    }

    const addToCartButtons = document.querySelectorAll('#addCart')
    for(var i = 0; i < addToCartButtons.length; i++){
        addToCartButtons[i].addEventListener("click", addProductToCart)
    }

    const purchaseButton = document.querySelectorAll('.btnCompra')[0]
    purchaseButton.addEventListener("click", makePurchase)
}

function addProductToCart(event){
    const button = event.target
    const nomeProduct = button.parentElement.getElementsByClassName("nomeProduto")[0].innerText
    const precoProduct = button.parentElement.getElementsByClassName('precoProduto')[0].innerText.replace("R$:", "")
    const imgProduct = button.parentElement.parentElement.getElementsByClassName("img-ProdutoAdd")[0].src

    const productsCartName = document.getElementsByClassName("nomeCarrinho")
    for (var i = 0; i < productsCartName.length; i++){
        if (productsCartName[i].innerText === nomeProduct){
            productsCartName[i].parentElement.querySelectorAll('.precoCarrinho .quantidadeCarrinho')[0].value++
            return
        }
    }

    let newCartProduct = document.createElement("div")
    newCartProduct.classList.add("itensCarrinho")

    newCartProduct.innerHTML = 
    `
                    <div class="containerCarrinhoImg">
                        <img src="${imgProduct}" class="carrinhoImg">
                    </div>
                    <div class="containerCarrinhotxt">
                        <div class="nomeCarrinho">
                            ${nomeProduct}
                        </div>
                        <div class="precoCarrinho">
                            R$: <span>${precoProduct} </span>
                            <input type="number" value="1" min="1" max="10" class="quantidadeCarrinho">
                        </div>
                    </div>
                    <div class="removerProduto">
                        <i class="fa-solid fa-delete-left" id="removerItemCarrinho"></i>
                    </div>
    `

    const produtosCarrinho = document.querySelector(".produtosCarrinho")
    produtosCarrinho.append(newCartProduct)

    updateTotal()
    newCartProduct.getElementsByClassName("quantidadeCarrinho")[0].addEventListener("change", updateTotal)
    newCartProduct.querySelectorAll('#removerItemCarrinho')[0].addEventListener("click", removeProduct)
}

function removeProduct(event){
    event.target.parentElement.parentElement.remove() // event.target mostra o <i> que e o btn o parentElement e para chegar no itensCarrinho para remover
    updateTotal()
}

function updateTotal(){
totalAmount = 0

const cartProducts = document.querySelectorAll('.precoCarrinho')
for(var i = 0; i < cartProducts.length; i++){ // aqui e o looping com o for para criar uma variavel para todos os produtos
    const productPrice = cartProducts[i].querySelectorAll('.precoCarrinho span')[0].innerText.replace("R$", "").replace(",",".")  // replace subistitui a palavra por outra
    const productQuantity = cartProducts[i].getElementsByClassName("quantidadeCarrinho")[0].value // pega o valor do input para saber a quantidade de produtos

    totalAmount += productPrice * productQuantity // faz a conta do valor do produto vezes (X) a quantidade dele

}

totalAmount = totalAmount.toFixed(2)   //Aredonda o numero para duas casas decimais
totalAmount = totalAmount.replace(".",",") // replace subistitui a palavra por outra
document.querySelector(".totalCarinho span").innerText = " R$ " + totalAmount // escrevendo o totalAmount que e a conta acima no html
}

function makePurchase(){
    if(totalAmount === "0,00"){
        alert("Seu carrinho esta vazio")
    } else{
        alert(
        ` 
        OBIGADO PELA SUA COMPRA
        VALOR DA COMPRA R$: ${totalAmount}
        `)
    }

    document.querySelector(".produtosCarrinho").innerHTML =  ""
    updateTotal()
}

/* CARRRINHO */

