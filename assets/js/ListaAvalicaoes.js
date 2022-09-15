class ListaAvaliacoes{
    constructor(){
    this._listaAvaliacoes = []
    }

    get listaAvaliacoes(){
        return this._listaAvaliacoes
    }

    adicionaAvaliacao(model){
        this._listaAvaliacoes.push(model)
    }
}