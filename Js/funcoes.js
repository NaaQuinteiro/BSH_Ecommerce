//todas as funções que serão usadas 

//Função para mostrar os produtos que recebe 2 parâmetros, uma lista de produtos 
//e o local onde o html será interizado 
export function carregarProdutos(listaProdutos, localHtml){
     //LOOP FOR PARA CARREGAR DINAMICAMENTE AS PÁGINAS de acordo com os intens na lista catálogo
     listaProdutos.forEach(produto => {
        let produto_html = `<div class="borda_produto" id=${produto.codProduto}>

                        <div class="prod-img">
                            <img src="${produto.imagemProduto}" id=${produto.codProduto}>
                        </div>

                        <div class="titulo_produto">
                            <p>${produto.tituloProduto} </p>
                        </div>

                        <div class="preco">
                            <button><a href="produtos_unicos.html" id=${produto.codProduto}>R$ ${produto.precoProduto}</a></button>
                        </div>

                    </div>`
    localHtml.innerHTML += produto_html
     });
}

//fução que armazena o elemento clicado 
export function handleClick(){
    let produtos = document.querySelectorAll("div.borda_produto")
    console.log(produtos)

    produtos.forEach(produto => produto.addEventListener('click', (evento)=>{
        //o target permite visualizar qual elemento foi clicado
        //guardando na variável o código do produto clicado

        let idProduto = evento.target.id
        localStorage.setItem('prodID', idProduto)
    }))
}

//O find vai procurar o produto 
export function findProduct(produtos, prodID){
    let produto = produtos.find(prod => prod.codProduto == prodID)
    console.log(produto)
    return produto
}

//função para mostrar a página do produto escolhido
export function carregarProduto(item){
    console.log(item)
    const container = document.querySelector("#product_container")
    let html = `<div class="img-produto">
                <img src="${item.imagemProduto}" alt="">
            </div>

            <div class="text-produto">
                <h3>${item.tituloProduto}</h3>
                <div class="stars">
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                </div>
                <div class="options">
                    <p>R$ ${item.precoProduto}</p>
                    <div class="quantidade">
                        <div class="menos">
                            <i class="fa-solid fa-minus"></i>
                        </div>
                        <span>1</span>
                        <div class="mais">
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>
                </div>
                
                    <div class="adicionar">
                        <button>Adicionar 
                            <i class="fa-solid fa-cart-shopping"></i>
                        </button>
                    </div>
            </div>
        

            <div class="container-descricao">
            <div class="descricao">
                <h4>DESCRIÇÃO DO PRODUTO</h4>
            </div>
            <div class="text-descricao">
                <p>${item.descricaoProduto}</p>
            </div>`
container.innerHTML = html
}




//criando a função responsável por add os produtos no carrinho de compras 
export function addItemCarrinho (item, carrinhoCompras){

    //selecionando o botão da página no html
    let botaoAdd = document.querySelector('div.adicionar')
    console.log(botaoAdd)

    //o add eventlistener diz que quando ocorrer um click ele deve pegar o evento
    botaoAdd.addEventListener('click', () => {
    //variável pra pegar a quantidade selecionada, o parserInt permite transformar o valor em inteiro 
    let qtd = parseInt(document.querySelector("div.quantidade span").innerText);
    console.log(qtd);

    // let botaoPlus = document.querySelector("div.mais i")
    // let botaoMinus = document.querySelector("div.menos i")

    // let spanQuantidade = document.querySelector("div.quantidade span")

    // botaoPlus.addEventListener('click', () => {
    //     qtd += 1;
    //     spanQuantidade.innerText = qtd;
        
    // } )

    // botaoMinus.addEventListener('click', () => {
    // if (qtd > 1){
    //     qtd -= 1;
    // }
    //     spanQuantidade.innerText = qtd;
    // } )
    
    //variável para juntar a quantidade de produtos com o produto usando um objeto 
    let newItem = {...item, qtd}
    
    carrinhoCompras.push(newItem)
    alert("Item adicionado ao carrinho!")

    //salvando a informação no local sttorege, o stringfy converte pro formato de jason
    //o local storege é a mempria do computador e sempre que queremos guardaqr arrays ou objetos lá, é necessários convertelos para um JSON
    localStorage.setItem('carrinho', JSON.stringify(carrinhoCompras))
    console.log(carrinhoCompras)
    })
}
