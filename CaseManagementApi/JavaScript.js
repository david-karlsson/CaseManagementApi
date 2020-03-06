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

function getCustomer() {
fetch('http://localhost:51219/api/customers')

        .then(res => res.json())
        .then(data => {

            let options = data.map(option => `<option value="${option.id}">${option.status}</option>`)
        })
}


function newCaseWorker(e) {

    e.preventDefault()



    var caseworker = {
        firstname: e.target["firstname"].value,
        lastname: e.target["lastname"].value,
        email: e.target["email"].value,
        phone: e.target["phone"].value,

    }



    fetch('http://localhost:51219/api/caseworkers', {

        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.Stringify(caseworker)
    })

        .then(res => res.json())
        .then(data => {
            console.log(data)


        })
}