//importando o catalogo para vizualizar na página todos os produtos
import { catalogo } from "./dados.js";

//importando a função de carregar produtos de forma dinamica  
import { carregarProdutos, handleClick} from "./funcoes.js";

//passando para uma variavel constante o caminho no html
 const todosOsProdutos = document.querySelector("#meu_catalogo")

//passando para a função carregar produtos os parametros necessários para mostrar os produtos
carregarProdutos(catalogo, todosOsProdutos)
handleClick()