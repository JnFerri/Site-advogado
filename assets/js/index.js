let listaAvaliacoes = new ListaAvaliacoes()

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

let $ = document.querySelector.bind(document)
    var localPost = $('#avaliacoes')
    var botao = $('#botaoAvaliacao')
    var n = 0
document.onload = avaliacoes()

function avaliacoes(){
    
        for(let i = 0; i<(listaAvaliacoes._listaAvaliacoes.length -3);i++)
             localPost.innerHTML += `<div class="avaliacao__box">
              <img class='avaliacao__img' src="${listaAvaliacoes._listaAvaliacoes[i].imagem}" alt="">
              <div class="avaliacao__descricao">
                  <h4 class="avaliacao__nome">${listaAvaliacoes._listaAvaliacoes[i].nome}</h4>
                  <p class="avaliacao__paragrafo">${listaAvaliacoes._listaAvaliacoes[i].descricao}</p>
              </div>
          </div>`
          }
          

function proximoAvaliacao(){
   
    
        for(let i = 3; i<listaAvaliacoes._listaAvaliacoes.length;i++)
             localPost.innerHTML += `<div class="avaliacao__box">
              <img class='avaliacao__img' src="${listaAvaliacoes._listaAvaliacoes[i].imagem}" alt="">
              <div class="avaliacao__descricao">
                  <h4 class="avaliacao__nome">${listaAvaliacoes._listaAvaliacoes[i].nome}</h4>
                  <p class="avaliacao__paragrafo">${listaAvaliacoes._listaAvaliacoes[i].descricao}</p>
              </div>
          </div>`
          botao.style.visibility = 'hidden'
          }
    
          
          




