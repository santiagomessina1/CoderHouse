
function validate(){let name = document.getElementById("name").value;
    console.log(name);
    let subject = document.getElementById("subject").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
let text;
    if(name.length < 5){
      text = "Por favor ingrese correctamente su nombre y apellido ";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 10){
      text = "Por favor ingrese correctamente su asunto";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Por favor ingrese correctamente su telefono";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Por favor ingrese correctamente su email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 10){
      text = "Por favor ingrese un mensaje mayor a 10 caracteres";
      error_message.innerHTML = text;
      return false;
    }
    alert("Formualrio enviado correctamente!");
    return true;
  }


  