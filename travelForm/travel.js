const form = document.inputForm

form.addEventListener("submit", function(e) {
    e.preventDefault()

    const firstName = form.fname.value
    const lastName = form.lname.value

    const age = form.age.value

    const gender = form.gender.value

    const checkedInputs = []

    const city = form.city.value


    for(let i = 0; i < form.food.length; i++) {
        if(form.food[i].checked) {
            checkedInputs.push(form.food[i].value)
        }
    }


    alert(` First Name: ${firstName} \n
        Last Name: ${lastName} \n
        Age: ${age} \n
        Gender: ${gender} \n
        Location: ${city} \n
        Dietary Restrictions: ${checkedInputs}`)
})