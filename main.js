//Start of Add Message

//Check if the comment array has been created yet
if (localStorage.getItem('contactSubmissions') === null) {
    var contactSubmissions = []; //I used var because I wanted list_of_comments to persist outside of the if statement and const wasn't doing this either
} else {
//Parse the serialized data back into an array of objects
    var contactSubmissions = JSON.parse(localStorage.getItem('contactSubmissions')); //I used var because I wanted list_of_comments to persist outside of the if statement and const wasn't doing this either
}
         
//Add input message details into the appropriate comment array
const addMessage = (ev)=>{
    
    //Stop the form from automatically submitting
    ev.preventDefault();  

    //Extract user input and assign them to simple names for validation process
    let from = document.getElementById('from').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    
    //Clear a remianing successful submission message
    document.getElementById("subResult").innerHTML = "";
    
    //Validate the user input to make sure they entered all required elements
    if (from.length < 1) {
        //Display message telling the user what element is missing
        document.getElementById("eResult").innerHTML = "Please Enter a Valid Email Address";
    }
    if (subject.length < 1) {
        document.getElementById("eResult").innerHTML = "Please Enter a Message Subject";
    }
    if (message.length < 1) {
        document.getElementById("eResult").innerHTML = "Please Enter a Message";
    }
    //If no elements are missing, take the following steps to add comment to an array  
    if (from.length > 0 && subject.length > 0 && message.length>0) {
        
        //Make sure all error messages have been cleared
        document.getElementById("eResult").innerHTML = "";    
        
        //Establish getSubmission function that returns an object
        function getSubmission(to, from, subject, message) {
            let submission = {
                to:  to,
                from: from,
                subject: subject,
                message: message,
            };
            return submission;
        }
  
        //Create an instance of getSubmission with user input data        
        let inputSubmission = getSubmission(
            "kimberly_hirsch@berkeley.edu",
            document.getElementById('from').value,
            document.getElementById('subject').value,
            document.getElementById('message').value);
                
        //Add inputsubmission to the contactSubmissions array
        contactSubmissions.push(inputSubmission);
        
        //Clear the form for the next entry
        document.forms[0].reset(); 
  
        //Save the array to localStorage
        localStorage.setItem('contactSubmissions', JSON.stringify(contactSubmissions));
        
        //Print a successful submission message
        document.getElementById("subResult").innerHTML = "Your message has been sent";
    }   
}

document.addEventListener('DOMContentLoaded', ()=>{
document.getElementById('btn').addEventListener('click', addMessage);
});
                