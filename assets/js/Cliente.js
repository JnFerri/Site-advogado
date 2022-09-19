class Cliente{
    constructor(nome, email, mensagem){
        this._nome = document.getElementById('nome')
        this._email = document.getElementById('email')
        this._mensagem = document.getElementById('mensagem')
    }

    get nome(){
        return this._nome
    }

    get email(){
        return this._email
    }

    get mensagem(){
        return this._mensagem
    }
}