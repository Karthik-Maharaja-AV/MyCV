function sendMail(){
    var parms = {
        name: document.getElementsByName('name').value,
        lastname: document.getElementsByName('lastname').value,
        email: document.getElementsByName('email').value,
        phno: document.getElementsByName('phno').value,
        message: document.getElementsByName('Message').value
    }
    const serviceId = "service_57vf014";
const templteId = "template_o7hje27";

emailjs.send(serviceId,templteId,parms).then((res) =>{
    
        document.getElementsByName('name').value = '',
        document.getElementsByName('lastname').value = '',
        document.getElementsByName('email').value = '',
        document.getElementsByName('phno').value = '',
        document.getElementsByName('Message').value = '';
        console.log(res);
        alert("Message sent");
    })
    .catch((err) => console.log(err));
}


