export class Estoque {
    #estoque = new Map()

    constructor(tableName) {
        let index = 0;
        while (this.#estoque.size < tableName.length) {
            this.#estoque.set(tableName[index], new Map());
            index++
        }
    }

    cadastrarltem(tipo, data) {
        const table = this.#estoque.get(tipo);
        const codigo = `${tipo}-${data.id < 100 ? 0 : ""}${data.id < 10 ? 0 : ""}${data.id}`;
        table.set(codigo, data)
    }

    consultarEstoque() { // Estoque todo
        const estoque = [];
        for (const [key, value] of this.#estoque) {
            estoque.push(...value)
        }
        return estoque
    }

    buscarltemPorID(id) {
        const tipo = id.split('-')[0];
        const table = this.#estoque.get(tipo);
        return table.get(id)
    }
    buscarltemPorNome(nome) {
        const resultado = [];
        for (const [key, value] of this.#estoque) {
            value.forEach((data, id) => {
                if (data.nome.toLowerCase() === nome.toLowerCase()) {
                    resultado.push({ ...data });
                }
            })
        }

        return resultado
    }
    gerarRelatorio() { // Estoque todo com formatação
        const estoque = this.consultarEstoque().map(p => p[1])
        const relatorio = ["Nome | Quantidade | Em Uso | Preço | Data de Validade"];
        estoque.forEach(item => { relatorio.push(`${item.nome} | ${item.quantidade} | ${item.em_uso ?? '-'} | ${item.preco ?? '-'} | ${item.data_validade ?? '-'}`) })

        return relatorio.join("\n")
    }
    filtrarProdutosVencidos() {
        const estoque = this.consultarEstoque().map(p => p[1]);
        const vencidos = estoque.filter(item => item.data_validade && new Date(item.data_validade) < new Date());
        const na_validade = estoque.filter(item => item.data_validade && new Date(item.data_validade) > new Date());

        return { vencidos, na_validade }
    }
    atualizarProduto(id, newData) {
        const tipo = id.split('-')[0];
        const table = this.#estoque.get(tipo);
        return table.set(id, newData)
    }

    listarProdutos() { // Lista só os produtos
        const estoque = this.consultarEstoque().map(p => p[1]);
        return estoque.filter(item => item.data_validade);
    }
    removerltem(id) {
        const tipo = id.split('-')[0];
        const table = this.#estoque.get(tipo);
        table.delete(id)
    }
}