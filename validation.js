 const form = document.querySelector ("#info")
const email = document.querySelector ("#email")

form.addEventListener ("submit", (event) => {
    event.preventDefault()
    if (email.value === "") {
        console.log ("Formato no valido")
    } else {
        form.submit ();
    }
})