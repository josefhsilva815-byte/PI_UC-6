import { Estoque } from "../src/Estoque.js";
import { Equipamento } from "../src/Equipamento.js";
import { Produto } from "../src/Produto.js";

describe("Testes da classe ", () => {

    test("expõe o método público sem expor o estado privado", () => {
        const estoque = new Estoque(["EQP", "PDT"]);

        expect(typeof Estoque.prototype.cadastrarltem).toBe("function");           //
        expect(typeof Estoque.prototype.consultarEstoque).toBe("function");        //
        expect(typeof Estoque.prototype.buscarltemPorID).toBe("function");         //
        expect(typeof Estoque.prototype.buscarltemPorNome).toBe("function");       //
        expect(typeof Estoque.prototype.gerarRelatorio).toBe("function");          //
        expect(typeof Estoque.prototype.filtrarProdutosVencidos).toBe("function"); //
        expect(typeof Estoque.prototype.atualizarProduto).toBe("function");        //
        expect(typeof Estoque.prototype.listarProdutos).toBe("function");          //
        expect(typeof Estoque.prototype.removerltem).toBe("function");             //

        expect(Reflect.ownKeys(estoque)).toEqual([]);
        expect(Object.hasOwn(estoque, "itens")).toBe(false);
        expect(Object.keys(estoque)).toEqual([]);
    });

    test("Deve ser possivel CADASTRAR itens no estoque", () => {
        const estoque = new Estoque(["EQP", "PDT"]);

        const equipamento = new Equipamento(1, "Marreta", 1000, false);
        estoque.cadastrarltem("EQP", equipamento)
        expect(estoque.buscarltemPorID("EQP-001")).toEqual(equipamento);
    });

    test("Deve ser possível CONSULTAR O ESTOQUE", () => {
        const estoque = new Estoque(["EQP", "PDT"]);

        const item1 = new Equipamento(1, "Martelo", 1000, false);
        const item2 = new Equipamento(2, "Marreta", 1000, false);
        const item3 = new Produto(3, "Café", 1000, "12/01/2030", 100);

        estoque.cadastrarltem("EQP", item1);
        estoque.cadastrarltem("EQP", item2);
        estoque.cadastrarltem("PDT", item3);

        const resultado = estoque.consultarEstoque();

        expect(resultado).toEqual([
            ['EQP-001', item1],
            ['EQP-002', item2],
            ['PDT-003', item3]
        ]);
    })

    test("Deve ser possivel buscar um item específico pelo ID no estoque", () => {
        const estoque = new Estoque(["EQP", "PDT"]);

        estoque.cadastrarltem("PDT", { ...new Produto(1, "Café", 1000, "12/01/2030", 100) });
        expect(estoque.buscarltemPorID("PDT-001")).toEqual({
            id: 1,
            nome: "Café",
            quantidade: 1000,
            data_validade: new Date("12/01/2030").toISOString().split("T")[0],
            preco: 100
        });
    });

    test("Deve ser possivel buscar um item específico pelo NOME no estoque", () => {
        const estoque = new Estoque(["EQP", "PDT"]);
        estoque.cadastrarltem("EQP", { id: 2, nome: "Marreta", quantidade: 1000, em_uso: false });

        const item = estoque.buscarltemPorNome("Marreta");

        expect(item).toEqual([{
            id: 2, nome: "Marreta", quantidade: 1000, em_uso: false
        }]);
    });

    test('Deve ser possivel GERAR RELATÓRIO de todo estoque, no formato < Nome | Quantidade | Em Uso | Preço | Data de Validade >', () => {
        const estoque = new Estoque(["EQP", "PDT"]);

        const item1 = new Equipamento(1, "Marreta", 1000, false);
        const item2 = new Produto(2, "Café", 1000, "12/01/2030", 100);

        estoque.cadastrarltem("EQP", item1)
        estoque.cadastrarltem("PDT", item2)


        expect(estoque.gerarRelatorio()).toEqual([
            "Nome | Quantidade | Em Uso | Preço | Data de Validade",
            `${item1.nome} | ${item1.quantidade} | ${item1.em_uso} | ${item1.preco || '-'} | ${item1.data_validade || '-'}`,
            `${item2.nome} | ${item2.quantidade} | ${item2.em_uso || '-'} | ${item2.preco} | ${item2.data_validade}`
        ].join("\n"));
    });

    test("Deve ser possível FILTRAR OS PRODUTOS VENCIDOS do estoque", () => {
        const estoque = new Estoque(["EQP", "PDT"]);

        const item1 = new Equipamento(1, "Chave", 1000, false);
        const item2 = new Equipamento(2, "Martelo", 33, false);
        const item3 = new Equipamento(3, "Pá", 4400, false);
        const item4 = new Equipamento(4, "Panela", 222, false);

        const item5 = new Produto(5, "Café", 1000, "11/01/2020", 100);
        const item6 = new Produto(6, "Açúcar", 1000, "10/01/2030", 100);
        const item7 = new Produto(7, "Leite", 1000, "02/01/2020", 100);
        const item8 = new Produto(8, "Chocolate", 1000, "05/01/2030", 100);

        estoque.cadastrarltem("EQP", item1)
        estoque.cadastrarltem("PDT", item2)
        estoque.cadastrarltem("PDT", item3)
        estoque.cadastrarltem("PDT", item4)
        estoque.cadastrarltem("PDT", item5)
        estoque.cadastrarltem("PDT", item6)
        estoque.cadastrarltem("PDT", item7)
        estoque.cadastrarltem("PDT", item8)

        console.log(estoque.filtrarProdutosVencidos())
        expect(estoque.filtrarProdutosVencidos().vencidos).toEqual([item5, item7]);
        expect(estoque.filtrarProdutosVencidos().na_validade).toEqual([item6, item8]);

    });

    test("Deve ser possível ATUALIZAR UM PRODUTO pelo ID", () => {
        const estoque = new Estoque(["EQP", "PDT"]);

    });

    test("Deve ser possível LISTAR OS PRODUTOS no estoque", () => {
        const estoque = new Estoque(["EQP", "PDT"]);

    });

    test("Deve ser possível REMOVER um item do estoque", () => {
        const estoque = new Estoque(["EQP", "PDT"]);

    });
})

