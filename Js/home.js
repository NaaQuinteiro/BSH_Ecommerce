//importando o catalogo para vizualizar na página home os produtos
import { catalogo } from "./dados.js";

//importando a função de carregar produtos 
import { carregarProdutos, handleClick } from "./funcoes.js";

//gerando um filtro para mostrar apenas os produtos destaques na home
const listaDestaques = catalogo.filter(item => item.mostrarHome == true)
//passando para uma variavel constante o caminho no html
const destaques = document.querySelector("#destaques")

//passando para a função carregar produtos os parametros necessários para mostrar os destaques apenas
carregarProdutos(listaDestaques, destaques)

handleClick()
