import { Equipamento } from "../src/Equipamento.js";

describe("Teste da classe Equipamento", () => {
    test("Verificar atributos da instância", () => {
        const equipamento = new Equipamento(1, "Marreta", 1000, false)

        expect(typeof Equipamento.prototype.utilizarEquipamento).toBe("function");
        expect(typeof Equipamento.prototype.devolverEquipamento).toBe("function");
        expect(Object.hasOwn(equipamento, "id")).toBe(true)
        expect(Object.hasOwn(equipamento, "nome")).toBe(true)
        expect(Object.hasOwn(equipamento, "quantidade")).toBe(true)
        expect(Object.hasOwn(equipamento, "em_uso")).toBe(true)
        expect(typeof equipamento.quantidade).toBe("number")
        expect(typeof equipamento.em_uso).toBe("boolean")
    })

    test("verificando metodo utilizarEquipamento", () => {
        const equipamento = new Equipamento(1, "Marreta", 1000, false);
        equipamento.utilizarEquipamento();

        expect(equipamento.em_uso).toBe(true)
        expect(() => equipamento.utilizarEquipamento()).toThrow(
            'Equipamento em uso'
        );

    })

    test("verificando metodo devolverEquipamento", () => {
        const equipamento = new Equipamento(1, "Marreta", 1000, true);
        equipamento.devolverEquipamento();

        expect(equipamento.em_uso).toBe(false);
        expect(equipamento.em_uso).not.toBe(true);
        expect(() => equipamento.devolverEquipamento()).toThrow(
            'Equipamento não esta em uso'
        );
    })
})