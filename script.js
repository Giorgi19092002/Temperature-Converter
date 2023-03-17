let celsius = document.getElementById('celsius')
let farenhait = document.getElementById('fahrenhati')

celsius.oninput = () => {
    let output = (parseFloat(celsius.value) * 9) / 5 + 32
    farenhait.value = parseFloat(output.toFixed(2))
}

farenhait.oninput = () => {
    let output = ((parseFloat(farenhait.value) - 32) * 5) / 9
    celsius.value = parseFloat(output.toFixed(2))
}