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







function newCase(e) {

    e.preventDefault()

    var _case = {

        caseWorkerId: parseInt(e.target["caseworkerbox"].value),
        customerId: parseInt(e.target["customerbox"].value),
        caseStatusId: parseInt(e.target["statusbox"].value),
        title: parseInt(e.target["title"].value),
        description: parseInt(e.target["description"].value),
        created: new Date(),
        modified: new Date()
    }



    fetch('http://localhost:51219/api/cases', {

        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.Stringify(_case)
    })

        .then(res => res.json())
        .then(data => {
            console.log(data)


        })


}




function newCaseStatus(e) {

    e.preventDefault()



    var caseworker = {
        status: e.target["status"].value,
        

    }



    fetch('http://localhost:51219/api/casestatus', {

        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.Stringify(casestatus)
    })

        .then(res => res.json())
        .then(data => {
            console.log(data)


        })
}


function getStatus() {
    fetch('http://localhost:51219/api/casestatus')

        .then(res => res.json())
        .then(data => {

            let options = data.map(option => `<option value="${option.id}">${option.status}</option>`)
            document.getElementById("statusbox").innerHTML = options
        })
}

function getCustomers() {
    fetch('http://localhost:51219/api/customers')

        .then(res => res.json())
        .then(data => {

            let options = data.map(option => `<option value="${option.id}">${option.firstname}${option.lastname}</option>`)
            document.getElementById("customerbox").innerHTML = options
        })
}



function getCaseWorkers() {
    fetch('http://localhost:51219/api/caseworkers')

        .then(res => res.json())
        .then(data => {

            let options = data.map(option => `<option value="${option.id}">${option.firstname}${option.lastname}</option>`)
            document.getElementById("caseworkerbox").innerHTML = options
        })
}


function getCases() {
    fetch('http://localhost:51219/api/cases')

        .then(res => res.json())
        .then(data => {

            let cases = data.map(_case => `
            <tr>

            <td>${_case.id}</td>
            <td>${_case.caseStatus.status}</td>
            <td>${_case.customer.firstname}${_case.customer.lastname}</td>
            <td>${_case.caseworker.firstname}${_case.caseworker.lastname}</td>
            <td>${_case.title}</td>
            <td>${_case.description}</td>
            <td>${_case.created}</td>

       
            </tr>
            `)
            document.getElementById("casetablebox").innerHTML = cases
        })
}
getStatus();
getCustomers();
getCaseWorkers();


document.getElementById("createCustomerForm").addEventListener("submit", newCustomer(e))
document.getElementById("createCaseWorkerForm").addEventListener("submit", newCaseWorker(e))
document.getElementById("createCaseStatusForm").addEventListener("submit", newCaseStatus(e))
document.getElementById("createCaseForm").addEventListener("submit", newCase(e))