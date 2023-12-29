const form = document.getElementById('form-valido')
let formEValido = false;

function numValido(num1, num2) {
    return num1 < num2
}

form.addEventListener('submit', function(e){
    e.preventDefault()
    let num1 = Number(document.getElementById('Primeiro-num').value)
    let num2 = Number(document.getElementById('Segundo-num').value)
    const mensagemSucesso = `O primeiro número: ${num1} é menor que o segundo número: ${num2}`
    const mensagemErro = `O primeiro número deve ser menor que o segundo`

    if (numValido(num1, num2)){
        const ConteinerMensagemSucesso = document.querySelector('.success-message')
        ConteinerMensagemSucesso.innerHTML = mensagemSucesso
        ConteinerMensagemSucesso.style.display = 'block'
        num1.value = ''
        num2.value = ''
        document.querySelector('.error-message').style.display = 'none'
    } else {
        const ConteinerMensagemErro = document.querySelector('.error-message')
        ConteinerMensagemErro.innerHTML = mensagemErro
        ConteinerMensagemErro.style.display = 'block'
        document.querySelector('.success-message').style.display = 'none'
    }

})