class Avaliacao{
    constructor(imagem,nome,descricao){
        this._imagem = imagem
        this._nome = nome
        this._descricao = descricao
    }

    get imagem(){
        return this._imagem
    }

    get nome(){
        return this._nome
    }

    get descricao(){
        return this._descricao
    }

}