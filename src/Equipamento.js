import { Item } from "./Item.js";

export class Equipamento extends Item {
    constructor(id, nome, quantidade, em_uso){
        super(id, nome, quantidade)
        this.em_uso = em_uso
    }
    
    utilizarEquipamento(){
        if (this.em_uso) {
            throw new Error("Equipamento em uso");
        }
        this.em_uso = true
    }

    devolverEquipamento(){
        if (!this.em_uso) {
            throw new Error("Equipamento não esta em uso");
        }
        this.em_uso = false
    }
}