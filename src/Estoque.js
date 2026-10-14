export class Estoque {
    #itens = new Map();

    cadastrarltem(id, data) {
        this.#itens.set(id, data)
    }
    consultarEstoque() { // Estoque todo
        return [...this.#itens]
    }
    buscarltemPorID(id) {
        return this.#itens.get(id)
    }
    buscarltemPorNome(nome) {
        let item = '';
        this.#itens.forEach((value, key) => {
            if(value.nome === nome) item = value; 
        });
        return item
    }
    gerarRelatorio() { } // Estoque todo com formatação
    filtrarProdutosVencidos() { }
    atualizarProduto(id, newData) { }
    listarProdutos() { } // Lista só os produtos
    removerltem(id) { }
}