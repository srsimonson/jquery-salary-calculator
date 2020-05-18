$( document ).ready( readyNow );
function readyNow(){
// functions get called here:
    $('#submitButton').on('click', handleSubmit);
    $('#employeeTable').on('deleteBtn').on('click', '.deleteBtn', deleteItem);
    //$('#footer').on('something', turnRed);

} // end readyNow

// functions get created here:
const totalBudget = 20000;
let monthlySpending = 0;
let employeeArray = []; // empty array of employees to be pushed

function handleSubmit() { // what happens when you click submit
    let firstName = $( '.firstName' ).val(); // retrieve data from DOM input
    let lastName = $( '.lastName' ).val();
    let idNumber = $( '.idNumber' ).val();
    let title = $( '.title' ).val();
    let annualSalary = $( '.annualSalary' ).val();
    let employeeObject = {
        firstName: firstName,
        lastName: lastName,
        idNumber: idNumber,
        title: title,
        annualSalary: annualSalary
    } // end employeeObject

    employeeArray.push( employeeObject ); // push employee object into employee array
    $( '.firstName' ).val('');
    $( '.lastName' ).val('');
    $( '.idNumber' ).val('');
    $( '.title' ).val('');
    $( '.annualSalary' ).val('');
    displayToDom( employeeArray );
} // end handleSubmit function

function deleteItem() {
    $(this).parent().parent().remove();
}

function displayToDom() {
    let x = 0;
    let monthlyLabor = 0;
    $('#employeeTable').empty();
    $('#totalSalaries').empty();
    for (let i=0; i<employeeArray.length; i++) {
        monthlyLabor =  monthlyLabor + Number((employeeArray[i].annualSalary / 12));
        $('#employeeTable').append(
        `<tr>
            <td>${employeeArray[i].firstName}</td>
             <td>${employeeArray[i].lastName}</td>
             <td>${employeeArray[i].idNumber}</td>
             <td>${employeeArray[i].title}</td>
             <td>${employeeArray[i].annualSalary}</td> 
             <td><button class="deleteBtn">delete</button></td>
         </td>`)
    } // end for loop
    x = x + monthlyLabor;
    monthlySpending = x;
    $('#totalSalaries').empty();
    $('#totalSalaries').append(x.toFixed(2));
    console.log('in turnRed: ', monthlySpending);
    if ( monthlySpending > totalBudget) {
        $('#totalSalaries').css({"background-color":"red"});
    }
} // end displayToDom


        // `<li>
        //     ${employeeArray[i].firstName}
        //     ${employeeArray[i].lastName}
        //     ${employeeArray[i].idNumber}
        //     ${employeeArray[i].title}
        //     ${employeeArray[i].annualSalary} 
        //     <button class="deleteBtn">delete</button>
        // </li>`)