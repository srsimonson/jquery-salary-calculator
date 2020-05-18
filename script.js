$( document ).ready( readyNow );
function readyNow(){
    // functions get called here:
    $('#submitButton').on('click', handleSubmit);
    $('#employeeList').on('deleteBtn').on('click', '.deleteBtn', deleteItem);
    //$('#footer').on('something', turnRed);

} // end readyNow

// functions get created here
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
    // tallyMonthlyExpenses( monthlyExpenses );
    // displayEmployeeTable ( employeeArray );
    
} // end handleSubmit function

function deleteItem() {
    $(this).parent().remove();
}

function displayToDom() {
    //turnRed();
    let x = 0;
    let monthlyLabor = 0;
    $('#employeeList').empty();
    $('#totalSalaries').empty();
    for (let i=0; i<employeeArray.length; i++) {
        monthlyLabor = monthlyLabor + Number((employeeArray[i].annualSalary / 12));
        $('#employeeList').append(
        `<li>
            ${employeeArray[i].firstName}
            ${employeeArray[i].lastName}
            ${employeeArray[i].idNumber}
            ${employeeArray[i].title}
            ${employeeArray[i].annualSalary} 
            <button class="deleteBtn">delete</button>
        </li>`)
    } // end for loop
    x = x + monthlyLabor;
    monthlySpending = x;
    $('#totalSalaries').empty();
    $('#totalSalaries').append(x);
    console.log('in turnRed: ', monthlySpending);
    if ( monthlySpending > totalBudget) {
        $('#totalSalaries').css({"background-color":"red"});
    }
} // end displayToDom

// function turnRed(){
//     console.log('in turnRed: ', monthlySpending);
//     if ( monthlySpending > totalBudget) {
//         $('#totalSalaries').css({"background-color":"red"});
//     }
// }

// function appendEmployee() {
//     $('#iAppend').empty();
//     annualLabor = 0;
//     for (let i = 0; i < employeesEntered.length; i++) {
//         annualLabor += Number(employeesEntered[i].annualSalaryEntry);
//         // console.log('annualLabor', annualLabor); //Functions as intended
//         $('#iAppend').append(`
//         <tr>  
//             <td>${employeesEntered[i].firstNameEntry}</td>
//             <td>${employeesEntered[i].lastNameEntry}</td>
//             <td>${employeesEntered[i].iDEntry}</td>  
//             <td>${employeesEntered[i].jobTitleEntry}</td>
//             <td>${employeesEntered[i].annualSalaryEntry}</td>
//             <td><button class = "deleteBtn">Delete</button></td> 
//APPENDS our variables ^ to their respective fields
//         </tr>
//Also creates a delete button to be displayed inline with other appendages. :]
    
//         `);
//     }
//     calcMonthlyCost(); //calling our new function calcMonthlyCost which we will use to help us put an inline "counter" on monthlyLabor
// }




// function displayEmployeeTable( arrayParam ) {
//     // $( '#employeeTable').empty();
//     for ( let i=0; i<arrayParam.length; i++ )
//     console.log('in displayEmployeeTable:');
//     $('employeeTable').append();
// }


// function displayEmployeeTable ( arrayParam ) {
//     $( '#employeeTable' ).empty();
//     $( '#submitButton').on('click', newRow)

// } // end displayEmployeeTable function

// function newRow () {
//     // let first = $( '.firstName' ).val('');
//     // let last = $( '.lastName' ).val('');
//     // let idNumber = $( '.idNumber' ).val('');
//     // let title = $( '.title' ).val('');
//     // let annualSalary = $( '.annualSalary' ).val('');
//     $( '#peopleList').empty();
//     for ( let i=0; i<arrayParam.length; i++ )
//     // $('#peopleList').append(`
//     //         <td>${arrayParam[i].firstName}</td>
//     //         <td>${arrayParam[i].lastName}</td>
//     //         <td>${arrayParam[i].idNumber}</td>
//     //         <td>${arrayParam[i].title}</td>
//     //         <td>${arrayParam[i].annualSalary}</td>
//     //     `);
//     let markup = `
//     <tr>
//         <td>${arrayParam[i].firstName}</td>
//         <td>w</td>
//         <td>e</td>
//         <td>r</td>
//         <td>t</td>
//         <td><button class="deleteBtn">delete</button></td>
//     </tr>`;
//     $("table tbody").append(markup);
//     // or let button = `<li>${arrayParam[i].firstName} ${arrayParam[i].lastName}<button class="deleteBtn">delete<button></li>`
// } // end newRow function


// const row = tr td. append(row)
// delete row
// function deleterow is a loop

// let row = (<th>
//     <td>${arrayParam[i].firstName}</td>
//     <td>${arrayParam[i].lastName}</td>
//     <td>${arrayParam[i].idNumber}</td>
//     <td>${arrayParam[i].title}</td>
//     <td>${arrayParam[i].annualSalary}</td>
// </th>);


// `
//     <td>${arrayParam[i].firstName}</td>
//     <td>${arrayParam[i].lastName}</td>
//     <td>${arrayParam[i].idNumber}</td>
//     <td>${arrayParam[i].title}</td>
//     <td>${arrayParam[i].annualSalary}</td>