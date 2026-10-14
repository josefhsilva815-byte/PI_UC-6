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
        for(const [key, value] of this.#estoque) {
            estoque.push(...value)
            // estoque[key].push(...value);
        }
        return estoque
    }

    buscarltemPorID(id) {
        const tipo = id.split('-')[0];
        const table = this.#estoque.get(tipo);
        return table.get(id)
    }
    buscarltemPorNome(nome) {
        const resultado = {};
        for(const [key, value] of this.#estoque) {
            value.forEach((data, id) => {
                resultado[data.nome.toLowerCase()] = {...data};
            })
        }

        return resultado[nome.toLowerCase()]
    }
    gerarRelatorio() { } // Estoque todo com formatação
    filtrarProdutosVencidos() { }
    atualizarProduto(id, newData) { }
    listarProdutos() { } // Lista só os produtos
    removerltem(id) { }
}