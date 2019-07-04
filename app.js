document.getElementById("contact-form").addEventListener('submit', sendDataToLambda);

function sendDataToLambda()
{
    //Get Details
    var email = document.getElementById("formEmailInput")
    var emailObj = ""
    if(email)
    {
        emailObj = email.value();
    }
    
    var name = document.getElementById("formName")
    var nameObj = ""
    if(name)
    {
        nameObj = name.value();
    }

    var subject = document.getElementById("formSubject")
    var subjectObj = ""
    if(subject)
    {
        subjectObj = subject.value();
    }

    var messageObj = nameObj + " wants to contact you! Please revert back ASAP."

    // API Endpoint
    const endpoint ="https://7pzv90onq6.execute-api.us-east-1.amazonaws.com/default/contactForm2"
    //Creating the form object
    var body = {
        email:emailObj,
        subject: subjectObj,
        message: messageObj,
    }

    //Initialise Lambda Request with endpoint
    var lambaRequest = new Request(endpoint,{
        credentials: 'include',
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(body)
    })

    // Fetch request
    fetch(lambaRequest)

    window.alert("Message Sent!")
}