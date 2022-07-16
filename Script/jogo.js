let box = document.getElementsByClassName("box")
let checarTurno = true

const jogador_X = "X"
const jogador_O = "O"

let reset = document.getElementById('reset')

const casasIguais = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]




document.addEventListener("click", (event) => {
    if(event.target.matches(".box")){
    jogar(event.target.id)

}    
})



function jogar(id) {
    const celula = document.getElementById(id)
    turno = checarTurno ? jogador_X : jogador_O
    celula.textContent = turno
    celula.classList.add(turno)
    checarVencedor(turno)
}



function checarVencedor() {
    const vencedor = casasIguais.some((comb) => {
        return comb.every((index) => {
            return box[index].classList.contains(turno)
        })
    })

    if (vencedor){
        encerrarJogo(turno)
    } else if (checarEmpate()) {
        encerrarJogo()
    } else {
        checarTurno = !checarTurno
    }
}

function checarEmpate() {
    let x = 0
    let o = 0

    for (index in box) {
        if(!isNaN(index)) {
        if(box[index].classList.contains(jogador_X)) {
            x++
        }

        if(box[index].classList.contains(jogador_O)) {
            o++
        }
    }
}

    return x + o === 9 ? true : false
}



function encerrarJogo(vencedor = null) {
    const telaEscura = document.getElementById("tela_escura")
    const h2 = document.createElement("h2")
    const h3 = document.createElement("h3")
    let mensagem = null

    telaEscura.style.display = "block"
    telaEscura.appendChild(h2)
    telaEscura.appendChild(h3)



    if(vencedor) {
        h2.innerHTML = "O jogador " + (vencedor) + " venceu!"
    } else {
        h2.innerHTML = "Empate!"
    }
}

