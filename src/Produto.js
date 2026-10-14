import { Item } from "./Item.js"

export class Produto extends Item {
    constructor(id, nome, quantidade, data_validade, preco) {

        if (typeof preco !== "number") throw new Error("Preco não pode ser algo diferente de um numero")
        if (typeof data_validade === "number") throw new Error("A data de validade não pode ser numero!");


        super(id, nome, quantidade)
        this.data_validade = new Date(data_validade)
        this.preco = preco
    }
    calcSubTotal(quantidade){
        return quantidade * this.preco
    }
}
