// Objetos 
let itens: object = {
    products: [
        {
            id: 1,
            name: "cachorro_quente",
            price: 4
        },
        {
            id: 2,
            name: "X-Salada",
            price: 4.5
        },
        {
            id: 3,
            name: "X-Bacon",
            price: 5
        },
        {
            id: 4,
            name: "Torrada Simples",
            price: 2
        },
        {
            id: 5,
            name: "Refrigerante",
            price: 1.5
        },
    ]
};

let codigo: number
let quantidade: number

//codigo = parseInt(prompt("Digite o codigo do Produto")!);
//quantidade = parseInt(prompt("Digite a quantidade comprada")!)

//FUNCTIONS
// Buscando o produto
const SearchProduct = (itens: object, codigo: number) => {

    let result : number = 0;
    let tamanho : number = 

    for (const [key, value] of Object.entries(itens)) {

        console.log(value[1].id)

        for(let i = 0; i < ; i++){
            if(value[i].id == codigo){
                result = value;
            }
        }
    }

    console.log(result);

}

SearchProduct(itens, 3);