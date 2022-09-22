let listaAvaliacoes = new ListaAvaliacoes()
let avaliacaoView = new AvaliacaoView()

let avaliacao01 = new Avaliacao (
    `assets/imagens/imagens clientes/img__1.png`,
    `Alan Bernardo`,
    `Exelente profissional, sempre pronto para me atender e me auxiliar exercendo seu serviço com muito carrinho e dedicação.`
    )

    let avaliacao02 = new Avaliacao (
     `assets/imagens/imagens clientes/img__2.png`,
     `Sabrina Costa`,
     `Ótimo profissional, atendimento incrivel e muito profissional.`
     )

    let avaliacao03 = new Avaliacao (
     `assets/imagens/imagens clientes/img__3.png`,
      `Itamar`,
     `Sou cliente do dr desde o começo de 2019. Sempre que preciso de algo o atendimento é rápido e o problema solucionado na maioria das vezes sem precisar entrar com alguma ação. Recomendo`
     )

    let avaliacao04 = new Avaliacao (
     `assets/imagens/imagens clientes/img__4.png`,
     `Fabricio`,
     `Muito Bom !!`
     )
     let avaliacao05 = new Avaliacao (
    `assets/imagens/imagens clientes/img__5.png`,
    `Neusa da Silva`,
    `Profissional muito bom, fui ao escritorio e em poucos dias meu problema foi resolvido`
    )
    let avaliacao06 = new Avaliacao (
        `assets/imagens/imagens clientes/img__6.png`,
        `Carlos Alberto`,
        `Atendimento de primeira, parabens !!`
        )

listaAvaliacoes.adicionaAvaliacao(avaliacao01)
listaAvaliacoes.adicionaAvaliacao(avaliacao02)
listaAvaliacoes.adicionaAvaliacao(avaliacao03)
listaAvaliacoes.adicionaAvaliacao(avaliacao04)
listaAvaliacoes.adicionaAvaliacao(avaliacao05)
listaAvaliacoes.adicionaAvaliacao(avaliacao06)
avaliacaoView.layout(listaAvaliacoes)

document.onload = avaliacaoView.update()
var i = 0
function anteriorAvaliacao(){
    avaliacaoView.layout(listaAvaliacoes)
    document.onload = avaliacaoView.update()
    i--
}

function proximoAvaliacao(){
    avaliacaoView.layout02(listaAvaliacoes)
    document.onload = avaliacaoView.update()
    i++
}



