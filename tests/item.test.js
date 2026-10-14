import { Item } from "../src/Item.js";

describe("Teste da classe Item", () => {
    test("Verificar atributos da instância", () => {
        const item = new Item(1, "Café", 1000);

        expect(Object.keys(item)).toEqual(["id", "nome", "quantidade"]);
        expect(typeof item.id).toBe("number");
        expect(typeof item.nome).toBe("string");
        expect(typeof item.quantidade).toBe("number");
    })
})

describe("Deve lançar erro ao receber valores inválidos", () => {
    test("O ID deve ser um número positivo maior que zero", () => {
        expect(new Item(1, "Café", 1000)).toEqual({
            id: 1,
            nome: "Café",
            quantidade: 1000
        });

        expect(() => {
            new Item(
                "1",
                "Café",
                1000
            )
        }).toThrow(
            'Id não pode ser texto, nem número menor ou igual a zero!'
        );

        expect(() => {
            new Item(
                -1,
                "Café",
                1000
            )
        }).toThrow(
            'Id não pode ser texto, nem número menor ou igual a zero!'
        );
    })
    test("O nome deve ser texto", () => {
        expect(new Item(2, "Bolo", 20)).toEqual({
            id: 2,
            nome: "Bolo",
            quantidade: 20
        });
        expect(() => {
            new Item(
                2,
                9999,
                20
            )
        }).toThrow(
            'Nome só pode receber string!'
        );
    })
    test("A quantidade deve ser um número positivo maior que zero", () => {
        expect(new Item(3, "Torta", 30)).toEqual({
            id: 3,
            nome: "Torta",
            quantidade: 30
        });
        expect(() => {
            new Item(
                3,
                "Torta",
                0
            )
        }).toThrow(
            'Quantidade não pode ser um número menor ou igual a zero!'
        );
    })
})