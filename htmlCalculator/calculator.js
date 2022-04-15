const addForm = document.addForm
const subForm = document.subForm
const multiplyForm = document.multiplyForm

addForm.addEventListener("submit", function(event) {
    event.preventDefault()
// used 'parseInt' because it is passing a string and
// and that turns the string into a number so I can add them.
    const firstNum = parseInt(addForm.addFirstNum.value)
    const secondNum = parseInt(addForm.addSecondNum.value)

    addForm.addFirstNum.value = ""
    addForm.addSecondNum.value = ""

    const h2 = document.createElement('h2')

    const sum = firstNum + secondNum

    h2.textContent = firstNum + ' + ' + secondNum + ' = ' + sum

    document.getElementsByTagName('main')[0].append(h2)
})


subForm.addEventListener("submit", function(event) {
    event.preventDefault()

    const firstNum = parseInt(subForm.subFirstNum.value)
    const secondNum = parseInt(subForm.subSecondNum.value)

    subForm.subFirstNum.value = ""
    subForm.subSecondNum.value = ""

    const h2 = document.createElement('h2')
    
    const sum = firstNum - secondNum

    h2.textContent = firstNum + ' - ' + secondNum + ' = ' + sum

    document.getElementsByTagName('main')[0].append(h2)
})


multiplyForm.addEventListener("submit", function(event) {
    event.preventDefault()

    const firstNum = parseInt(multiplyForm.multiplyFirstNum.value)
    const secondNum = parseInt(multiplyForm.multiplySecondNum.value)

    multiplyForm.multiplyFirstNum.value = ""
    multiplyForm.multiplySecondNum.value = ""

    const h2 = document.createElement('h2')
    
    const sum = firstNum * secondNum

    h2.textContent = firstNum + ' * ' + secondNum + ' = ' + sum

    document.getElementsByTagName('main')[0].append(h2)
})


