import { Produto } from "../src/Produto.js";

describe("Teste da classe Produtos", () => {
    test("Verificar atributos da instância", () => {
        const produto = new Produto(1, "Cafe", 1000, "12/05/2030", 40)

        expect(typeof Produto.prototype.calcSubTotal).toBe("function");
        expect(Object.hasOwn(produto, "id")).toBe(true)
        expect(Object.hasOwn(produto, "nome")).toBe(true)
        expect(Object.hasOwn(produto, "quantidade")).toBe(true)
        expect(Object.hasOwn(produto, "data_validade")).toBe(true)
        expect(Object.hasOwn(produto, "preco")).toBe(true)
        expect(typeof produto.quantidade).toBe("number")
        expect(typeof produto.preco).toBe("number")
    })

    test("deve mandar erro se os valores recebidos forem invalidos", () => {

        expect(() => {
            new Produto(1, "cafe", 1000, "12/05/2030", "quarenta")
        }).toThrow(
            "Preco não pode ser algo diferente de um numero"
        );

        expect(() => {
            new Produto(1, "cafe", 1000, 12052009, 40)
        }).toThrow(
            "A data de validade não pode ser numero!"
        );
    })

    test("verificando metodo calcSubtotal", () => {
        const produto = new Produto(1, "Cafe", 1000, "12/05/2030", 40);

        expect(produto.calcSubTotal(1000)).toBe(40000)
        expect(produto.calcSubTotal()).not.toBe(4000)
    })
})