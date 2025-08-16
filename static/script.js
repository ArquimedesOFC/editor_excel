function responder(pergunta, resposta, btn){
    fetch('/salvar', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({[pergunta]: resposta})
    })
    .then(res => res.json())
    .then(data => {
        if(data.status === 'sucesso'){
            let feedback = btn.parentElement.querySelector('.feedback');
            feedback.textContent = 'Resposta salva!';
            setTimeout(()=>{ feedback.textContent=''; }, 1500);
        } else {
            alert('Erro ao salvar: ' + data.mensagem);
        }
    });
}
