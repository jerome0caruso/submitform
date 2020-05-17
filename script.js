
const form = {
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    message: document.getElementById("message"),
    submit: document.getElementById("btn-submit"),
    messages: document.getElementById("form-messages")

}


function sendForm() {

    const request = new XMLHttpRequest();
    
    request.onload = () =>{
        let responseObject = null;
        
        try {
            responseObject = JSON.parse(request.responseText);
            
        } catch(e){
            console.error('Could not parse JSON!')
        }
        
        if(responseObject) {
               handleResponse(responseObject);      
        }
        
    };
    
    const requestData = `name=${form.name.value}&email=${form.email.value}&message=${form.message.value}`;

    request.open('post', 'sub.php');
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send(requestData);
}    

function handleResponse(responseObject){
    if(responseObject.ok) {
        location = "fLandingPage.html";
    } else {
        while (form.messages.firstChild){
            form.messages.removeChild(form.messages.firstChild);
        }
        responseObject.messages.forEach((message) => {
            const li = document.createElement("li");
            li.textContent = message;
            form.messages.appendChild(li);
        })

        form.messages.style.display = "block";
    }
}


form.submit.addEventListener("click", sendForm);
