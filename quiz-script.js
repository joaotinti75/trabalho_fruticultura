function renderizarHTML() {
    let areaQuiz = document.querySelector('#area-quiz');
    for (let i=0; i<10; i++) {
        let pergunta = document.createElement('div');
        pergunta.classList.add('question','bg-white','p-3','border-bottom');

        pergunta.innerHTML =
            `
            <div class="d-flex flex-row align-items-center question-title">
                <h3 class="text-danger">${i + 1}.</h3>
                <h5 class="mt-1 ml-2">${perguntas[i]}</h5>
            </div>
            <div class="ans ml-2">
                <label class="radio"> <input type="radio" name="${'r'+(i+1)}" value="${alternativas[i].a}"> <span>${alternativas[i].a}</span>
                </label>
            </div>
            <div class="ans ml-2">
                <label class="radio"> <input type="radio" name="${'r'+(i+1)}" value="${alternativas[i].b}"> <span>${alternativas[i].b}</span>
                </label>
            </div>
            <div class="ans ml-2">
                <label class="radio"> <input type="radio" name="${'r'+(i+1)}" value="${alternativas[i].c}"> <span>${alternativas[i].c}</span>
                </label>
            </div>
            <div class="ans ml-2">
                <label class="radio"> <input type="radio" name="${'r'+(i+1)}" value="${alternativas[i].d}"> <span>${alternativas[i].d}</span>
                </label>
            </div>
            <br>
            <button id="${'r'+(i+1)}" class="btn btn-primary enviar">Clique aqui para responder</button>
            <div class="respostas">
                <div class="alert alert-danger errada" role="alert">
                    Resposta errada!
                </div>
                <div class="alert alert-success certa" role="alert">
                    Resposta certa!
                </div>
            </div>
            `
        areaQuiz.appendChild(pergunta);
    }
   
}//fechamento renderizarHTML

function checarResposta(respostaUsuario, respostasCorretas) {
    if (respostaUsuario.value == respostasCorretas[respostaUsuario.name]){
        return 1;
    } else {
        return 0; 
    }
}//fechamento checarResposta

function exibirResposta(acertou, botao) {
    let resposta = botao.nextElementSibling;
    if (acertou) {
        resposta.querySelector('.certa').style.display = 'block';
        resposta.querySelector('.errada').style.display = 'none';

    } else {
        resposta.querySelector('.errada').style.display = 'block';
        resposta.querySelector('.certa').style.display = 'none';
    }
}//fechamento exibirResposta

renderizarHTML();

document.querySelectorAll('.enviar').forEach( botao => {
    let acertou;
    botao.addEventListener('click', () => {
        let respostaUsuario = document.querySelector(`input[name=${botao.id}]:checked`);
        console.log(respostaUsuario);
        if (respostaUsuario == null) {
            alert('Marque uma alternativa!');
        } else {
            acertou = checarResposta(respostaUsuario, respostasCorretas); 
            exibirResposta(acertou, botao);   
        }
    })
})
