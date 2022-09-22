class AvaliacaoView{
    constructor(){
        let $ = document.querySelector.bind(document)
    this._elemento = $('#avaliacoes')
    this._layout = ``
    }

    layout(){
        if(window.innerWidth > 798){
        return this._layout = `<div class="avaliacao__box">
        <img class='avaliacao__img' src="${listaAvaliacoes._listaAvaliacoes[0].imagem}" alt="">
        <div class="avaliacao__descricao">
            <h4 class="avaliacao__nome">${listaAvaliacoes._listaAvaliacoes[0].nome}</h4>
            <p class="avaliacao__paragrafo">${listaAvaliacoes._listaAvaliacoes[0].descricao}</p>
        </div>
</div>
<div class="avaliacao__box">
    <img class='avaliacao__img' src="${listaAvaliacoes._listaAvaliacoes[1].imagem}" alt="">
    <div class="avaliacao__descricao">
        <h4 class="avaliacao__nome">${listaAvaliacoes._listaAvaliacoes[1].nome}</h4>
        <p class="avaliacao__paragrafo">${listaAvaliacoes._listaAvaliacoes[1].descricao}</p>
    </div>
</div>
<div class="avaliacao__box">
<img class='avaliacao__img' src="${listaAvaliacoes._listaAvaliacoes[2].imagem}" alt="">
<div class="avaliacao__descricao">
    <h4 class="avaliacao__nome">${listaAvaliacoes._listaAvaliacoes[2].nome}</h4>
    <p class="avaliacao__paragrafo">${listaAvaliacoes._listaAvaliacoes[2].descricao}</p>
</div>
</div>`}
            else{
                return this._layout = `<div class="avaliacao__box">
        <img class='avaliacao__img' src="${listaAvaliacoes._listaAvaliacoes[0].imagem}" alt="">
        <div class="avaliacao__descricao">
            <h4 class="avaliacao__nome">${listaAvaliacoes._listaAvaliacoes[0].nome}</h4>
            <p class="avaliacao__paragrafo">${listaAvaliacoes._listaAvaliacoes[0].descricao}</p>
        </div>`
            }
    }

    layout02(){
        return this._layout = `<div class="avaliacao__box">
        <img class='avaliacao__img' src="${listaAvaliacoes._listaAvaliacoes[3].imagem}" alt="">
        <div class="avaliacao__descricao">
            <h4 class="avaliacao__nome">${listaAvaliacoes._listaAvaliacoes[3].nome}</h4>
            <p class="avaliacao__paragrafo">${listaAvaliacoes._listaAvaliacoes[3].descricao}</p>
        </div>
</div>
<div class="avaliacao__box">
    <img class='avaliacao__img' src="${listaAvaliacoes._listaAvaliacoes[4].imagem}" alt="">
    <div class="avaliacao__descricao">
        <h4 class="avaliacao__nome">${listaAvaliacoes._listaAvaliacoes[4].nome}</h4>
        <p class="avaliacao__paragrafo">${listaAvaliacoes._listaAvaliacoes[4].descricao}</p>
    </div>
</div>
<div class="avaliacao__box">
<img class='avaliacao__img' src="${listaAvaliacoes._listaAvaliacoes[5].imagem}" alt="">
<div class="avaliacao__descricao">
    <h4 class="avaliacao__nome">${listaAvaliacoes._listaAvaliacoes[5].nome}</h4>
    <p class="avaliacao__paragrafo">${listaAvaliacoes._listaAvaliacoes[5].descricao}</p>
</div>
</div>`

    }

    update(){
        this._elemento.innerHTML = this._layout
    }
}