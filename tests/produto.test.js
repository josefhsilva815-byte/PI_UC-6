

describe("Teste da classe Produtos", () => {


    test("Verificar atributos da instância", () => {

        const produto = new Produto(1, "Cafe", 1000, "12/05/2030", 40)

        expect(typeof Produto.prototype.calcSubtotal).toBe("function");
        expect(Object.keys(produto)).toEqual(["id","nome","quantidade","data_validade","preco","calcSubtotal"]);

    })

    test("verificando metodo calcSubtotal", () =>{
        const produto = new Produto(1, "Cafe", 1000, "12/05/2030", 40)

        expect(produto.calcSubtotal()).toBe(40000)
        expect(produto.calcSubtotal()).not.toBe(4000)
    })
})