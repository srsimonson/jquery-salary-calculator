console.log('js');
$( document ).ready( readyNow );
function readyNow(){
    console.log('jq');
  
    // functions get called here
    addNumbers(3, 2);
    $('#submitButton').on('click', handleSubmit);

} // end readyNow



// functions get created here
function addNumbers (num1, num2){
    console.log(num1 + num2);
    return num1 + num2;
}

let employeeArray = [];
function handleSubmit() {
    let firstName = $( '#firstName' ).val();
    let lastName = $( '.lastName' ).val();
    let idNumber = $( '#idNumber' ).val();
    let title = $( '#title' ).val();
    let annualSalary = $( '#annualSalary' ).val();
    let employeeObject = {
        firstName: firstName,
        lastName: lastName,
        idNumber: idNumber,
        title: title,
        annualSalary: annualSalary
    } // end personObject
    employeeArray.push( employeeObject );
    $( '#firstName' ).val('');
    $( '.lastName' ).val('');
    $( '#idNumber' ).val('');
    $( '#title' ).val('');
    $( '#annualSalary' ).val('');
    displayEmployees( employeeArray );
    console.log('employeeArray:', employeeArray);
    
} // end handleSubmit function

function displayEmployees( arrayParam ) {
    $( '#peopleList').empty();
    for ( let i=0; i<arrayParam.length; i++ )
    $('#peopleList').append(`
            <td>${arrayParam[i].firstName}</td>
            <td>${arrayParam[i].lastName}</td>
            <td>${arrayParam[i].idNumber}</td>
            <td>${arrayParam[i].title}</td>
            <td>${arrayParam[i].annualSalary}</td>
        `);
}