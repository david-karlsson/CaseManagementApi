function newCustomer(e) {

    e.preventDefault()



    var customer = {
        firstname: e.target["firstname"].value,
        lastname: e.target["lastname"].value,
        adressline: e.target["adressline"].value,
        postalcode: e.target["postalcode"].value,
        city: e.target["city"].value,
        email: e.target["email"].value,
        phone: e.target["phone"].value,

    }



    fetch('http://localhost:51219/api/customers', {

        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.Stringify(customer)
    })

        .then(res => res.json())
        .then(data => {
            console.log(data)


        })
}