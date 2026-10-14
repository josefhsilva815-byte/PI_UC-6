import { Estoque } from "../src/Estoque.js";
import { Equipamento } from "../src/Equipamento.js";
import { Produto } from "../src/Produto.js";

describe("Testes da classe ", () => {
    const estoque = new Estoque(["EQP", "PDT"]);
    test("expõe o método público sem expor o estado privado", () => {

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
        const equipamento = new Equipamento(1, "Marreta", 1000, false);
        estoque.cadastrarltem("EQP", equipamento)
        expect(estoque.buscarltemPorID("EQP-001")).toEqual(equipamento);
    });

    test("Deve ser possivel buscar um item específico pelo ID no estoque", () => {
        estoque.cadastrarltem("PDT-001", { ...new Produto(1, "Café", 1000, "12/01/2030", 100) });
        expect(estoque.buscarltemPorID("PDT-001")).toEqual({
            id: 1,
            nome: "Café",
            quantidade: 1000,
            data_validade: new Date("12/01/2030"),
            preco: 100
        });
    });

    test("Deve ser possivel buscar um item específico pelo NOME no estoque", () => {
        estoque.cadastrarltem("EQP", { id: 2, nome: "Marreta", quantidade: 1000, em_uso: false });
        const item = estoque.buscarltemPorNome("Marreta");


        expect(item).toEqual({ id: 2, nome: "Marreta", quantidade: 1000, em_uso: false });
    });

    test('Deve ser possivel GERAR RELATÓRIO de todo estoque, no formato < Nome | Quantidade | Em Uso | Preço | Data de Validade >', () => {
        const item1 = { id: 1, nome: "Martelo", quantidade: 1000, em_uso: false };
        const item2 = { id: 2, nome: "Marreta", quantidade: 1000, em_uso: false };
        const item3 = { id: 3, nome: "Café", quantidade: 1000, data_validade: new Date("12/01/2030").toISOString().split("T")[0], preco: 100 };

        estoque.cadastrarltem("EQP", item1);
        estoque.cadastrarltem("EQP", item2);
        estoque.cadastrarltem("PDT", item3);

        const resultado = estoque.consultarEstoque();

        expect(resultado).toEqual([
            ['EQP-001', item1],
            ['EQP-002', item2],
            ['PDT-003', item3]
        ])
    });

    test("Deve ser possível FILTRAR OS PRODUTOS VENCIDOS do estoque", () => { });

    test("Deve ser possível ATUALIZAR UM PRODUTO pelo ID", () => { });

    test("Deve ser possível LISTAR OS PRODUTOS no estoque", () => { });

    test("Deve ser possível REMOVER um item do estoque", () => { });
})

