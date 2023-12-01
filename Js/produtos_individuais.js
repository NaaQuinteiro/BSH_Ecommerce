import { catalogo } from "./dados.js";
import { findProduct, carregarProduto, addItemCarrinho } from "./funcoes.js";


// criando a lista que armazenara a lista dos pedidos que ficam no carrinho 
let carrinhoCompras = JSON.parse(localStorage.getItem('carrinho'))

//quando o carrinho n existe ainda (primeira vez add algo) é necessário criá-lo 
if(carrinhoCompras == null){
    carrinhoCompras = []
}



let produto = localStorage.getItem("prodID")
console.log(produto)

let item = findProduct(catalogo, produto)

carregarProduto(item)
let qtd = parseInt(document.querySelector("div.quantidade span").innerText);
console.log(qtd);

let botaoPlus = document.querySelector("div.mais i")
let botaoMinus = document.querySelector("div.menos i")

let spanQuantidade = document.querySelector("div.quantidade span")

botaoPlus.addEventListener('click', () => {
    qtd += 1;
    spanQuantidade.innerText = qtd;
} )

botaoMinus.addEventListener('click', () => {
    if (qtd > 1){
        qtd -= 1;
    }
        
    spanQuantidade.innerText = qtd;
} )





addItemCarrinho(item, carrinhoCompras)