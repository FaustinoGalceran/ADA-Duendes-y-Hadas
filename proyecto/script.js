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
Toastify({
    text: "Sus datos fueron enviados correctamente.",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: Contacto(){} // Callback after click
  }).showToast();