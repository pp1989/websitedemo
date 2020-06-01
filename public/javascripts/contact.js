function contactSubmit() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    axios.post('/users/', {
        name: name,
        email: email,
        subject: subject,
        message: message

    }).then((response) => {
        console.log("RESPONSE", response)
        swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '---------Encrypted Information--------',
            text: `"Name:"${response.data.Name}
                    "Email:" ${response.data.Email} 
                    "Subject:" ${response.data.Subject} 
                    "Message:" ${response.data.Message}`,
            confirmButtonText: 'Close',
            timer: 6000,
            background: '#00ccff',
        }).then(() => {
            location.replace('/')
        })
    })
}
