
document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();

    // get form values
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // simple validation
    if (fullname === '' || email === '' || message === '') {
        alert('Please fill in all fields');
        return;
    }
    // send form data to server (you can use fetch or axios)
    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fullname, email, message })
    }).then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Message sent successfully!');
                document.getElementById('contact-form').reset();
            } else {
                alert('Failed to send message. Please try again later.');
            }
        }).catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
})
