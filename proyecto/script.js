class Contacto{
    constructor(Email,numero){
        this.Email = Email;
        this.numero = numero;
    }
}

let formContacto = document.getElementById('formContacto')

let Contacto = []

// Eventos

formContacto.addEventListener('submit', (e) => {
    e.preventDefault()
    let Email = document.getElementById('Email').value
    let numero= document.getElementById('numero').value
    
    const Contacto = new Contacto(Email,numero)
    Contacto.push(Contacto)
    console.log(Contacto)
    
})