const form = document.getElementById("form")
const campos =  document.querySelectorAll(".required")
const spans = document.querySelectorAll(".span-required")
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let camposPreenchidos = 0

function setError(index){
    campos[index].style.border = "2px solid #FF5252"
    spans[index].style.display = "block"
}

function removeErro(index){
    campos[index].style.border = ""
    spans[index].style.display = "none"
}

campos[0].addEventListener("input", ()=>{
    if(campos[0].value.length <= 3){
        setError(0)
    }
    else{
        removeErro(0)
        camposPreenchidos += 1
    }
})

campos[2].addEventListener("input", ()=>{
    if(!emailRegex.test(campos[2].value)){
        setError(2)
    }else{
        removeErro(2)
        camposPreenchidos += 1
    }
})

campos[3].addEventListener("input", ()=> {
    if(campos[3].value.length < 8){
        setError(3)
    }else{
        removeErro(3)
        camposPreenchidos += 1
    }
})

campos[4].addEventListener("input", ()=>{
    if(campos[4].value !== campos[3].value && campos[4].value.length != campos[3].value.length ){
        setError(4)
    }else{
        removeErro(4)
        camposPreenchidos += 1
    }
})

function todosCamposValidos() {
    return (
        campos[0].value.length > 3 && 
        emailRegex.test(campos[2].value) && 
        campos[3].value.length >= 8 && 
        campos[4].value === campos[3].value && campos[4].value.length === campos[3].value.length 
    );
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!todosCamposValidos()) {
        alert("Por favor, preencha todos os campos obrigatórios corretamente.");
    } else {
        alert("Formulário enviado com sucesso!");
    }
});