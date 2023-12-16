const form = document.getElementById('formulario')
const A = document.getElementById('Campo-A')
const B = document.getElementById('Campo-B')
const acerto = document.getElementById('valido')
const erro = document.getElementById('erro')


function validaForm(A, B) {
    return B > A
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    let campos = validaForm(A.valueAsNumber, B.valueAsNumber)
    if(campos){
        acerto.style.display = 'block'
        erro.style.display = 'none'
    }    
})

A.addEventListener('keyup', function(e){
    let campos = validaForm(A.valueAsNumber, B.valueAsNumber)
    if (!campos){
        erro.style.display = 'block'
        acerto.style.display = 'none'
    }
})