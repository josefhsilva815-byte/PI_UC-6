import { Item } from "./Item.js"

export class Produto extends Item {
    constructor(id, nome, quantidade, data_validade, preco) {
        super(id, nome, quantidade)
        this.data_validade = data_validade
        this.preco = preco
    }
    calcSubTotal(quantidade, preco){
        return quantidade * preco
    }
}

