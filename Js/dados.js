// criando uma variavel constante para armazenar o catalogo num lista[]
export const catalogo = [{
    //criando um id e um obj pra cada produto
    codProduto: 1,
    tituloProduto: "Martelo Unha Aço com cabo de madeira - 27mm",
    descricaoProduto: "O Martelo Unha Tramontina Aço Com Cabo De Madeira 27mm é uma ferramenta indispensável"+
    " para qualquer profissional ou entusiasta do bricolage. Com um cabo de madeira confortável e durável,"+
    " este martelo é perfeito para uma variedade de tarefas, desde pendurar quadros até construir móveis."+
    " A cabeça de aço de 630g garante um impacto poderoso, enquanto o estilo de unha curva permite remover"+
    " pregos com facilidade. Com um comprimento total de 33,5 cm, este martelo é compacto o suficiente para"+
    " ser facilmente armazenado, mas grande o suficiente para lidar com trabalhos mais pesados. Este é um martelo multifuncional,"+ 
    " ideal para carpinteiros e profissionais que precisam de uma ferramenta confiável e de alta qualidade. O Martelo Unha Tramontina"+
    " Aço Com Cabo De Madeira 27mm é a escolha perfeita para quem valoriza a eficiência e a durabilidade em suas ferramentas.",
    precoProduto: 40.00,
    imagemProduto: "../img/martelo.PNG",//passar o caminho que está no html
    categoriaProduto:"ferramentas_manuais",
    mostrarHome: true
},
{
    codProduto: 2,
    tituloProduto: "Kit Chaves de Fenda e Philips",
    descricaoProduto: "O Kit de chaves é composto dos seguintes itens:"+
    " 1 Chave de Fenda - 23 cm;"+
    " 1 Chave de Fenda - 17 cm;"+
    " 1 Chave de Fenda - 16 cm;"+
    " 1 Chave Philips - 23 cm;"+
    " 1 Chave Philips - 17 cm;"+
    "1 Chave Philips - 16 cm;"+
    "Todas possuem o material do cabo emborrachado;"+
    "1 Saquinho para as Chaves",
    precoProduto: 55.98,
    imagemProduto: "../img/kit_chaves.PNG",
    categoriaProduto:"ferramentas_manuais",
    mostrarHome: false
},
{
    codProduto: 3,
    tituloProduto: "Conjunto de alicates de 7 peças",
    descricaoProduto: "Alicate de corte: Projetado para segurar firmemente, comprimir e dobrar uma ampla gama de componentes de metal. Essa ferramenta manual pode ser usada para cortar parafusos, pregos e agarrar, torcer ou dobrar a maioria dos fios endurecidos."+
    "CONSTRUÇÃO: O alicate de corte lateral é feito de material resistente junto com pegadores emborrachados moldados. A estrutura de material de qualidade deste alicate de linha garante longevidade e um desempenho excepcional ao longo de sua vida útil."+
    "Aderência confortável: a ferramenta de alicates de alta alavancagem possui cabo antiderrapante e confortável para uso prolongado e é rebitado a quente para uma ação mais suave."+
    "Ferramenta multiuso: É ideal para uso por lineno, empreiteiros, comerciantes ou em casas e projetos 'faça você mesmo'. Alicate resistente pode ser usado para manipular fios ou componentes de metal que são difíceis de manusear, muito pequeno ou à mão para ser manipulado com os dedos"+
    "Especificações do produto: O pacote contém [7] alicates, incluindo 12,7 cm. Alicate de nariz com agulha, 16,5 cm. Alicate de linesman, 15,24 cm Alicate de junta deslizante, alicate de nariz de agulha 6-1/2, cortador diagonal de 16,5 cm, 20,3 cm. Alicate de junta ranhura e 20,32 cm. Alicate de homem de linha. Todas estas ferramentas apresentam 1,5 cm. Bordas de corte endurecidas.",
    precoProduto: 182.80,
    imagemProduto: "../img/kit_alicates.PNG",
    categoriaProduto:"ferramentas_manuais",
    mostrarHome: false
},
{
    codProduto: 4,
    tituloProduto: "Parafusadeira Furadeira com bateria, carregador e maleta",
    descricaoProduto: "A Parafusadeira e Furadeira a Bateria Bosch GSR 1000 Smart, 12V,"+ 
    " com Bateria de 1,5Ah embutida e carregador BIVOLT, garante máxima autonomia"+ 
    " com até 600 parafusamentos por carga de bateria. Além disso, é a ferramenta a"+
    " bateria de 12V com o melhor custo-benefício do mercado. Extretamente potente e" +
    " com 15Nm de torque, vem ainda com interruptor de velocidade variável para melhor"+ 
    " controle e qualidade dos seus trabalhos.",
    precoProduto: 289.90,
    imagemProduto: "../img/kit_parafusadeira.PNG",
    categoriaProduto:"ferramentas_eletricas",
    mostrarHome: true
}, 
{
    codProduto: 5,
    tituloProduto: "Lixadeira Orbital 220W 127V com 3 Lixas",
    descricaoProduto: "A Lixadeira Orbital de Palma Bosch GSS 140, com 220 W de potência,"+ 
    " é a junção de rendimento e conforto que cabe na palma da sua mão."+ 
    " Com uma base de alumínio e borracha resistente, é ideal para lixar madeira."+ 
    " Ainda conta com revestimento de alta qualidade que protege a ferramenta contra o pó."+
    " Possui clip prendedor de lixa para facilitar a colocação do acessório, e seu botão"+
    " liga-desliga de fácil acesso torna a utilização da GSS 140 muito mais fácil e confortável."+ 
    " A empunhadura ergonômica possibilita sua utilização em diversas posições, o que faz com que o trabalho seja menos cansativo.",
    precoProduto: 299.92,
    imagemProduto: "../img/kit_lixadeira.PNG",
    categoriaProduto:"ferramentas_eletricas",
    mostrarHome: true 
    
},
{
    codProduto: 6,
    tituloProduto: "Serra Tico-Tico Gst 75 E 710W 127V com 1 Lâmina",
    descricaoProduto: "A Serra Tico-Tico Bosch GST 75 é rápida e com alta capacidade de corte,"+ 
    " chegando a 75mm em madeira. A GST 75 E vem equipada com o sistema de encaixe"+
    " rápido SDS, que permite a troca de lâminas sem a necessidade de chave. Possui"+ 
    " também um eficiente soprador de ar para que a linha de corte esteja sempre visível. Na cor azul, com potência"+
    " de 710W, tensão de saída de 127V e pesando 2,5Kg, possuí 4 opções de avanço pendular para realizar desde os cortes mais suaves"+
    " aos mais agressivos, recomendada para uso industrial.",
    precoProduto: 598.89,
    imagemProduto: "../img/kit_serra_eletrica.PNG",
    categoriaProduto:"ferramentas_eletricas",
    mostrarHome: true
}, 
{
    codProduto: 7,
    tituloProduto: "Trena Laser Medidor de Distância",
    descricaoProduto: "A Trena a Laser Bosch GLM 50 C tem alcance de 50m, além de contar com bluetooth"+
    " para que você o conecte com celular: todas as funções que você precisa nas palmas"+ 
    " das suas mãos. Tem alta precisão e display colorido, além de proteção contra pó e"+ 
    " água e função Stake Out, que te dá a possibilidade de definir uma medida para que o" + 
    " medidor emita um aviso sonoro quando o valor determinado é alcançado, facilitando ainda"+ 
    " mais o serviço que está sendo realizado. Além de possuit memória das últimas medições"+
    " uma precisaõ absoluta sendo possível calcular áreas e volumes. Dimensões do item C x L x A: 10,6 x 4,5 x 2,4 cm.",
    precoProduto: 749.90,
    imagemProduto: "../img/kit_trena_laiser.PNG",
    categoriaProduto:"ferramentas_medicao",
    mostrarHome: true
}, 
{
    codProduto: 8,
    tituloProduto: "Paquímetro Digital 150mm - 6 pol.",
    descricaoProduto: "Paquímetro digital com dígitos grandes é fabricado em aço inoxidável temperado."+ 
    " Modelo quadrimensional, possui parafuso de fixação da medida e conversão milímetro - polegada."+ 
    " Conta com zeragem em qualquer ponto e tecla liga-desliga. - Especificações Técnicas: Dígitos"+ 
    " grandes de 11mm - 57% maiores que os normais; Resolução de 0,01mm/.0005; Capacidade: 150mm - 6; "+ 
    " Exatidão: aproximadamente 0,03mm; Fabricado em aço inoxidável temperado - Garantia: 1 ano.",
    precoProduto: 320.00,
    imagemProduto: "../img/kit_paquimetro.PNG", 
    categoriaProduto:"ferramentas_medicao",
    mostrarHome: true 
},
{
    codProduto: 9,
    tituloProduto: " Esquadro combinado Professeonal 305mm",
    descricaoProduto: "Esquadro Combinado Profissional vai trazer muitas soluções, precisão e praticidade"+ 
    " para os trabalhos do profissional. A linha de esquadros IRWIN inclui uma variedade"+ 
    " de ferramentas versáteis e precisas para as mais diversas aplicações. Seja qual for"+ 
    " a sua necessidade, a IRWIN oferece a ferramenta certa para facilitar o seu trabalho."+ 
    " Ferramenta essencial para profissionais marceneiros. Tem 305mm/12 Pol., um alto desempenho e precisão,"+ 
    " boa performance, seu corpo é feito em zinco fundido de alta durabilidade com graduação em baixo relevo,"+ 
    " possuí medidor de nível, riscador e lâmina de aço inoxidável.",
    precoProduto: 119.56,
    imagemProduto: "../img/kit_esquadro.PNG",
    categoriaProduto:"ferramentas_medicao",
    mostrarHome: false
} 
]

// //variável constante para armazenar a area do html que queremos manipular 
// const linha_produto = document.querySelector(".linha")
// console.log(linha_produto.innerHTML)

// //LOOP FOR PARA CARREGAR DINAMICAMENTE AS PÁGINAS de acordo com o index
// for (let i = 0; i < catalogo.length; i++){
    
//     let produto = `<div class="borda_produto">

//                         <div class="prod-img">
//                             <img src="${catalogo[i].imagemProduto}">
//                         </div>

//                         <div class="titulo_produto">
//                             <p>${catalogo[i].tituloProduto} </p>
//                         </div>

//                         <div class="preco">
//                             <button><a href="martelo.html">R$ ${catalogo[i].precoProduto}</a></button>
//                         </div>

//                     </div>`
//     linha_produto.innerHTML += produto
// }