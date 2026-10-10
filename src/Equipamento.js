import { Item } from "./Item.js";

export class Equipamento extends Item {
    constructor(id, nome, quantidade, em_uso){
        super(id, nome, quantidade)
        this.em_uso = em_uso
    }
    utilizarEquipamento(em_uso){
        if (em_uso) {
            throw new Error("Equipamento em uso");
        }
        this.em_uso = true
    }

    devolverEquipamento(em_uso){
        if (!em_uso) {
            throw new Error("Equipamento não esta em uso");
        }
        this.em_uso = false
    }
}