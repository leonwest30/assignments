const form = document.marioForm

form.addEventListener("submit", function(e) {
    e.preventDefault()

    const goomba = form.goomba.value * 5

    const bobomb = form.bobomb.value * 7

    const cheep = form.cheepcheep.value * 11

    const sum = goomba + bobomb + cheep

    const h3 = document.createElement('h3')

    h3.textContent = `You earned ${sum} coins!`

    document.getElementsByTagName('div')[6].append(h3)

})