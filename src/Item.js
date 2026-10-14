export class Item {
    constructor(id, nome, quantidade) {
        if (typeof id !== "number"|| id <= 0) throw new Error("Id não pode ser texto, nem número menor ou igual a zero!");
        if (typeof nome !== "string") throw new Error("Nome só pode receber string!");
        if (typeof quantidade !== "number" || quantidade <= 0) throw new Error("Quantidade não pode ser um número menor ou igual a zero!");
        
        this.id = id
        this.nome = nome
        this.quantidade = quantidade
    }
}