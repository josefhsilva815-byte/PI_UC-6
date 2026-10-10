

describe("Testes da classe ", () => {


    test("expõe o método público sem expor o estado privado", () => {
        const carrinho = new Carrinho();

        expect(typeof Carrinho.prototype.adicionarProduto).toBe("function");
        expect(Object.hasOwn(Carrinho.prototype, "adicionarProduto")).toBe(true);
        expect(Reflect.ownKeys(carrinho)).toEqual([]);
        expect(Object.hasOwn(carrinho, "itens")).toBe(false);
        expect(Object.keys(carrinho)).toEqual([]);
    });
})