(function readyJS(win, doc) {
  "use strict";

  let quantidade;3
  

  // Objeto com os itens
  let itens = {
    products: [
      {
        id: 1,
        name: "Cachorro Quente",
        price: 4,
      },
      {
        id: 2,
        name: "X-Salada",
        price: 4.5,
      },
      {
        id: 3,
        name: "X-Bacon",
        price: 5,
      },
      {
        id: 4,
        name: "Torrada Simples",
        price: 2,
      },
      {
        id: 5,
        name: "Refrigerante",
        price: 1.5,
      },
    ],
  };

  //FUNCTIONS
  // Solicitando codigo do produto
  const ShowProducts = (itens) => {
    let size = Object.keys(itens.products).length;
    let arrProducts = [];
    let codigo;
    
    // Colocando objeto dentro de uma Array
    for(const [key, value] of Object.entries(itens)){
        for(let i = 0; i < size; i++){
            console.log()
            arrProducts.push([value[i].id, value[i].name, value[i].price])
        }
    }

    // Exibindo informacoes e coletando
    codigo = parseInt(prompt(`LISTA DE PRODUTOS!\n 
    Cod: ${arrProducts[0][0]} Produto: ${arrProducts[0][1]} Preco: ${arrProducts[0][2]}\n 
    Cod: ${arrProducts[1][0]} Produto: ${arrProducts[1][1]} Preco: ${arrProducts[1][2]}\n 
    Cod: ${arrProducts[2][0]} Produto: ${arrProducts[2][1]} Preco: ${arrProducts[2][2]}\n 
    Cod: ${arrProducts[3][0]} Produto: ${arrProducts[3][1]} Preco: ${arrProducts[3][2]}\n 
    Cod: ${arrProducts[4][0]} Produto: ${arrProducts[4][1]} Preco: ${arrProducts[4][2]}\n 
    `));
    
    quantidade = parseInt(prompt("Digite a quantidade comprada"));

    return codigo;
  } 


  // Buscando o produto
  const SearchProduct = (itens, codigo) => {
    let size = Object.keys(itens.products).length;
    let result = 0;

    for (const [key, value] of Object.entries(itens)) {
      for (let i = 0; i < size; i++) {
        if (value[i].id == codigo) {
          result = value[i];
        }
      }
    }
    return result;
  };

  // Calculando valor produto
  const CalcValueTotal = (item, quantidade) => {
    let total = item.price * quantidade;
    return total;
  };

  // Exibindo o valor do produto
  const ShowTotal = (total) => {
    alert(`Total: R$ ${total.toFixed(2)}`);
  };

  // CHAMANDO AS FUNCTIONS
  // Mostrando Produtos e coletando codigo
  let codigo = ShowProducts(itens);

  // Procurando o Produto
  let item = SearchProduct(itens, codigo);

  // Calculando Valor Total da Compra
  let total = CalcValueTotal(item, quantidade);

  // Exibindo Valor total da compra
  ShowTotal(total);

})(window, document);
