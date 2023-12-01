//importando o catalogo para vizualizar na página home os produtos
import { catalogo } from "./dados.js";

//importando a função de carregar produtos 
import { carregarProdutos, handleClick } from "./funcoes.js";

//gerando um filtro para mostrar apenas os produtos de acordo com sua categoria
const listaManuais = catalogo.filter(item => item.categoriaProduto === "ferramentas_manuais")
//variável constante com o caminho no html
const manuais = document.querySelector("#ferramentas_manuais")

//gerando um filtro para mostrar apenas os produtos de acordo com sua categoria
const listaEletricas = catalogo.filter(item => item.categoriaProduto === "ferramentas_eletricas")
//variável constante com o caminho no html
const eletricas = document.querySelector("#ferramentas_eletricas")

//gerando um filtro para mostrar apenas os produtos de acordo com sua categoria
const listaMedicao = catalogo.filter(item => item.categoriaProduto === "ferramentas_medicao")
//variável constante com o caminho no html
const medicao = document.querySelector("#ferramentas_medicao")


//passando para a função carregar produtos os parametros necessários para mostrar a categoria de ferramentas manuais
carregarProdutos(listaManuais, manuais)

//passando para a função carregar produtos os parametros necessários para mostrar a categoria de ferramentas eletricas
carregarProdutos(listaEletricas, eletricas)

//passando para a função carregar produtos os parametros necessários para mostrar a categoria de ferramentas medicao
carregarProdutos(listaMedicao, medicao)

handleClick()