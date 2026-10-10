

describe("Teste da classe Equipamento", () => {


    test("Verificar atributos da instância", () => {

        const equipamento = new Equipamento(1, "Marreta", 1000, false)

        expect(typeof Equipamento.prototype.utilizarEquipamento).toBe("function");
        expect(typeof Equipamento.prototype.devolverEquipamento).toBe("function");
        expect(typeof equipamento.em_uso).toBe("boolean")
        expect(Object.keys(equipamento)).toEqual(["id", "nome", "quantidade", "em_uso", "utilizarEquipamento", "devolverEquipamento"]);

    })

    test("verificando metodo utilizarEquipamento", () => {

        const equipamento = new Equipamento(1, "Marreta", 1000, false)
        equipamento.utilizarEquipamento()

        expect(equipamento.em_uso).toBe(true) 
        expect(equipamento.utilizarEquipamento()).toThrow("Equipamento em uso");

    })

    test("verificando metodo devolverEquipamento", () => {
        const equipamento = new Equipamento(1, "Marreta", 1000, true)

        equipamento.devolverEquipamento()

        expect(equipamento.em_uso).toBe(false)
        expect(equipamento.em_uso).not.toBe(true)
        expect(equipamento.devolverEquipamento()).toThrow("Equipamento não esta em uso");
        
    })
})